function clearScreen() { // Removes everything from the screen
	document.body.innerHTML = ""; // INCLUDING YOU. YES. YOU.
}
function enoughMoney(ID, refresh) { // THIS IS THAT FUNCTION THAT KEEPS POPPING UP IN ./upgrades/upgradeFunctions.js... btw, I don't think you have enough money
	if (loadingGAME) { totalUpgradesBought++; return true; } // IS THE GAME LOADING. FUCK THIS PISSES ME OFF
	if (money >= upgradeID[ID][2]) { // Does the player have enough money
		money -= upgradeID[ID][2]; // GIVE IT TO ME
		upgradeID[ID][5] = true; // Set the upgrade to bought
		totalUpgradesBought++; // oo, you bought an upgrade. NOW SHOW IT OFF
		$("#" + upgradeID[ID][0]).remove(); // remove the upgrade from the upgrade list
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
function convertNumber (numeral) {
	var sNumeral = Math.round(numeral).toLocaleString();
	var shortValues = new Array("K", "M", "B", "T", "q", "Q", "s");
	if (sNumeral.length > 5 && Math.floor((sNumeral.length - 5) / 4) < shortValues.length) { // check length is above 5 and that math is less than shortValues length
		var number = sNumeral.indexOf(","); // math signifies how many , there are... there must be an easier way of counting...
		return sNumeral.substring(0, number) + "." + sNumeral.substring(number + 1, number + 2) + shortValues[Math.floor((sNumeral.length - 5) / 4)]; // weird displaying info
	} else if (Math.floor((sNumeral.length - 5) / 4) > shortValues.length) { // same weird math thing... maybe a % operator would do the trick
		return ">999.9" + shortValues[shortValues.length - 1]; // WHY DO YOU HAVE THIS MUCH MONEY
	}
	return sNumeral;
}