function clickerPress() { // adds money and other stats when you click the button
	clicks++;
	money += clickMoney;
	money += getTotalAutomationIncome() * cps;
	money += (getTotalAutomationIncome() * AUTOcps) * cps;
	totalClickMoney += clickMoney;
	totalClickMoney += getTotalAutomationIncome() * cps;
	totalClickMoney += (getTotalAutomationIncome() * AUTOcps) * cps;
	totalMoney += clickMoney;
	totalMoney += getTotalAutomationIncome() * cps;
	totalMoney += (getTotalAutomationIncome() * AUTOcps) * cps;
}

function updateCounter() {
	if (isUpgradeBought("moneyDisplay")) { // if this upgrade is bought
		var counter = document.getElementById("counter"); // get the element
		if (counter != null) {
			counter.innerHTML = convertNumber (money);
		}
		if (isUpgradeBought("titleCounter")) {
			document.title = convertNumber(money) + " - Upgrade Incremental";
		}
	}
}
function getTotalClickIncome() {
	return clickMoney + (getTotalAutomationIncome() * cps) + ((getTotalAutomationIncome() * AUTOcps) * cps);
}
function updateStats() {
	if (isUpgradeBought("statsWindow")) { // if upgrade is bought
		var statsMoney = $("#stats-money")[0];
		var statsClicks = $("#stats-clicks")[0];
		var statsClickMoney = $("#stats-click-money")[0];
		var statsTotalClick = $("#stats-total-click")[0];
		var statsUpgradesBought = $("#stats-upgrades-bought")[0];
		var statsAutomationIncome = $("#stats-automation-income")[0];
		var statsTotalMoney = $("#stats-total-money")[0]; // get elements
		
		statsMoney.innerHTML = "Money: " + convertNumber(money);
		statsClicks.innerHTML = "Clicks: " + convertNumber(clicks);
		statsClickMoney.innerHTML = "Money/Click: " + convertNumber(clickMoney + (getTotalAutomationIncome() * cps) + ((getTotalAutomationIncome() * AUTOcps) * cps));
		statsTotalClick.innerHTML = "Total Click Money: " + convertNumber(totalClickMoney); // update elements
		if (isUpgradeBought("statsUpgrade")) { // if upgrade is bought, display more stuff
			statsUpgradesBought.innerHTML = "Upgrades Bought: " + totalUpgradesBought + "/" + totalUpgrades;
		}
		if (isUpgradeBought("statsAutomations")) {
			statsAutomationIncome.innerHTML = "Total Automation Income: " + convertNumber(getTotalAutomationIncome() + (getTotalAutomationIncome() * AUTOcps) + (getTotalClickIncome() * BOUNCEcps)) + "/s";
		}
		statsTotalMoney.innerHTML = "Total Money: " + convertNumber(totalMoney); // set elements to their stats
	}
}

function automationIncome() {
	for (AIL = 0; AIL < automations.length; AIL++) {
		if (automations[AIL][5] > 0)
			money += (automations[AIL][4] * automations[AIL][5]) / 100;
			money += ((automations[AIL][4] * automations[AIL][5]) * AUTOcps) / 100;
			totalMoney += (automations[AIL][4] * automations[AIL][5]) / 100;
			totalMoney += ((automations[AIL][4] * automations[AIL][5]) * AUTOcps) / 100;
	}
	money += getTotalClickIncome() * BOUNCEcps / 100;
	totalMoney += getTotalClickIncome() * BOUNCEcps / 100;
}
function updateIncomes() {
	for (UAIL = 0; UAIL < automations.length; UAIL++) {
		if (automations[UAIL][5] > 0)
			updateAutomationIncome(automations[UAIL][0]);
	}
}
function tickGame() {

	if (!loadingGAME) {
		checkUpgrades(); // looks for new upgrades to be added
		updateCounter();
		updateStats();
		updateUpgradeNames(); // update upgrade names... this is a strange thing to call every time... whatever...
		automationIncome(); // gets income from automations
		updateIncomes();
	}
	
	if (autoSaving)
		savetimer++;
	if (savetimer == 3000) {
		saveGame(); // 'auto' save function
		savetimer = 0;
	}
	setTimeout(tickGame, 10);
	
}