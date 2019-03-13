//https://azurlane.koumakan.jp/w/index.php?title=Special:ViewData&tables=ships&fields=ShipGroup%3DShipGroup%2CShipID%3DShipID%2CName%3DName%2CCNName%3DCNName%2CJPName%3DJPName%2CRarity%3DRarity%2CNationality%3DNationality%2CType%3DType%2CSubtypeRetro%3DSubtypeRetro%2CRemodelId%3DRemodelId%2CImageShipyardIcon%3DImageShipyardIcon%2CImageShipyardIconKai%3DImageShipyardIconKai&limit=400&max+display+chars=3000

var table = $(".cargoTable tbody");
var q = "";
function hullf(fulltext) {
	switch(fulltext){
        case "Destroyer": return "ShipHulls.DD";
        case "Light Cruiser": return "ShipHulls.CL";
        case "Battleship": return "ShipHulls.BB";
        case "Light Aircraft Carrier": return "ShipHulls.CVL";
        case "Aircraft Carrier": return "ShipHulls.CV";
        case "Repair Ship": return "ShipHulls.AR";
        case "Heavy Cruiser": return "ShipHulls.CA";
        case "Battlecruiser": return "ShipHulls.BC";
        case "Monitor": return "ShipHulls.BM";
        case "Submarine": return "ShipHulls.SS";
        case "BBV": return "ShipHulls.BBV";
        default: return "ERR";
    }
}
function rarityf (fulltext) {
	switch(fulltext) {
        case "Normal": return "Rarity.N";
        case "Rare": return "Rarity.R";
        case "Elite": return "Rarity.E";
        case "Super Rare": return "Rarity.SR";
		case "Ultra Rare": return "Rarity.UR";
        case "Priority": return "Rarity.P";
        case "Unreleased": return "Rarity.UN";
		default: return "ERR";
    }
}
var rarityR = {
	"Rarity.N" : "Rarity.R",
	"Rarity.R" : "Rarity.E",
	"Rarity.E" : "Rarity.SR",
	"Rarity.SR" : "Rarity.UR",
	"Rarity.UR" : "Rarity.UR",
	"Rarity.P" : "Rarity.P"
};
for (let ship of table.find("tr")) {
	ship = $(ship);
	var id = ship.find(".field_ShipID")[0].innerHTML;
	var nameEN = ship.find(".field_Name")[0].innerHTML;
	var nameCN = ship.find(".field_CNName")[0].innerHTML;
	var nameJP = ship.find(".field_JPName")[0].innerHTML;
	var faction = ship.find(".field_Nationality")[0].innerHTML;
	var hull = hullf(ship.find(".field_Type")[0].innerHTML);
	var rarity = rarityf(ship.find(".field_Rarity")[0].innerHTML);
	var retroID = ship.find(".field_RemodelId")[0].innerHTML;
	var hasRetro = retroID != "" ? "true" : "false";
	var subTypeRetro = hullf(ship.find(".field_SubtypeRetro")[0].innerHTML);
	if (rarity != "Rarity.UN" && rarity != "ERR") {
		if ($(ship).find(".field_ShipGroup")[0].innerHTML == "Collab") {
			id = "Collab" + id.replace("Collab", "");
		}
		q += "\n{\n\
	id		:	\"" + id + "\",\n\
	name	:	{\n\
		en	:	\"" + nameEN + "\",\n\
		cn	:	\"" + nameCN + "\",\n\
		jp	:	\"" + nameJP + "\",\n\
	},\n\
	faction	:	\"" + faction + "\",\n\
	hull	:	"	+ hull + ",\n\
	rarity	:	"	+ rarity + ",\n\
	hasRetro:	"	+ hasRetro + ",\n\
},"
		if (hasRetro == "true") {
			q += "\n{\n\
	id		:	\"" + retroID + "\",\n\
	name	:	{\n\
		en	:	\"" + nameEN + "\",\n\
		cn	:	\"" + nameCN + "\",\n\
		jp	:	\"" + nameJP + "\",\n\
	},\n\
	faction	:	\"" + faction + "\",\n\
	hull	:	"	+ (subTypeRetro != ("ERR" || "Rarity.UN" || "") ? subTypeRetro : hull) + ",\n\
	rarity	:	"	+ rarityR[rarity] + ",\n\
},"
		}
	} else
		console.log ( ship );
}