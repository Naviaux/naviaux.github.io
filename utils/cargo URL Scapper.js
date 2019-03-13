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
for (let ship of table.find("tr")) {
	ship = $(ship);
	var id = ship.find(".field_ShipID")[0].innerHTML;
	var rarity = rarityf(ship.find(".field_Rarity")[0].innerHTML);
	var shipYardURL = "https://azurlane.koumakan.jp" + ship.find(".field_ImageShipyardIcon img").attr("src");
	var retroID = ship.find(".field_RemodelId")[0].innerHTML;
	var shipYardKaiURL = "https://azurlane.koumakan.jp" + ship.find(".field_ImageShipyardIconKai img").attr("src");
	var hasRetro = retroID != "" ? true : false;
	var subTypeRetro = hullf(ship.find(".field_SubtypeRetro")[0].innerHTML);
	if (rarity != "Rarity.UN" && rarity != "ERR") {
		if ($(ship).find(".field_ShipGroup")[0].innerHTML == "Collab")
			id = "Collab" + id.replace("Collab", "");
		
		q += "," + id + "|" + shipYardURL;
		if (hasRetro)
			q += "," + retroID + "|" + shipYardKaiURL;
		
	} else
		console.log ( ship );
}