function saveGame() { // saves the game
	var statsFile = "stats=" + money + "," + clicks + "," +
				totalClickMoney + "," + totalMoney + ","; // COOKIE NUMREO UNO
	if (autoSaving) statsFile += "t"; else statsFile += "f";
	
	var upgradeFile = "upgrades="; // COOKIE NUMERO DOUS
	for (saveUpgradeCookieLoop = 0; saveUpgradeCookieLoop < upgradeID.length; saveUpgradeCookieLoop++) { // loops through upgrades
		if (upgradeID[saveUpgradeCookieLoop][5])
			upgradeFile += "t";
		else // this stuff shortens the upgrade cookie... by a metric fuckton
			upgradeFile += "f";
		if (saveUpgradeCookieLoop < upgradeID.length - 1)
			upgradeFile += ","; // adds a comma if the current thing is adding is less than the total number of upgrades - 1
	}
	
	var automationFile = "automations="; // COOKIE NUMERO TROIS
	for (saveAutomationsCookieLoop = 0; saveAutomationsCookieLoop < automations.length; saveAutomationsCookieLoop++) {
		automationFile += automations[saveAutomationsCookieLoop][5];
		if (saveAutomationsCookieLoop < automations.length - 1)
			automationFile += ",";
	}
	
	document.cookie = statsFile; // ADDS COOKIE NUMERO UNO
	document.cookie = upgradeFile; // ADDS COOKIE NUMERO DOUS
	document.cookie = automationFile;
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
		for (loadUpgradesLoop = 0; loadUpgradesLoop < upgradeID.length; loadUpgradesLoop++) { // loops through the info
			if (upgradeFile[loadUpgradesLoop] == "t") { // if t
				upgradeID[loadUpgradesLoop][4] = true;
				upgradeID[loadUpgradesLoop][5] = true; // set bought and added to true
			} else { // OTHERWISE (f)
				upgradeID[loadUpgradesLoop][4] = false;
				upgradeID[loadUpgradesLoop][5] = false; // set bought and added to false
			}
		}
		var automationFile = seperateCookies[2].split("=")[1].split(",");
		for (loadAutomationsLoop = 0; loadAutomationsLoop < automations.length; loadAutomationsLoop++) {
			for (buyAutomations = 0; buyAutomations < parseInt(automationFile[loadAutomationsLoop]); buyAutomations++) {
				loadingGAME = true;
				enoughMoneyAUTO(automations[loadAutomationsLoop][0]);
			}
		}
		return true; // The game had a save and was loaded
	}
	return false; // The game didn't have a save
} // I swear this function is just separating Oreos and putting the stuffing somewhere...