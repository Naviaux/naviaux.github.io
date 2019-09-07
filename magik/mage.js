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

var game = {}
game.player = {};
game.player.currentAction = IDLE;
game.player.currentResearch = "";
game.player.safetyNet = 20;
game.player.stats = {}
game.player.stats.hp = {};
game.player.stats.hp.current = 100;
game.player.stats.hp.max = 100;
game.player.stats.mana = {};
game.player.stats.mana.current = 100;
game.player.stats.mana.max = 100;
game.player.stats.mana.increaseAmount = 1;
game.player.stats.mana.increaseRequired = 1000;
game.player.stats.mana.increaseCounter = 0;
game.player.stats.mana.regenFlat = 1;
game.player.stats.mana.regenMax = 0;
game.player.stats.mana.regenCurrent = 0;
game.player.stats.mana.regenDelay = 5; // 1 tick = 500ms
game.player.stats.mana.regenCounter = 0;
game.player.stats.research = {};
game.player.stats.research.progress = 1;
game.player.stats.research.progressMultiplier = 1;
game.player.stats.research.speed = 1; // unused
game.player.stats.research.delay = 0; // unused
game.player.stats.construction = {};
game.player.stats.construction.progress = 1;
game.player.stats.construction.progressMultiplier = 1;
game.player.stats.construction.speed = 20;
game.player.stats.construction.delay = 0;
game.player.spells = [
	{
		attributes : ["arcana"]
	}
];
game.player.magics = {};
game.player.magics.arcana = {};
game.player.magics.arcana.primaryDamage = 5;
game.player.magics.arcana.primaryCost = 20;
game.player.magics.arcana.secondaryDamage = 1.4;
game.player.magics.arcana.secondaryCost = 0.9;

game.research = {
	"Mana Conduit" : {
		count: 0,
		researchProgress: 0,
		researchTime: 1,
		scopes : () => { return [ 
			game.research["Mana Conduit"],
			game.player.stats.mana
		]},
		effects : [
			[1, (u) => { u.scopes[1].increaseAmount += u.value } ],
			[1.2, (u) => { u.scopes[0].effects[0][0] *= u.value } ],
			[2.5, (u) => { u.scopes[0].researchTime *= u.value } ]
		]
	},
	"Mana Control" : {
		count: 0,
		max : 500,
		researchProgress: 0,
		researchTime: 1,
		scopes : () => { return [
			game.research["Mana Control"],
			game.player.stats.mana
		]},
		effects : [
			[1, (u) => { u.scopes[1].increaseRequired -= u.value } ],
			[2.5, (u) => { u.scopes[0].researchTime *= u.value } ]
		],
	},
	"Cyclic Breathing" : {
		count: 0,
		researchProgress: 0,
		researchTime: 1,
		scopes : () => { return [
			game.research["Cyclic Breathing"],
			game.player.stats.mana
		]},
		effects : [
			[1, (u) => { u.scopes[1].regenFlat += u.value } ],
			[1.15, (u) => { u.scopes[0].effects[0][0] *= u.value } ],
			[1.66, (u) => { u.scopes[0].researchTime *= u.value } ],
			[1.005, (u) => { u.scopes[0].effects[2][0] *= u.value } ]
		]
	},
	"Meditation" : {
		count: 0,
		max : 200,
		researchProgress: 0,
		researchTime: 1,
		scopes : () => { return [
			game.research["Meditation"],
			game.player.stats.mana
		]},
		effects : [
			[0.001, (u) => { u.scopes[1].regenMax += u.value } ],
			[2.5, (u) => { u.scopes[0].researchTime *= u.value } ]
		],
		requirements : [
			() => { return game.player.stats.mana.max >= 500}
		],
	},
	"Reflux" : {
		count: 0,
		researchProgress: 0,
		researchTime: 1,
		scopes : () => { return [
			game.research["Reflux"],
			game.player.stats.mana
		]},
		effects : [
			[0.05, (u) => { u.scopes[1].regenCurrent += u.value } ],
			[2.5, (u) => { u.scopes[0].researchTime *= u.value } ]
		],
		requirements : [
			() => { return game.player.stats.mana.max >= 10000 },
			() => { return game.research["Meditation"].count > 50 }
		],
		max : 10
	},
	"Arcana Specialization" : {
		count : 0,
		researchProgress: 0,
		researchTime: 1,
		scopes : () => { return [
			game.research["Arcana Specialization"],
			game.player.magics.arcana
		]},
		effects : [
			[5, (u) => { u.scopes[1].primaryDamage += u.value } ],
			[5, (u) => { u.scopes[1].primaryCost += u.value } ],
			[1.05, (u) => { u.scopes[0].effects[0][0] *= u.value } ],
			[1.025, (u) => { u.scopes[0].effects[1][0] *= u.value } ],
			[2.5, (u) => { u.scopes[0].researchTime *= u.value } ]
		],
	}
}
game.construct = {
	"Librarian" : {
		count : 0,
		max : 100,
		constructionTime : 1,
		constructionProgress : 0,
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
		constructionTime : 10,
		constructionProgress : 0,
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

function onUpgrade (upgrade) {
	var r = game.research[upgrade];
	if (r.count >= r.max)
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