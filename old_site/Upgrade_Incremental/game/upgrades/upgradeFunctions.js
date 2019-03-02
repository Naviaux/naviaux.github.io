// I -HATE- COMMENTING
function firstNameUpgrade() { // makes the game somewhat human readable
	var thisUpgrade = getUpgradeID("semiNameUpgrade");
	if (enoughMoney(thisUpgrade)) { // checks if player has enough money
		var htitle = $("#htitle");
		var utitle = $("#utitle");
		var news = $("#news-ticker");
		var clicker = $("#clicker");
		var counter = $("#counter"); // gets the values
		
		htitle[0].innerHTML = "%title%";
		utitle[0].innerHTML = "%upgrade%";
		news[0].innerHTML = "%news%";
		clicker[0].value = "%click%";
		counter[0].innerHTML = "%count%"; // sets their innards
	} // WHY DO I EVEN MAKE VARIABLES HERE?
}
function finalNameUpgrade() { // makes the game actually human readable
	var thisUpgrade = getUpgradeID("properNameUpgrade");
	if (enoughMoney(thisUpgrade)) { // check for money
		var htitle = $("#htitle")[0];
		var utitle = $("#utitle")[0];
		var news = $("#news-ticker")[0];
		var clicker = $("#clicker")[0];
		var counter = $("#counter")[0]; // gets the upgrade variables
		
		htitle.innerHTML = "Upgrade Incremental";
		utitle.innerHTML = "Upgrade List";
		news.innerHTML = "News Ticker";
		clicker.value = "Click";
		upgradeID[getUpgradeID("moneyDisplay")][1] = "Money Display"; // changes the upgrade name
		updateUpgradeNames(); // THIS IS LITERALLY THE ONLY PLACE THIS FUNCTION IS -ACTUALLY- USEFUL...
	} // AGAIN. WHY DO I EVEN HAVE VARIABLES
}
function titleFix() {
	var thisUpgrade = getUpgradeID("titleFix");
	if (enoughMoney(thisUpgrade)) {
		document.title = "Upgrade Incremental";
	}
}
function titleCounter() {
	var thisUpgrade = getUpgradeID("titleCounter");
	if (enoughMoney(thisUpgrade)) {
		document.title = convertNumber(money) + " - Upgrade Incremental";
	}
}
function displayMoney() { // Makes the counter actually display money
	var thisUpgrade = getUpgradeID("moneyDisplay");
	if (enoughMoney(thisUpgrade)) { // player has enough?
		displaying = true; // THIS IS ONE OF THOSE VARIABLES FROM ./money/moneyHandler.js
		if (!loadingGAME) // I DON'T EVEN REMEMBER THE POINT OF THIS. Probably some idiotic err- OH RIGHT.
			updateCounter(); // Makes sure it actually shows the counter...
	}
}
function upgradeBox() { // Makes the upgrade box look a bit nicer
	var thisUpgrade = getUpgradeID("upgradeBox");
	if (enoughMoney(thisUpgrade)) { // player u haz teh moolaz?
		var upgradeBox = $("#upgrade-container")[0].id = "upgrade-container-up"; // changes the upgradebox id
	}
}
function costDisplay() { // Makes upgrades have a cost you can display
	var thisUpgrade = getUpgradeID("upgradeCostDisplay");
	if (enoughMoney(thisUpgrade)) { // WHERES MY MONEY BITCH?
		if (!loadingGAME) { // ANOTHER VARIABLE FROM ./upgrade/upgradeHandler.js
			for (CDL = 0; CDL < upgradeID.length; CDL++) {
				if (upgradeID[CDL][4] && !upgradeID[CDL][5]) {
					var cost = document.createElement("p");
					cost.className = "cost";
					cost.innerHTML = upgradeID[CDL][2];
					$("#" + upgradeID[CDL][0])[0].appendChild(cost); // This makes sure that any upgrade that was being displayed before this upgrade was purchased now displays its cost... HURRAH FOR SUPER LONG COMMENTS THAT REALLY DON'T NEED TO BE THIS LONG. AND HURRAY FOR MAKING THEM EVEN LONGER THAN THEY EVER NEEDED TO BE IN THE FIRST PLACE. Did I mention I hate commenting?
				}
			}
		}
	}
}
function upgradeMouse(ID, amount) { // Makes clicking more effective
	return function () { // anonymous function, allows me to upgrade any amount
		var thisUpgrade = getUpgradeID(ID);
		if (enoughMoney(thisUpgrade)) // I just want the money... THATS ALL I WANT
			clickMoney += amount; // This will probably be changed to something more ridiculous...
	}
}
function simpleStatWindow() { // OO~H. SHINY.
	var thisUpgrade = getUpgradeID("statsWindow");
	if (enoughMoney(thisUpgrade, false)) { // I'm going to need a Swiss bank account... OH, UPGRADE IDEA
		var statWindow = document.createElement("div");
		var sTitle = document.createElement("h4"); // creates container and header
		
		statWindow.id = "stats-window";
		sTitle.id = "stitle";
		sTitle.innerHTML = "Statistics Window"; // sets id and info for container and header
		/* BASIC STATS */
		var statsMoney = document.createElement("p");
		var statsClicks = document.createElement("p");
		var statsClickMoney = document.createElement("p");
		var statsTotalClick = document.createElement("p");
		var statsTotalMoney = document.createElement("p"); // creates stats
		
		statsMoney.id = "stats-money";
		statsClicks.id = "stats-clicks";
		statsClickMoney.id = "stats-click-money";
		statsTotalClick.id = "stats-total-click";
		statsTotalMoney.id = "stats-total-money"; // sets stats ids... WHY ARE THESE SO FUCKING LONG
		
		statsMoney.innerHTML = "Money: " + convertNumber(money);
		statsClicks.innerHTML = "Clicks: " + convertNumber(clicks);
		statsClickMoney.innerHTML = "Money/Click: " + convertNumber(clickMoney);
		statsTotalClick.innerHTML = "Total Click Money: " + convertNumber(totalClickMoney);
		statsTotalMoney.innerHTML = "Total Money: " + convertNumber(totalMoney); // Sets the information to the stat elements
		
		
		/* UPGRADE STATS */ // Yes, because I couldn't think of a better way to do this
		var statsUpgradesBought = document.createElement("p");
		statsUpgradesBought.id = "stats-upgrades-bought";
		statsUpgradesBought.innerHTML = "Upgrades Bought: " + totalUpgradesBought + "/" + totalUpgrades;
		// Create and do stuff with the upgrade stats stuff...
		
		/* AUTOMATION STATS */
		var statsAutomationIncome = document.createElement("p");
		statsAutomationIncome.id = "stats-automation-income";
		var totalIncome = 0;
		for (TAIL = 0; TAIL < automations.length; TAIL++)
			if (automations[TAIL][5] > 0)
				totalIncome += (automations[TAIL][4] * automations[TAIL][5]);
		statsAutomationIncome.innerHTML = "Total Automation Income: " + convertNumber(totalIncome) + "/s";
		
		/* ADD THINGS */
		statWindow.appendChild(sTitle);
		statWindow.appendChild(statsMoney);
		statWindow.appendChild(statsClicks);
		statWindow.appendChild(statsClickMoney);
		statWindow.appendChild(statsTotalClick);
		statWindow.appendChild(statsUpgradesBought);
		statWindow.appendChild(statsAutomationIncome);
		statWindow.appendChild(statsTotalMoney); // adds the things to the container
		document.body.appendChild(statWindow); // adds the container to the document
		
		updateCounter(); // FUCK YEA. UPDATING. Why am I calling this again? RIGHT, BECAUSE IT'S THE STATS... Why am I not callin- I give up with trying to understand myself already... THANKFULLY THESE COMMENTS ARE HERE, RIGHT?
	}
}
function statsUpgrade() { // OH BOY. NOW YOUR SHOWING OFF YOUR UPGRADES.
	var thisUpgrade = getUpgradeID("statsUpgrade");
	if (enoughMoney(thisUpgrade)) { // Slow down there buddy, there's a toll
		$("#stats-upgrades-bought")[0].style.display = "block"; // unhides the stat
		updateStats(); // updates the stats to show it
	}
}
function statsAutomations() { // OH BOY. NOW YOUR SHOWING OFF YOUR UPGRADES.
	var thisUpgrade = getUpgradeID("statsAutomations");
	if (enoughMoney(thisUpgrade)) { // Slow down there buddy, there's a toll
		$("#stats-automation-income")[0].style.display = "block"; // unhides the stat
		updateStats(); // updates the stats to show it
	}
}
function upgradeStatWindow() { // YAY. SHOWING YOUR STATS OFF IN BETTER STYLE... Better style? Does that even make sense?
	var thisUpgrade = getUpgradeID("upgradeStatsWindow");
	if (enoughMoney(thisUpgrade)) { // You shall not pass! Without payment, then you can pass.
		var statWindow = $("#stats-window")[0].id = "stats-window-up"; // change id of stat window
	}
}
function tickerFixer() {
	var thisUpgrade = getUpgradeID("tickerFixer");
	if (enoughMoney(thisUpgrade)) { // Moneeeyyyy~~~~
		var ticker = document.createElement("marquee"); // O~h, an UNKNOWN!
		ticker.id = "ticker-inside";
		ticker.innerHTML = "News Ticker"; // sets the unknowns 'special bits'
		$("#news-ticker")[0].innerHTML = "";
		$("#news-ticker")[0].appendChild(ticker); // adds in the proper location
	}
}
function tickerRealInfo() {
	var thisUpgrade = getUpgradeID("tickerRealInfo");
	if (enoughMoney(thisUpgrade)) { // HAH. IT'S MINE NOW. NOW YOUR thisUpgrade POORER THAN YOU WERE BEFORE
		// I DO NOTHING. WHY DID YOU BUY ME.
	}
}
function simpleAutomationBox() {
	var thisUpgrade = getUpgradeID("automationBox");
	if (enoughMoney(thisUpgrade)) { // kek.
		var automationDisplay = document.createElement("div");
		var displayHeader = document.createElement("h3"); // Elements
		
		automationDisplay.id = "automation-display";
		displayHeader.id = "atitle"; // Identifiers... So it can look nice, and other code can use it...
		
		displayHeader.innerHTML = "Automations"; // Honestly, I have no clue why I called them 'automations'
			
		automationDisplay.appendChild(displayHeader);
		document.body.appendChild(automationDisplay); // Gives them to their mothers
	}
}
function unlockAutomation(ID, automationID) {
	return function() { // anonymous function, I can reuse it for every automation now
	var thisUpgrade = getUpgradeID(ID);
		if (enoughMoney(thisUpgrade)) { // All right. I don't want money any more. I want rupees.
			var automationDisplay;
			if (!isUpgradeBought("upgradeAutomationUI"))
				automationDisplay = $("#automation-display")[0]; // gets the container
			else
				automationDisplay = $("#automation-display-up")[0];
			var basicAutomationDisplayii = document.createElement("div");
			var basicAutomationNameii = document.createElement("p");
			var basicAutomationCounterii = document.createElement("p");
			var basicAutomationCostii = document.createElement("p");
			var basicAutomationIncomeii = document.createElement("p"); // creates elements... Might move this setup to a function...
			
			var automationInfo = getAutomationDetails(automationID); // gets information about the automation
			
			basicAutomationDisplayii.id = automationInfo[0]; basicAutomationDisplayii.className = "auto-display";
			basicAutomationNameii.id = automationInfo[0]; basicAutomationNameii.className = "auto-name";
			basicAutomationCounterii.id = automationInfo[0]; basicAutomationCounterii.className = "auto-counter";
			basicAutomationCostii.id = automationInfo[0]; basicAutomationCostii.className = "auto-cost";
			basicAutomationIncomeii.id = automationInfo[0]; basicAutomationIncomeii.className = "auto-income";
			// sets identifiers for looking prettyish
			
			basicAutomationNameii.innerHTML = automationInfo[1] + " (+" + automationInfo[4] + ")";
			basicAutomationCounterii.innerHTML = convertNumber(automationInfo[5]) + " owned";
			basicAutomationCostii.innerHTML = convertNumber(automationInfo[2]);
			basicAutomationIncomeii.innerHTML = convertNumber((automationInfo[4] * automationInfo[5])) + "/s"; // sets appropriate information
			
			basicAutomationDisplayii.onclick = buyAutomation(automationInfo[0]);
			basicAutomationDisplayii.appendChild(basicAutomationNameii);
			basicAutomationDisplayii.appendChild(basicAutomationCostii);
			basicAutomationDisplayii.appendChild(basicAutomationCounterii);
			basicAutomationDisplayii.appendChild(basicAutomationIncomeii);
			automationDisplay.appendChild(basicAutomationDisplayii); // throws everything in to their mother
		}
	}
}
function saveManagerUI() {
	var thisUpgrade = getUpgradeID("saveManagerUI");
	if (enoughMoney(thisUpgrade)) { // Saving is free, however, managing it isn't
		var saveManagerTitle = document.createElement("h4");
		var saveManagerUI = document.createElement("div");
		var saveManagerButton = document.createElement("input");
		var saveManagerCheckbox = document.createElement("input");
		var saveManagerLabel = document.createElement("label"); // create the shenanigans
		
		saveManagerUI.id = "save-manager";
		saveManagerTitle.id = "save-title";
		saveManagerButton.id = "save";
		saveManagerCheckbox.id = "auto-save";
		saveManagerLabel.id = "save-label"; // set the ids for shenanigans
		
		saveManagerButton.type = "button";
		saveManagerCheckbox.type = "checkbox"; // set types for shenanigans
		
		saveManagerTitle.innerHTML = "Save Manager";
		saveManagerButton.value = "Save";
		saveManagerCheckbox.checked = autoSaving;
		saveManagerLabel.innerHTML = "Auto-Save"; // set display shenanigans
		
		saveManagerButton.onclick = saveGame; // save the damn game
		saveManagerCheckbox.onclick = function switchAutoSave() { autoSaving = !autoSaving; }; // ANONYMOUS FUNCTION
		
		saveManagerUI.appendChild(saveManagerTitle);
		saveManagerUI.appendChild(saveManagerButton);
		saveManagerUI.appendChild(saveManagerCheckbox);
		saveManagerUI.appendChild(saveManagerLabel);
		document.body.appendChild(saveManagerUI); // add shenanigans to their parents
	}
}
function upgradeAutomation(ID, automationID, amount) {
	return function() { // anonymous function, I can use it for any automation and any amount
		var thisUpgrade = getUpgradeID(ID);
		if (enoughMoney(thisUpgrade)) { // Damn, THIS UPGRADE ISN'T HELPING ME. Or is it?
			var aID = getAutomationID(automationID);
			automations[aID][4] += amount;
			updateAutomationIncome(automationID); // increases how much an automation earns
		}
	}
}
function saveManagerUIUp() {
	var thisUpgrade = getUpgradeID("upgradeSaveUI");
	if (enoughMoney(thisUpgrade)) { // Didn't I mention I wanted rupees? I think you might want to start providing...
		$("#save-manager")[0].id = "save-manager-up"; // changes save manager id
	}
}
function automationUIUp() {
	var thisUpgrade = getUpgradeID("upgradeAutomationUI");
	if (enoughMoney(thisUpgrade)) { // Making Money Look Better... Where are my rupees?
		$("#automation-display")[0].id = "automation-display-up"; // sets the automation display id
	}
}
function automationUpgrades() {
	var thisUpgrade = getUpgradeID("automationUpgrades");
	if (enoughMoney(thisUpgrade)) { // FREE MONEY... I want rupees though...
		// Only unlocks other upgrades`
	}
}
function upgradeClickMPC(ID, amount) {
	return function() {
		var thisUpgrade = getUpgradeID(ID);
		if (enoughMoney(thisUpgrade)) {
			cps += amount;
		}
	}
}
function domainSystem() {
	var thisUpgrade = getUpgradeID("domainSystemU1");
	if (enoughMoney(thisUpgrade)) {
	}
}
function startDomain(uID, autoID, oCost, costMod) {
	return function() {
		var thisUpgrade = getUpgradeID(uID);
		if (enoughMoney(thisUpgrade)) { // witty remark about money
			var aID = getAutomationID(autoID);
			automations[aID][2] = oCost;
			automations[aID][3] = costMod;
			automations[aID][5] = 0;
			updateAutomationIncome(autoID);
		}
	}
}
function multiplyAutomationIncome(uID, autoID, multiplier) {
	return function() {
		var thisUpgrade = getUpgradeID(uID);
		if (enoughMoney(thisUpgrade)) {
			var aID = getAutomationID(autoID);
			automations[aID][4] *= multiplier;
			updateAutomationIncome(autoID);
		}
	}
}
function upgradeCPS(uID, multiplier) {
	return function() {
		var thisUpgrade = getUpgradeID(uID);
		if (enoughMoney(thisUpgrade)) {
			AUTOcps += multiplier;
		}
	}
}
function upgradeBounceCPS(uID, multiplier) {
	return function() {
		var thisUpgrade = getUpgradeID(uID);
		if (enoughMoney(thisUpgrade)) {
			BOUNCEcps += multiplier;
		}
	}
}

/* This is a template function... It gets annoying writing essentially the same thing every time
function functionName() {
	var thisUpgrade = getUpgradeID("upgradeName");
	if (enoughMoney(thisUpgrade)) { // witty remark about money
		// stuff and comments
	}
}
*/