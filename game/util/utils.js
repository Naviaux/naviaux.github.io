function clearScreen() { // Removes everything from the screen
	document.body.innerHTML = ""; // INCLUDING YOU. YES. YOU.
}
function enoughMoney(ID, refresh) { // THIS IS THAT FUNCTION THAT KEEPS POPPING UP IN ./upgrades/upgradeFunctions.js... btw, I don't think you have enough money
	if (loadingGAME) { totalUpgradesBought++; return true; } // IS THE GAME LOADING. FUCK THIS PISSES ME OFF
	if (money >= upgradeID[ID][2]) { // Does the player have enough money
		money -= upgradeID[ID][2]; // GIVE IT TO ME
		upgradeID[ID][5] = true; // Set the upgrade to bought
		totalUpgradesBought++; // oo, you bought an upgrade. NOW SHOW IT OFF
		document.getElementById(upgradeID[ID][0]).remove(); // remove the upgrade from the upgrade list
		if (refresh || refresh == undefined)
			updateCounter(); // update the counter
		return true; // YES, I BOUGHT THAT UPGRADE
	}
	return false; // WHAT? YOU DON'T HAVE ENOUGH? SUFFER.
}
function getUpgradeID(ID) { // I wish I could use this in ./ref/upgrades.js
	for (GUIDL = 0; GUIDL < upgradeID.length; GUIDL++) { // loops through upgrades
		if (upgradeID[GUIDL][0] == ID) { // checks to see if the id at GUIDL matches the input
			return GUIDL; // returns GUIDL if true
		}
	}
	return -1; // otherwise it doesn't exist
}
function isUpgradeBought(ID) { // TIME TO START REPLACING SOME VARIABLES
	if (getUpgradeID(ID) > -1)
		return upgradeID[getUpgradeID(ID)][5];
	return false;
}