function clickerPress() { // adds money and other stats when you click the button
	clicks++;
	money += clickMoney;
	totalClickMoney += clickMoney;
	totalMoney += clickMoney;
	updateCounter(); // updates the counter in the header
}

function updateCounter() {
	if (isUpgradeBought("moneyDisplay")) { // if this upgrade is bought
		var counter = document.getElementById("counter"); // get the element
		var sMoney = money.toLocaleString(); // set it to the locale string (1,000,000,000,000,000...)
		var amount = new Array("K", "M", "B", "T", "q", "Q", "s"); // special amount ids
		counter.innerHTML = sMoney; // regardless of length, set counter to the locale
		if (sMoney.length > 5 && Math.floor((sMoney.length - 5) / 4) < amount.length) { // check length is above 5 and that math is less than amount length
			var number = sMoney.indexOf(","); // math signifies how many , there are... there must be an easier way of counting...
			counter.innerHTML = sMoney.substring(0, number) + "." + sMoney.substring(number + 1, number+2) + amount[Math.floor((sMoney.length - 5) / 4)]; // weird displaying info
		} else if (Math.floor((sMoney.length - 5) / 4) > amount.length) { // same weird math thing... maybe a % operator would do the trick
			counter.innerHTML = ">999.9" + amount[amount.length - 1]; // WHY DO YOU HAVE THIS MUCH MONEY
		}
	}
	updateStats(); // updates the stats
	if (autoSaving)
		savetimer++;
	if (savetimer == 100) {
		saveGame(); // 'auto' save function
		savetimer = 0;
	}
	checkUpgrades(); // looks for new upgrades to be added
	updateUpgradeNames(); // update upgrade names... this is a strange thing to call every time... whatever...
}
function updateStats() {
	if (isUpgradeBought("statsWindow")) { // if upgrade is bought
		var statsMoney = $("#stats-money")[0];
		var statsClicks = $("#stats-clicks")[0];
		var statsClickMoney = $("#stats-click-money")[0];
		var statsTotalClick = $("#stats-total-click")[0];
		var statsUpgradesBought = $("#stats-upgrades-bought")[0];
		var statsTotalMoney = $("#stats-total-money")[0]; // get elements
		
		statsMoney.innerHTML = "Money: " + money;
		statsClicks.innerHTML = "Clicks: " + clicks;
		statsClickMoney.innerHTML = "Money/Click: " + clickMoney;
		statsTotalClick.innerHTML = "Total Click Money: " + totalClickMoney; // update elements
		if (isUpgradeBought("statsUpgrade")) { // if upgrade is bought, display more stuff
			statsUpgradesBought.innerHTML = "Upgrades Bought: " + totalUpgradesBought + "/" + totalUpgrades;
		}
		statsTotalMoney.innerHTML = "Total Money: " + totalMoney; // set elements to their stats
	}
}