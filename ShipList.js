var ShipHulls = Object.freeze({
	"BB" : 0,
	"BC" : 1,
	"BM" : 2,
	"BBV" : 3,
	"CV" : 4,
	"CVL" : 5,
	"AR" : 6,
	"CA" : 7,
	"CL" : 8,
	"DD" : 9,
	"SS" : 10
});
var Rarity = Object.freeze({
	"N" : 0,
	"R" : 1,
	"E" : 2,
	"SR" : 3,
	"UR" : 4,
	"P" : 5,
	"UN" : 6
});
var ShipFleet = Object.freeze({
	"MAIN" : 0,
	"VANGUARD" : 1,
	"SUBMARINE" : 2
});
//var ShipFaction = Object.freeze({});

var ships = [
	{
		id		:	"001",
		name	:	"Universal Bullin",
		faction	:	"Universal",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"002",
		name	:	"Trial Bullin MKII",
		faction	:	"Universal",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	}, //3,4
	{
		id		:	"005",
		name	:	"Cassin",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"006",
		name	:	"Downes",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"007",
		name	:	"Gridley",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"008",
		name	:	"Craven",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"009",
		name	:	"McCall",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"010",
		name	:	"Maury",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"011",
		name	:	"Fletcher",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	}, //12
	{
		id		:	"013",
		name	:	"Charles Ausburne",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"014",
		name	:	"Thatcher",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"015",
		name	:	"Aulick",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"016",
		name	:	"Foote",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"017",
		name	:	"Spence",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"018",
		name	:	"Benson",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"019",
		name	:	"Laffey",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	true
	}, //20,21,22,23,24,25
	{
		id		:	"026",
		name	:	"Sims",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"027",
		name	:	"Hammann",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"028",
		name	:	"Eldridge",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"029",
		name	:	"Omaha",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"030",
		name	:	"Raleigh",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"031",
		name	:	"Brooklyn",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"032",
		name	:	"Phoenix",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"033",
		name	:	"Helena",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"034",
		name	:	"Atlanta",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"035",
		name	:	"Juneau",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"036",
		name	:	"San Diego",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	true
	},
	{
		id		:	"037",
		name	:	"Cleveland",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"038",
		name	:	"Columbia",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"039",
		name	:	"Pensacola",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"040",
		name	:	"Salt Lake City",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"041",
		name	:	"Northampton",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"042",
		name	:	"Chicago",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"043",
		name	:	"Houston",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"044",
		name	:	"Portland",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"045",
		name	:	"Indianapolis",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"046",
		name	:	"Astoria",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"047",
		name	:	"Quincy",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"048",
		name	:	"Vincennes",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"049",
		name	:	"Wichita",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"052",
		name	:	"Nevada",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"053",
		name	:	"Oklahoma",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"054",
		name	:	"Pennsylvania",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"055",
		name	:	"Arizona",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"058",
		name	:	"Tennessee",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"059",
		name	:	"California",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"060",
		name	:	"Colorado",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"061",
		name	:	"Maryland",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"062",
		name	:	"West Virginia",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"063",
		name	:	"North Carolina",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"064",
		name	:	"Washington",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"065",
		name	:	"South Dakota",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"070",
		name	:	"Long Island",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"071",
		name	:	"Bogue",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"072",
		name	:	"Langley",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"073",
		name	:	"Lexington",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"074",
		name	:	"Saratoga",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"075",
		name	:	"Ranger",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"076",
		name	:	"Yorktown",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"077",
		name	:	"Enterprise",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"078",
		name	:	"Hornet",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"079",
		name	:	"Wasp",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"080",
		name	:	"Vestal",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.AR,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"081",
		name	:	"Amazon",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"082",
		name	:	"Acasta",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"083",
		name	:	"Ardent",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"086",
		name	:	"Beagle",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"087",
		name	:	"Bulldog",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"088",
		name	:	"Comet",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"089",
		name	:	"Crescent",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"090",
		name	:	"Cygnet",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"091",
		name	:	"Foxhound",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"092",
		name	:	"Fortune",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"093",
		name	:	"Grenville",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"094",
		name	:	"Glowworm",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"101",
		name	:	"Javelin",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"102",
		name	:	"Juno",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"103",
		name	:	"Vampire",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"104",
		name	:	"Leander",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"105",
		name	:	"Achilles",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"106",
		name	:	"Ajax",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"111",
		name	:	"Sheffield",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"114",
		name	:	"Edinburgh",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"115",
		name	:	"Belfast",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"116",
		name	:	"Arethusa",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"117",
		name	:	"Galatea",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"118",
		name	:	"Aurora",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"119",
		name	:	"London",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"120",
		name	:	"Shropshire",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"121",
		name	:	"Kent",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"122",
		name	:	"Suffolk",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"123",
		name	:	"Norfolk",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"124",
		name	:	"Dorsetshire",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"125",
		name	:	"York",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"126",
		name	:	"Exeter",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"127",
		name	:	"Renown",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"128",
		name	:	"Repulse",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"129",
		name	:	"Hood",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"130",
		name	:	"Queen Elizabeth",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"131",
		name	:	"Warspite",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	true
	},
	{
		id		:	"132",
		name	:	"Nelson",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"133",
		name	:	"Rodney",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"135",
		name	:	"Prince of Wales",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"136",
		name	:	"Duke of York",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"140",
		name	:	"Hermes",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"142",
		name	:	"Unicorn",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"144",
		name	:	"Ark Royal",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"145",
		name	:	"Illustrious",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"146",
		name	:	"Victorious",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"148",
		name	:	"Glorious",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"149",
		name	:	"Erebus",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BM,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"150",
		name	:	"Terror",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BM,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"151",
		name	:	"Fubuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"155",
		name	:	"Ayanami",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"159",
		name	:	"Akatsuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"161",
		name	:	"Ikazuchi",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"162",
		name	:	"Inazuma",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"163",
		name	:	"Shiratsuyu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"164",
		name	:	"Yuudachi",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"165",
		name	:	"Shigure",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"166",
		name	:	"Yukikaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"167",
		name	:	"Kagerou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"168",
		name	:	"Shiranui",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"170",
		name	:	"Nowaki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"171",
		name	:	"Hatsuharu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"173",
		name	:	"Wakaba",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"174",
		name	:	"Hatsushimo",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"175",
		name	:	"Ariake",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"176",
		name	:	"Yuugure",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"177",
		name	:	"Kuroshio",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"178",
		name	:	"Oyashio",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"179",
		name	:	"Yuubari",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"182",
		name	:	"Nagara",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"183",
		name	:	"Isuzu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"187",
		name	:	"Abukuma",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"188",
		name	:	"Mogami",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"189",
		name	:	"Mikuma",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"190",
		name	:	"Furutaka",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"191",
		name	:	"Kako",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"192",
		name	:	"Aoba",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"193",
		name	:	"Kinugasa",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"196",
		name	:	"Myoukou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"197",
		name	:	"Nachi",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"198",
		name	:	"Ashigara",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"200",
		name	:	"Takao",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"201",
		name	:	"Atago",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"202",
		name	:	"Maya",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"203",
		name	:	"Choukai",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"204",
		name	:	"Kongou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"205",
		name	:	"Hiei",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"206",
		name	:	"Haruna",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"207",
		name	:	"Kirishima",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"208",
		name	:	"Fusou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"209",
		name	:	"Yamashiro",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"210",
		name	:	"Ise",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"211",
		name	:	"Hyuuga",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"212",
		name	:	"Nagato",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"213",
		name	:	"Mutsu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"218",
		name	:	"Hiyou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"219",
		name	:	"Junyou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"220",
		name	:	"Houshou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"222",
		name	:	"Shouhou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"223",
		name	:	"Ryuujou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"224",
		name	:	"Akagi",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"225",
		name	:	"Kaga",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"226",
		name	:	"Souryuu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"227",
		name	:	"Hiryuu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"228",
		name	:	"Shoukaku",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"229",
		name	:	"Zuikaku",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"230",
		name	:	"Taihou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"232",
		name	:	"Akashi",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.AR,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"233",
		name	:	"Z1",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"236",
		name	:	"Z23",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"237",
		name	:	"Z25",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"238",
		name	:	"Konigsberg",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"239",
		name	:	"Karlsruhe",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"240",
		name	:	"Koln",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"241",
		name	:	"Leipzig",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"242",
		name	:	"Admiral Hipper",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"244",
		name	:	"Prinz Eugen",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"245",
		name	:	"Deutschland",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"246",
		name	:	"Admiral Graf Spee",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"248",
		name	:	"Scharnhorst",
		faction	:	"Ironblood",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"249",
		name	:	"Gneisenau",
		faction	:	"Ironblood",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"250",
		name	:	"Bismarck",
		faction	:	"Ironblood",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.UN,
		hasRetro:	false
	},
	{
		id		:	"251",
		name	:	"Tirpitz",
		faction	:	"Ironblood",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"252",
		name	:	"Graf Zeppelin",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"253",
		name	:	"An Shan",
		faction	:	"Eastern Radiance",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"254",
		name	:	"Fu Shun",
		faction	:	"Eastern Radiance",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"255",
		name	:	"Chang Chun",
		faction	:	"Eastern Radiance",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"256",
		name	:	"Tai Yuan",
		faction	:	"Eastern Radiance",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"257",
		name	:	"Yat Sen",
		faction	:	"Eastern Radiance",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"258",
		name	:	"Ning Hai",
		faction	:	"Eastern Radiance",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"259",
		name	:	"Ping Hai",
		faction	:	"Eastern Radiance",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"262",
		name	:	"Avrora",
		faction	:	"North Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"263",
		name	:	"Bailey",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"264",
		name	:	"Z19",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"265",
		name	:	"Z20",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"266",
		name	:	"Z21",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"267",
		name	:	"Z46",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"269",
		name	:	"Kamikaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"270",
		name	:	"Matsukaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"271",
		name	:	"Mutsuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	true
	},
	{
		id		:	"272",
		name	:	"Kisaragi",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"274",
		name	:	"Uzuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"276",
		name	:	"Minazuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"277",
		name	:	"Fumizuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"278",
		name	:	"Nagatsuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"280",
		name	:	"Mikazuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"288",
		name	:	"Kawakaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"295",
		name	:	"Niizuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"296",
		name	:	"Harutsuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"297",
		name	:	"Yoizuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"299",
		name	:	"Radford",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"300",
		name	:	"Jenkins",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"301",
		name	:	"Nicholas",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"303",
		name	:	"Richmond",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.N,
		hasRetro:	false
	},
	{
		id		:	"304",
		name	:	"Honolulu",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"305",
		name	:	"St. Louis",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"306",
		name	:	"Jupiter",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"307",
		name	:	"Jersey",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"308",
		name	:	"Sendai",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"309",
		name	:	"Jintsuu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	true
	},
	{
		id		:	"310",
		name	:	"Naka",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"316",
		name	:	"Urakaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"317",
		name	:	"Isokaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"318",
		name	:	"Hamakaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"319",
		name	:	"Tanikaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"320",
		name	:	"Mikasa",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"321",
		name	:	"Agano",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"325",
		name	:	"Matchless",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"326",
		name	:	"Musketeer",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"327",
		name	:	"Fiji",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"328",
		name	:	"Jamaica",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"329",
		name	:	"Montpelier",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"330",
		name	:	"Denver",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"331",
		name	:	"Asashio",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"332",
		name	:	"Ooshio",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"333",
		name	:	"Michishio",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"334",
		name	:	"Arashio",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"335",
		name	:	"Belchan",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"336",
		name	:	"Abercrombie",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BM,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"337",
		name	:	"Sussex",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"338",
		name	:	"I-19",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.SS,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"339",
		name	:	"I-26",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.SS,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"340",
		name	:	"I-58",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.SS,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"341",
		name	:	"U-81",
		faction	:	"Ironblood",
		hull	:	ShipHulls.SS,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"342",
		name	:	"Dace",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.SS,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"343",
		name	:	"U-47",
		faction	:	"Ironblood",
		hull	:	ShipHulls.SS,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"344",
		name	:	"U-557",
		faction	:	"Ironblood",
		hull	:	ShipHulls.SS,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"345",
		name	:	"Z35",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"346",
		name	:	"Z18",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"347",
		name	:	"Le Triomphant",
		faction	:	"Iris Libre",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"348",
		name	:	"Forbin",
		faction	:	"Iris Libre",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"349",
		name	:	"Emile Bertin",
		faction	:	"Iris Libre",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"350",
		name	:	"Surcouf",
		faction	:	"Iris Libre",
		hull	:	ShipHulls.SS,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"351",
		name	:	"Le Mars",
		faction	:	"Vichya Dominion",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"352",
		name	:	"Dunkerque",
		faction	:	"Vichya Dominion",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"353",
		name	:	"Jean Bart",
		faction	:	"Vichya Dominion",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"354",
		name	:	"Massachusetts",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"355",
		name	:	"Bush",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"356",
		name	:	"Centaur",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"357",
		name	:	"Essex",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"358",
		name	:	"Albacore",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.SS,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"359",
		name	:	"Le Temeraire",
		faction	:	"Iris Libre",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"360",
		name	:	"Memphis",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"361",
		name	:	"Newcastle",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	true
	},
	{
		id		:	"362",
		name	:	"Hobby",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"363",
		name	:	"Kalk",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"364",
		name	:	"Minneapolis",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"365",
		name	:	"Hazelwood",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"366",
		name	:	"Concord",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"367",
		name	:	"Amagi",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BC,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"368",
		name	:	"Kaga (Battleship)",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"369",
		name	:	"Hatakaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"370",
		name	:	"Makinami",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"371",
		name	:	"Sirius",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"372",
		name	:	"Curacoa",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"373",
		name	:	"Curlew",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"374",
		name	:	"Kimberly",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"375",
		name	:	"Mullany",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"376",
		name	:	"Chaser",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"9001",
		name	:	"Tone",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.UN,
		hasRetro:	false
	},
	{
		id		:	"9002",
		name	:	"Chikuma",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.UN,
		hasRetro:	false
	},
	{
		id		:	"9003",
		name	:	"Jeanne d'Arc",
		faction	:	"Iris Libre",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.UN,
		hasRetro:	false
	},
	{
		id		:	"9004",
		name	:	"Richelieu",
		faction	:	"Iris Libre",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.UN,
		hasRetro:	false
	},
	{
		id		:	"Plan001",
		name	:	"HMS Neptune",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.P,
		hasRetro:	false
	},
	{
		id		:	"Plan002",
		name	:	"Monarch",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.P,
		hasRetro:	false
	},
	{
		id		:	"Plan003",
		name	:	"Ibuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.P,
		hasRetro:	false
	},
	{
		id		:	"Plan004",
		name	:	"Izumo",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.P,
		hasRetro:	false
	},
	{
		id		:	"Plan005",
		name	:	"Roon",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.P,
		hasRetro:	false
	},
	{
		id		:	"Plan006",
		name	:	"Saint Louis",
		faction	:	"Iris Libre",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.P,
		hasRetro:	false
	},
	{
		id		:	"Collab001",
		name	:	"HDN Neptune",
		faction	:	"Neptunia",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"Collab002",
		name	:	"Noire",
		faction	:	"Neptunia",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"Collab003",
		name	:	"Blanc",
		faction	:	"Neptunia",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"Collab004",
		name	:	"Vert",
		faction	:	"Neptunia",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"Collab005",
		name	:	"Purple Heart",
		faction	:	"Neptunia",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"Collab006",
		name	:	"Black Heart",
		faction	:	"Neptunia",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"Collab007",
		name	:	"White Heart",
		faction	:	"Neptunia",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"Collab008",
		name	:	"Green Heart",
		faction	:	"Neptunia",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"Collab021",
		name	:	"22",
		faction	:	"Bilibili",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"Collab022",
		name	:	"33",
		faction	:	"Bilibili",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"Collab031",
		name	:	"Kuon",
		faction	:	"Utawarerumono",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"Collab032",
		name	:	"Nekone",
		faction	:	"Utawarerumono",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"Collab033",
		name	:	"Rurutie",
		faction	:	"Utawarerumono",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"Collab034",
		name	:	"Uruuru",
		faction	:	"Utawarerumono",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"Collab035",
		name	:	"Saraana",
		faction	:	"Utawarerumono",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"Collab036",
		name	:	"Fumiruiru",
		faction	:	"Utawarerumono",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3005",
		name	:	"Cassin",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3006",
		name	:	"Downes",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3019",
		name	:	"Laffey",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3026",
		name	:	"Sims",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3027",
		name	:	"Hammann",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3036",
		name	:	"San Diego",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.UR,
		hasRetro:	false
	},
	{
		id		:	"3044",
		name	:	"Portland",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3052",
		name	:	"Nevada",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3053",
		name	:	"Oklahoma",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3070",
		name	:	"Long Island",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3071",
		name	:	"Bogue",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3072",
		name	:	"Langley",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3074",
		name	:	"Saratoga",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3075",
		name	:	"Ranger",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3082",
		name	:	"Acasta",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3083",
		name	:	"Ardent",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3088",
		name	:	"Comet",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3089",
		name	:	"Crescent",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3090",
		name	:	"Cygnet",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3091",
		name	:	"Foxhound",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3092",
		name	:	"Fortune",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3101",
		name	:	"Javelin",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3104",
		name	:	"Leander",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3105",
		name	:	"Achilles",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3106",
		name	:	"Ajax",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3122",
		name	:	"Suffolk",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3125",
		name	:	"York",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3126",
		name	:	"Exeter",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3131",
		name	:	"Warspite",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.BB,
		rarity	:	Rarity.UR,
		hasRetro:	false
	},
	{
		id		:	"3155",
		name	:	"Ayanami",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3167",
		name	:	"Kagerou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3168",
		name	:	"Shiranui",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3187",
		name	:	"Abukuma",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3188",
		name	:	"Mogami",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3190",
		name	:	"Furutaka",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3191",
		name	:	"Kako",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CA,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3208",
		name	:	"Fusou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BBV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3209",
		name	:	"Yamashiro",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BBV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3210",
		name	:	"Ise",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BBV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3211",
		name	:	"Hyuuga",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.BBV,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3222",
		name	:	"Shouhou",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CVL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3226",
		name	:	"Souryuu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3227",
		name	:	"Hiryuu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CV,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3236",
		name	:	"Z23",
		faction	:	"Ironblood",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3239",
		name	:	"Karlsruhe",
		faction	:	"Ironblood",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3258",
		name	:	"Ning Hai",
		faction	:	"Eastern Radiance",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3259",
		name	:	"Ping Hai",
		faction	:	"Eastern Radiance",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3263",
		name	:	"Bailey",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3269",
		name	:	"Kamikaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3270",
		name	:	"Matsukaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3271",
		name	:	"Mutsuki",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.R,
		hasRetro:	false
	},
	{
		id		:	"3301",
		name	:	"Nicholas",
		faction	:	"Eagle Union",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3308",
		name	:	"Sendai",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3309",
		name	:	"Jintsuu",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.SR,
		hasRetro:	false
	},
	{
		id		:	"3318",
		name	:	"Hamakaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3319",
		name	:	"Tanikaze",
		faction	:	"Sakura Empire",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3348",
		name	:	"Forbin",
		faction	:	"Iris Libre",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3351",
		name	:	"Le Mars",
		faction	:	"Vichya Dominion",
		hull	:	ShipHulls.DD,
		rarity	:	Rarity.E,
		hasRetro:	false
	},
	{
		id		:	"3361",
		name	:	"Newcastle",
		faction	:	"Royal Navy",
		hull	:	ShipHulls.CL,
		rarity	:	Rarity.E,
		hasRetro:	false
	}	
];