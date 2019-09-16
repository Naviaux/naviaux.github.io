/*Mechanics:
	After spending x mana, increase mana by y amount
	Researching and Constructing stops the caster from interacting with enemies
	Researching is used to discover new elements, constructs, and upgrades.
	Constructs are used for various things; from storing mana to increasing research speed to killing enemies
	Constructs take damage prior to the caster
*/
var IDLE = 0;
var FIGHTING = 1;
var RESEARCHING = 2;
var CONSTRUCTING = 3;
var SPELL = 4;

var game = {
	player : {
		currentAction : IDLE,
		currentResearch : "",
		safetyNet : 20,
		stats : {
			hp : {
				current : 100,
				max : 100,
			},
			mana : {
				current : 100,
				max : 100,
				increaseAmount : 1,
				increaseRequired : 1000,
				increaseCounter : 0,
				regenFlat : 1,
				regenMax : 0,
				regenCurrent : 0,
				regenDelay : 5, // 5 tick : 500ms
				regenCounter : 0,
			},
			research : {
				progress : 1,
				progressMultiplier : 1,
				speed : 1, // unused
				delay : 0, // unused
			},
			construction : {
				progress : 1,
				progressMultiplier : 1,
				speed : 20,
				delay : 0,
			}
		},
		spells : [
			{	/* Spell One */
				unlocked : true,
				attributes : ["arcana"]
			},
			{	/* Spell Two */
				unlocked : false,
				attributes : ["wind"]
			},
			{	/* Spell Three */
				unlocked : false,
				attributes : ["arcana"]
			},
			{	/* Spell Four */
				unlocked : false,
				attributes : ["arcana"]
			},
			
		],
		magics : {
			arcana : {
				researched : true,
				primary : {
					damage : 2,
					cost : 15,
				},
				secondary : {
					damage : 1.4,
					cost : 0.9,
				}
			},
			wind : {
				researched : false,
				primary : {
					damage : 1,
					cost : 30,
					effects : [
						["negative.slow", 5, 40]
					]
				},
				secondary : {
					damage : 1.1,
					cost : 1.4,
					effects : [
						["negative.slow", 5, 5]
					]
				}
			}
		},
		inventory : {},
	}
}

