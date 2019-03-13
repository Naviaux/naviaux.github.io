//https://azurlane.koumakan.jp/w/index.php?title=Special:ViewData&tables=ships&fields=ShipGroup%3DShipGroup%2CShipID%3DShipID%2CName%3DName%2CCNName%3DCNName%2CJPName%3DJPName%2CRarity%3DRarity%2CNationality%3DNationality%2CType%3DType%2CSubtypeRetro%3DSubtypeRetro%2CRemodelId%3DRemodelId%2CImageShipyardIcon%3DImageShipyardIcon%2CImageShipyardIconKai%3DImageShipyardIconKai&limit=400&max+display+chars=3000

var table = $("#standard tbody");
var q = "";
function hull(fulltext) {
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
function rarity (fulltext) {
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
table.children("tr").each(function (e) {
	let c = table.children("tr")[e].children;
	q += "\n{\n\tid\t\t:\t\"" + c[0].children[0].innerHTML + "\",\n\tname\t:\t\"" + c[1].children[0].innerHTML + "\",\n\tfaction\t:\t\"" + c[4].children[0].innerHTML + "\",\n\thull\t:\t" + hull(c[3].children[0].innerHTML) + ",\n\trarity\t:\t" + rarity(c[2].innerHTML) + ",\n\thasRetro:\tfalse\n},";

});