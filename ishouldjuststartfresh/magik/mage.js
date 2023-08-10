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

var loading = 1;

var game = {
	player : {
		currentAction : IDLE,
		currentResearch : "",
		safetyNet : 20,
		stats : {
			health : {
				current : 100,
				max : 100,
			},
			mana : {
				current : 100,
				max : 100,
				increaseAmount : 1,
				increaseRequired : 1000,
				increaseCounter : 0,
				passiveIncrease : 0,
				degenAmount : 0,
				regenFlat : 1,
				regenMax : 0,
				regenCurrent : 0,
				regenDelay : 20, // 5 tick : 500ms
				regenCounter : 0,
			},
			research : {
				progress : 1,
				progressMultiplier : 1,
				speed : 10,
				timer : 0,
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
				attributes : ["arcana"]
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
			},
			fire : {
				researched : true,
				primary : {
					damage : 5,
					cost : 10,
					secondaryAppliesToEffect : 0,
					effects : [ // dps, tick, dur
						["negative.dot", 5, 10, 40]
					]
				},
				secondary : {
					damage : 1.3,
					cost : 1.7,
					effects : [ // dps, tick, dur
						["negative.dot", 2, 10, 40]
					]
				}
			}
		},
		inventory : {},
	}
}


game.research = {
	"Mana Conduit" : {
		description : "Increase the amount of mana gained when an increase occurs.",
		count: 0,
		Progress: 0,
		Time: 1,
		scopes : () => { return [ 
			game.research["Mana Conduit"],
			game.player.stats.mana
		]},
		progressCost : [
			[7, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[1, (r) => { r.scopes[1].increaseAmount += r.value } ],
			[1.2, (r) => { r.scopes[0].effects[0][0] *= r.value } ],
			[1.475, (r) => { r.scopes[0].Time *= r.value } ],
			[1.1, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		]
	},
	"Mana Control" : {
		description : "Decreases the amount of mana needed for a mana increase by 3.",
		count: 0,
		max : 50,
		Progress: 0,
		Time: 10,
		scopes : () => { return [
			game.research["Mana Control"],
			game.player.stats.mana
		]},
		progressCost : [
			[10, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[3, (r) => { r.scopes[1].increaseRequired -= r.value } ],
			[1.65, (r) => { r.scopes[0].Time *= r.value } ],
			[1.05, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		],
	},
	"Mana Mastering" : {
		description : "Decreases the amount of mana needed for a mana increase by 2.",
		count: 0,
		max : 100,
		Progress: 0,
		Time: 300,
		scopes : () => { return [
			game.research["Mana Mastering"],
			game.player.stats.mana
		]},
		progressCost : [
			[35, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[2, (r) => { r.scopes[1].increaseRequired -= r.value } ],
			[1.725, (r) => { r.scopes[0].Time *= r.value } ],
			[1.33, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		],
		requirements : [
			() => { return game.research["Mana Control"].count >= 40 }
		],
	},
	"Mana Creation" : {
		description : "Decreases the amount of mana needed for a mana increase by 1.",
		count: 0,
		max : 100,
		Progress: 0,
		Time: 1200,
		scopes : () => { return [
			game.research["Mana Creation"],
			game.player.stats.mana
		]},
		progressCost : [
			[160, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[1, (r) => { r.scopes[1].increaseRequired -= r.value } ],
			[1.25, (r) => { r.scopes[0].Time *= r.value } ],
			[1.425, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		],
		requirements : [
			() => { return game.research["Mana Mastering"].count >= 75 }
		],
	},
	"Cyclic Breathing" : {
		description : "Increases flat mana regeneration rate.",
		count: 0,
		Progress: 0,
		Time: 5,
		scopes : () => { return [
			game.research["Cyclic Breathing"],
			game.player.stats.mana
		]},
		progressCost : [
			[0, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[1, (r) => { r.scopes[1].regenFlat += r.value } ],
			[1.15, (r) => { r.scopes[0].effects[0][0] *= r.value } ],
			[1.2, (r) => { r.scopes[0].Time *= r.value } ],
			[1.0075, (r) => { r.scopes[0].effects[2][0] *= r.value } ],
			[1.5, (r) => { r.scopes[0].progressCost[0][0] += r.value } ],
			[1.075, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		]
	},
	"Meditation" : {
		description : "Gain mana regeneration based on maximum mana.",
		count: 0,
		max : 200,
		Progress: 0,
		Time: 120,
		scopes : () => { return [
			game.research["Meditation"],
			game.player.stats.mana
		]},
		progressCost : [
			[125, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[0.001, (r) => { r.scopes[1].regenMax += r.value } ],
			[1.2, (r) => { r.scopes[0].Time *= r.value } ],
			[1.2, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		],
		requirements : [
			() => { return game.player.stats.mana.max >= 500}
		],
	},
	"Reflux" : {
		description : "Gain mana regeneration based on current mana.",
		count: 0,
		Progress: 0,
		Time: 600,
		scopes : () => { return [
			game.research["Reflux"],
			game.player.stats.mana
		]},
		progressCost : [
			[400, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[0.005, (r) => { r.scopes[1].regenCurrent += r.value } ],
			[1.85, (r) => { r.scopes[0].Time *= r.value } ],
			[1.66, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		],
		requirements : [
			() => { return game.player.stats.mana.max >= 10000 },
			() => { return game.research["Meditation"].count > 50 }
		],
		max : 10
	},
	"Arcana Specialization" : {
		description : "Increase the damage Arcana does when it is the primary element.",
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
		progressCost : [
			[5, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[1, (r) => { r.scopes[1].primary.damage += r.value } ], // adds arcane primary damage
			[3, (r) => { r.scopes[1].primary.cost += r.value } ], // adds arcane primary mana cost
			[1.75, (r) => { r.scopes[0].effects[0][0] *= r.value } ], // increase research damage effect
			[1.5, (r) => { r.scopes[0].effects[1][0] *= r.value } ], // increase research mana effect
			[1.15, (r) => { r.scopes[0].effects[2][0] /= ( r.scopes[0].effects[2][0] >= 1.05 ?  r.value :  1 ) } ], // decrease research damage increase until 1.05
			[1.1, (r) => { r.scopes[0].effects[3][0] /= ( r.scopes[0].effects[3][0] >= 1.025 ? r.value : 1 ) } ], // increase research mana increase until 1.025
			[1.5, (r) => { r.scopes[0].Time *= r.value } ], // increase Time
			[3, (r) => { r.scopes[0].progressCost[0][0] += r.value } ], // increase progressCost
			[1.185, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ], // multiply progressCost
		],
	},
	"Arcana Blending" : {
		description : "Increase the damage multiplier for Aracna when it is a secondary element.",
		count : 0,
		max : 10,
		Progress : 0,
		Time : 75,
		scopes : () => { return [
			game.research["Arcana Blending"],
			game.player.magics.arcana
		]},
		progressCost : [
			[100, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[0.16, (r) => { r.scopes[1].secondary.damage += r.value } ], // increases arcane secondary damage multiplier
			[0.01, (r) => { r.scopes[1].secondary.cost -= r.value } ], // decreases arcane secondary cost multiplier
			[1.8, (r) => { r.scopes[0].Time *= r.value } ],
			[1.33, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		],
		requirements : [
			() => { return game.research["Arcana Specialization"].count >= 10 },
			() => { return game.research["Wind Research"].count >= 1 }
		]
	},
	"Wind Research" : {
		description : "The Wind is able to push with much force, maybe controlling it will allow you to slow enemies down.",
		count : 0,
		max : 1,
		Progress: 0,
		Time: 180,
		scopes : () => { return [
			game.research["Wind Research"],
			game.player.magics.wind,
		]},
		progressCost : [
			[20, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[true, (r) => { r.scopes[1].researched = r.value; } ],
		],
		requirements : [
			() => { return game.research["Arcana Specialization"].count >= 5 }
		]
	},
	"Wind Specialization" : {
		description : "Increases the amount of damage Wind does when it is the primary element.",
		count : 0,
		Progress: 0,
		Time: 90,
		scopes : () => { return [
			game.research["Wind Specialization"],
			game.player.magics.wind
		]},
		progressCost : [
			[65, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[4, (r) => { r.scopes[1].primary.damage += r.value } ],
			[6, (r) => { r.scopes[1].primary.cost += r.value } ],
			[1.1, (r) => { r.scopes[0].effects[0][0] *= r.value } ],
			[1.22, (r) => { r.scopes[0].effects[1][0] *= r.value } ],
			[1.66, (r) => { r.scopes[0].Time *= r.value } ],
			[1.15, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		],
		requirements : [
			() => { return game.research["Wind Research"].count >= 1 }
		]
	},
	"Wind Effect" : {
		description : "Increases the effectiveness of the slowing capabilities of Wind as both a primary and seconday element.",
		count : 0,
		max : 25,
		Progress: 0,
		Time: 33,
		scopes : () => { return [
			game.research["Wind Effect"],
			game.player.magics.wind
		]},
		progressCost : [
			[25, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[2, (r) => { r.scopes[1].primary.effects[0][1] += r.value } ],
			[5, (r) => { r.scopes[1].primary.effects[0][2] += r.value } ],
			[0.5, (r) => { r.scopes[1].secondary.effects[0][1] += r.value } ],
			[1, (r) => { r.scopes[1].secondary.effects[0][2] += r.value } ],
			[1.66, (r) => {r.scopes[0].Time *= r.value } ],
			[1.75, (r) => {r.scopes[0].progressCost[0][0] *= r.value } ],
		],
		requirements : [
			() => { return game.research["Wind Research"].count >= 1 },
			() => { return game.research["Wind Specialization"].count >= 5 }
		],
	},
	"Wind Blending" : {
		description : "Increases the damage of Wind as a secondary element.",
		count : 0,
		max : 10,
		Progress : 0,
		Time : 225,
		scopes : () => { return [
			game.research["Wind Blending"],
			game.player.magics.wind
		]},
		progressCost : [
			[75, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[0.005, (r) => { r.scopes[1].secondary.damage += r.value } ], // increases wind secondary damage multiplier
			[0.01, (r) => { r.scopes[1].secondary.cost -= r.value } ], // decreases wind secondary cost multiplier
			[1.4, (r) => { r.scopes[0].Time *= r.value } ],
			[1.66, (r) => { r.scopes[0].progressCost[0][0] *= r.value } ],
		],
		requirements : [
			() => { return game.research["Wind Research"].count >= 1 },
			() => { return game.research["Wind Specialization"].count >= 10 },
		]
	},
	"Fire Research" : {
		description : "Fire can be everlasting, controlling it may allow you to set enemies ablaze.",
		count : 0,
		max : 1,
		Progress : 0,
		Time : 300,
		scopes : () => { return [
			game.research["Fire Research"],
			game.player.magics.fire,
		]},
		progressCost : [
			[35, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
		effects : [
			[true, (r) => { r.scopes[1].researched = r.value } ]
		],
		requirements : [
			() => { return game.research["Arcana Specialization"].count >= 5}
		]
	},
	"Memorization" : {
		description : "Unlocks spell slot 2.",
		count : 0,
		max: 1,
		Progress: 0,
		Time: 600,
		scopes : () => { return [
			game.research["Memorization"],
			game.player.spells
		]},
		progressCost : [
			[55, (c) => { return game.player.stats.mana.current >= c.value }, (c) => { game.player.stats.mana.current -= c.value } ],
		],
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
	"Arcane Librarian" : {
		description : "A being made of pure mana, excellent at cataloging and organization. Greatly increases research speed over time.",
		count : 0,
		max : 100,
		Time : 40,
		Progress : 0,
		scopes : () => { return [
			game.player.stats.mana,
			game.player.stats.research
		]},
		constructionCosts : [
			(c) => { return [ c[0].max, 1000, c[0].max >= 1000 + game.player.safetyNet, (x) => { x.scopes[0].max -= x.value} ] }
		],
		effects : [
			[0.1, (u) => { u.scopes[1].progressMultiplier += u.value }]
		]
	},
	"Arcane Scholar" : {
		description : "A being made of pure mana, used as an assistant for researching things. Increases research speed.",
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
	},
	"Arcane Constructor" : {
		description : "An being made of pure mana, used to shuttle materials around. Increases construction speed.",
		count : 0,
		Time : 25,
		Progress : 0,
		scopes : () => { return [
			game.player.stats.mana,
			game.construct["Arcane Librarian"],
			game.construct["Arcane Scholar"],
			game.construct["Arcane Constructor"],
			game.construct["Arcane Generator"]
		]},
		constructionCosts : [
			(c) => { return [ c[0].max, 250, c[0].max >= 250 + game.player.safetyNet, (x) => { x.scopes[0].max -= x.value } ] }
		],
		effects : [
			[0.95, (u) => { u.scopes[1].Time *= u.value }],
			[0.90, (u) => { u.scopes[2].Time *= u.value }],
			[0.90, (u) => { u.scopes[3].Time *= u.value }],
			[0.90, (u) => { u.scopes[4].Time *= u.value }],
		]
	},
	"Arcane Generator" : {
		description : "A being made of pure mana, drains mana in order to increase it. Drains mana overtime to increase maximum mana.",
		count : 0,
		Time : 120,
		Progress : 0,
		scopes : () => { return [
			game.construct["Arcane Generator"],
			game.player.stats.mana
		]},
		safetys : [
			(c) => { return (c[1].degenAmount + c[0].effects[1][0]) < c[1].regenFlat }
		],
		constructionCosts : [
			(c) => { return [ c[1].max, 25, c[1].max >= 25 + game.player.safetyNet, (x) => { x.scopes[1].max -= x.value } ] }
		],
		effects : [
			[1, (u) => { u.scopes[1].passiveIncrease += u.value }],
			[4, (u) => { u.scopes[1].degenAmount += u.value }],
		]
	}
}

function startConstruction (construction) {
	var c = game.construct[construction];
	if (c.count >= c.max)
		return false;
	
	for (var safe in c.safetys)
		if (!c.safetys[safe](c.scopes()))
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
function progressResearch (research) {
	var r = game.research[research];
	if (!r.progressCost)
		return true;
	
	for (let cost of r.progressCost)
		if (!cost[1]({value:cost[0]}))
			return false;
		
	for (let cost of r.progressCost)
		cost[2]({value:cost[0]})
	return true;
}

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


if (localStorage.getItem("mage_game")) {
	game = JSONfn.parse(localStorage.getItem("mage_game"));
}


loading = 0;