game.research = {
	"Mana Conduit" : {
		count: 0,
		Progress: 0,
		Time: 1,
		scopes : () => { return [ 
			game.research["Mana Conduit"],
			game.player.stats.mana
		]},
		effects : [
			[1, (r) => { r.scopes[1].increaseAmount += r.value } ],
			[1.2, (r) => { r.scopes[0].effects[0][0] *= r.value } ],
			[2.5, (r) => { r.scopes[0].Time *= r.value } ]
		]
	},
	"Mana Control" : {
		count: 0,
		max : 50,
		Progress: 0,
		Time: 10,
		scopes : () => { return [
			game.research["Mana Control"],
			game.player.stats.mana
		]},
		effects : [
			[3, (r) => { r.scopes[1].increaseRequired -= r.value } ],
			[1.65, (r) => { r.scopes[0].Time *= r.value } ]
		],
	},
	"Mana Mastering" : {
		count: 0,
		max : 100,
		Progress: 0,
		Time: 1,
		scopes : () => { return [
			game.research["Mana Mastering"],
			game.player.stats.mana
		]},
		effects : [
			[2, (r) => { r.scopes[1].increaseRequired -= r.value } ],
			[4, (r) => { r.scopes[0].Time *= r.value } ]
		],
		requirements : [
			() => { return game.research["Mana Mastering"].count >= 40 }
		],
	},
	"Mana Creation" : {
		count: 0,
		max : 100,
		Progress: 0,
		Time: 1,
		scopes : () => { return [
			game.research["Mana Creation"],
			game.player.stats.mana
		]},
		effects : [
			[1, (r) => { r.scopes[1].increaseRequired -= r.value } ],
			[12, (r) => { r.scopes[0].Time *= r.value } ]
		],
		requirements : [
			() => { return game.research["Mana Mastering"].count >= 75 }
		],
	},
	"Cyclic Breathing" : {
		count: 0,
		Progress: 0,
		Time: 1,
		scopes : () => { return [
			game.research["Cyclic Breathing"],
			game.player.stats.mana
		]},
		effects : [
			[1, (r) => { r.scopes[1].regenFlat += r.value } ],
			[1.15, (r) => { r.scopes[0].effects[0][0] *= r.value } ],
			[1.66, (r) => { r.scopes[0].Time *= r.value } ],
			[1.005, (r) => { r.scopes[0].effects[2][0] *= r.value } ]
		]
	},
	"Meditation" : {
		count: 0,
		max : 200,
		Progress: 0,
		Time: 1,
		scopes : () => { return [
			game.research["Meditation"],
			game.player.stats.mana
		]},
		effects : [
			[0.001, (r) => { r.scopes[1].regenMax += r.value } ],
			[2.5, (r) => { r.scopes[0].Time *= r.value } ]
		],
		requirements : [
			() => { return game.player.stats.mana.max >= 500}
		],
	},
	"Reflux" : {
		count: 0,
		Progress: 0,
		Time: 1,
		scopes : () => { return [
			game.research["Reflux"],
			game.player.stats.mana
		]},
		effects : [
			[0.005, (r) => { r.scopes[1].regenCurrent += r.value } ],
			[2.5, (r) => { r.scopes[0].Time *= r.value } ]
		],
		requirements : [
			() => { return game.player.stats.mana.max >= 10000 },
			() => { return game.research["Meditation"].count > 50 }
		],
		max : 10
	},
	"Arcana Specialization" : {
		count : 0,
		Progress: 0,
		Time: 30,
		scopes : () => { return [
			game.research["Arcana Specialization"],
			game.player.magics.arcana,
			game.player.stats.mana
		]},
		safetys : [
			(r) => { return r[1].primary.cost + r[0].effects[1][0] <= r[2].max } // new mana cost of arcane is less than max mana
		],
		effects : [
			[1, (r) => { r.scopes[1].primary.damage += r.value } ], // adds arcane primary damage
			[3, (r) => { r.scopes[1].primary.cost += r.value } ], // adds arcane primary mana cost
			[1.75, (r) => { r.scopes[0].effects[0][0] *= r.value } ], // increase research damage effect
			[1.5, (r) => { r.scopes[0].effects[1][0] *= r.value } ], // increase research mana effect
			[1.15, (r) => { r.scopes[0].effects[2][0] /= ( r.scopes[0].effects[2][0] >= 1.05 ?  r.value :  1 ) } ], // decrease research damage increase until 1.05
			[1.1, (r) => { r.scopes[0].effects[3][0] /= ( r.scopes[0].effects[3][0] >= 1.025 ? r.value : 1 ) } ], // increase research mana increase until 1.025
			[1.5, (r) => { r.scopes[0].Time *= r.value } ] // increase Time
		],
	},
	"Arcana Blending" : {
		count : 0,
		max : 10,
		Progress : 0,
		Time : 75,
		scopes : () => { return [
			game.research["Arcana Blending"],
			game.player.magics.arcana
		]},
		effects : [
			[0.16, (r) => { r.scopes[1].secondary.damage += r.value } ], // increases arcane secondary damage multiplier
			[0.01, (r) => { r.scopes[1].secondary.cost -= r.value } ], // decreases arcane secondary cost multiplier
			[3, (r) => { r.scopes[0].Time *= r.value } ]
		],
		requirements : [
			() => { return game.research["Arcana Specialization"].count >= 10 },
			() => { return game.research["Wind Research"].count >= 1 }
		]
	},
	"Wind Research" : {
		count : 0,
		max : 1,
		Progress: 0,
		Time: 180,
		scopes : () => { return [
			game.research["Wind Research"],
			game.player.magics.wind,
		]},
		effects : [
			[true, (r) => { r.scopes[1].researched = r.value; } ],
		],
		requirements : [
			() => { return game.research["Arcana Specialization"].count >= 5 }
		]
	},
	"Wind Specialization" : {
		count : 0,
		Progress: 0,
		Time: 90,
		scopes : () => { return [
			game.research["Wind Specialization"],
			game.player.magics.wind
		]},
		effects : [
			[4, (r) => { r.scopes[1].primary.damage += r.value } ],
			[6, (r) => { r.scopes[1].primary.cost += r.value } ],
			[1.1, (r) => { r.scopes[0].effects[0] *= r.value } ],
			[1.22, (r) => { r.scopes[0].effects[1] *= r.value } ],
			[1.66, (r) => { r.scopes[0].Time *= r.value } ],
		],
		requirements : [
			() => { return game.research["Wind Research"].count >= 1 }
		]
	},
	"Wind Effect" : {
		count : 0,
		max : 25,
		Progress: 0,
		Time: 33,
		scopes : () => { return [
			game.research["Wind Effect"],
			game.player.magics.wind
		]},
		effects : [
			[2, (r) => { r.scopes[1].primary.effects[0][1] += r.value } ],
			[5, (r) => { r.scopes[1].primary.effects[0][2] += r.value } ],
			[0.5, (r) => { r.scopes[1].secondary.effects[0][1] += r.value } ],
			[1, (r) => { r.scopes[1].secondary.effects[0][2] += r.value } ],
			[1.66, (r) => {r.scopes[0].Time *= r.value } ],
		],
		requirements : [
			() => { return game.research["Wind Research"].count >= 1 },
			() => { return game.research["Wind Specialization"].count >= 5 }
		],
	},
	"Wind Blending" : {
		count : 0,
		max : 10,
		Progress : 0,
		Time : 225,
		scopes : () => { return [
			game.research["Wind Blending"],
			game.player.magics.wind
		]},
		effects : [
			[0.005, (r) => { r.scopes[1].secondary.damage += r.value } ], // increases wind secondary damage multiplier
			[0.01, (r) => { r.scopes[1].secondary.cost -= r.value } ], // decreases wind secondary cost multiplier
			[1.4, (r) => { r.scopes[0].Time *= r.value } ]
		],
		requirements : [
			() => { return game.research["Wind Research"].count >= 1 },
			() => { return game.research["Wind Specialization"].count >= 10 },
		]
	},
	"Memorization" : {
		count : 0,
		max: 1,
		Progress: 0,
		Time: 600,
		scopes : () => { return [
			game.research["Memorization"],
			game.player.spells
		]},
		effects : [
			[true, (r) => { r.scopes[1][1].unlocked = r.value; }]
		],
		requirements : [
			() => { return game.research["Wind Research"].count >= 1 },
			() => { return game.research["Cyclic Breathing"].count >= 10},
			() => { return game.player.stats.mana.max >= 250}
		]
	}
}
game.construct = {
	"Librarian" : {
		count : 0,
		max : 100,
		Time : 1,
		Progress : 0,
		scopes : () => { return [
			game.player.stats.mana,
			game.player.stats.research
		]},
		constructionCosts : [
			(c) => { return [ c[0].max, 1000, c[0].max >= 1000 + game.player.safetyNet, (x) => { x.scopes[0].max -= x.value} ] }
		],
		effects : [
			[0.1, (u) => { u.scopes[0].progressMultiplier += u.value }]
		]
	},
	"Scholar" : {
		count : 0,
		Time : 10,
		Progress : 0,
		scopes : () => { return [
			game.player.stats.mana,
			game.player.stats.research
		]},
		constructionCosts : [
			(c) => { return [ c[0].max, 100, c[0].max >= 100 + game.player.safetyNet, (x) => { x.scopes[0].max -= x.value } ] }
		],
		effects : [
			[1, (u) => { u.scopes[1].progress += u.value } ]
		]
	}
}

