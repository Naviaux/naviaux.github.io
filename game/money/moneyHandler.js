function clickerPress() { // adds money and other stats when you click the button
	clicks++;
	money += clickMoney;
	money += getTotalAutomationIncome() * cps;
	totalClickMoney += clickMoney;
	totalClickMoney += getTotalAutomationIncome() * cps;
	totalMoney += clickMoney;
}

function updateCounter() {
	if (isUpgradeBought("moneyDisplay")) { // if this upgrade is bought
		var counter = document.getElementById("counter"); // get the element
		if (counter != null) {
			counter.innerHTML = convertNumber (money);
		}
	}
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
		statsClickMoney.innerHTML = "Money/Click: " + convertNumber(clickMoney + (getTotalAutomationIncome() * cps));
		statsTotalClick.innerHTML = "Total Click Money: " + convertNumber(totalClickMoney); // update elements
		if (isUpgradeBought("statsUpgrade")) { // if upgrade is bought, display more stuff
			statsUpgradesBought.innerHTML = "Upgrades Bought: " + totalUpgradesBought + "/" + totalUpgrades;
		}
		if (isUpgradeBought("statsAutomations")) {
			statsAutomationIncome.innerHTML = "Total Automation Income: " + convertNumber(getTotalAutomationIncome());
		}
		statsTotalMoney.innerHTML = "Total Money: " + convertNumber(totalMoney); // set elements to their stats
	}
}

function automationIncome() {
	for (AIL = 0; AIL < automations.length; AIL++) {
		if (automations[AIL][5] > 0)
			money += (automations[AIL][4] * automations[AIL][5]) / 100;
			totalMoney += (automations[AIL][4] * automations[AIL][5]) / 100;
	}
}

function tickGame() {

	if (!loadingGAME) {
		checkUpgrades(); // looks for new upgrades to be added
		updateCounter();
		updateStats();
		updateUpgradeNames(); // update upgrade names... this is a strange thing to call every time... whatever...
		automationIncome(); // gets income from automations
	}
	
	if (autoSaving)
		savetimer++;
	if (savetimer == 30000) {
		saveGame(); // 'auto' save function
		savetimer = 0;
	}
	setTimeout(tickGame, 10);
	
}