function saveGame() { // saves the game
	var statsFile = "stats=" + money + "," + clicks + "," +
				totalClickMoney + "," + totalMoney + ","; // COOKIE NUMREO UNO
	if (autoSaving) statsFile += "t"; else statsFile += "f";
	
	var upgradeFile = "upgrades="; // COOKIE NUMERO DOUS
	for (saveGameLoop = 0; saveGameLoop < upgradeID.length; saveGameLoop++) { // loops through upgrades
		if (upgradeID[saveGameLoop][5])
			upgradeFile += "t";
		else // this stuff shortens the upgrade cookie... by a metric fuckton
			upgradeFile += "f";
		if (saveGameLoop < upgradeID.length - 1)
			upgradeFile += ","; // adds a comma if the current thing is adding is less than the total number of upgrades - 1
	}
	document.cookie = statsFile; // ADDS COOKIE NUMERO UNO
	document.cookie = upgradeFile; // ADDS COOKIE NUMERO DOUS
	// I just realized... THIS SHOULDN'T WORK... But it does >_>
}
function loadGame() {
	if (!document.cookie == "") { // if the document has a cookie
		var cookies = document.cookie; // gets the cookies
		var seperateCookies = document.cookie.split(";"); // seperates the cookies from each other
		var statFile = seperateCookies[0].split("=")[1].split(","); // extracts the information from COOKIE NUMERO UNO
		
		money = parseInt(statFile[0]); clicks = parseInt(statFile[1]);
		totalClickMoney = parseInt(statFile[2]); totalMoney = parseInt(statFile[3]); // sets stat info and parses to an int so it doesn't fuck itself
		if (statFile[4] == "t") autoSaving = true; else autoSaving = false;
		var upgradeFile = seperateCookies[1].split("=")[1].split(","); // extracts information from COOKIE NUMERO DOUS
		for (loadGameLoop = 0; loadGameLoop < upgradeID.length; loadGameLoop++) { // loops through the info
			if (upgradeFile[loadGameLoop] == "t") { // if t
				upgradeID[loadGameLoop][4] = true;
				upgradeID[loadGameLoop][5] = true; // set bought and added to true
			} else { // OTHERWISE (f)
				upgradeID[loadGameLoop][4] = false;
				upgradeID[loadGameLoop][5] = false; // set bought and added to false
			}
		}
		return true; // The game had a save and was loaded
	}
	return false; // The game didn't have a save
} // I swear this function is just separating Oreos and putting the stuffing somewhere...