function startConstruction (construction) {
	var c = game.construct[construction];
	if (c.count >= c.max)
		return false;
	
	for (var cost in c.constructionCosts)
		if (!c.constructionCosts[cost](c.scopes())[2])
			return false;
	
	for (var cost in c.constructionCosts) {
		var scopes = c.scopes();
		var cc = c.constructionCosts[cost]
		cc(scopes)[3]( {	scopes : scopes	 ,	value : cc(scopes)[1]	} );
	}
	return true;
}

function onConstruct (construction) {
	var c = game.construct[construction];
	if (c.count >= c.max)
		return false;
	
	c.count++;
	var u = {
		level : c.count,
		value : 0,
		scopes : c.scopes()
	}
	for (var effect in c.effects) {
		u.value = c.effects[effect][0];
		c.effects[effect][1](u);
	}
}
/*
function startResearch (research) {
	var r = game.research[research];
	if (r.count) >= r.max)
		return false;
	
	for (var cost in r.researchCosts)
		if (!r.researchCosts[cost](r.scopes())[2])
}
*/
function onResearch (research) {
	var r = game.research[research];
	if (r.count >= r.max)
		return false;
	
	for (var safe in r.safetys)
		if (!r.safetys[safe](r.scopes()))
			return false;
	
	r.count++;
	var u = {
		level : r.count,
		value : 0,
		scopes : r.scopes()
	}
	for (var effect in r.effects) {
		u.value = r.effects[effect][0];
		r.effects[effect][1](u);
	}
	return true;
}
/*
researches = {
	Mana Conduit : Increase amount of mana gained for future mana increases
	Mana Control : Decrease amount of mana required to increase mana
	Cyclic Breathing : Increase flat mana recovery
	Meditation : Increase max percentage mana recovery
	Reflux : Increase current percentage mana recovery
	
	Arcane : Innate Research
		Upgrades: Damage and Cost
}

constructs = {
	Mana Orb : Increases maximum stored mana
	Processing Construct : Decreases research speed
}*/