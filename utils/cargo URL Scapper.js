var table = $(".cargoTable tbody");
var q = "";
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