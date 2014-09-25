var upgradeID = new Array( // REALLY LONG ARRAY THAT USED TO BE SEPERATED INTO MULTIPLE ARRAYS... This just looks cleaner...
			// [0]UpgradeID, [1]UpgradeName, [2]Cost, [3]Function, [4]Added, [5]Bought, [6]Requirements // I really wish there was an easier way to set the requirements... -ragagagage-
	new Array("semiNameUpgrade", "LI", 5, firstNameUpgrade, false, false, "C5;"),
	new Array("properNameUpgrade", "%names%", 10, finalNameUpgrade, false, false, "M10;UsemiNameUpgrade;"),
	new Array("moneyDisplay", "%display%", 10, displayMoney, false, false, "M10;UsemiNameUpgrade;"),
	new Array("upgradeBox", "Upgrade Box", 20, upgradeBox, false, false, "M20;UproperNameUpgrade;"),
	new Array("upgradeCostDisplay", "Cost Display", 50, costDisplay, false, false, "UmoneyDisplay,upgradeBox;"),
	new Array("statsWindow", "Statistics Window", 75, simpleStatWindow, false, false, "M75;UmoneyDisplay,upgradeBox;"),
	new Array("statsUpgrade", "Upgrade Statistics", 150, statsUpgrade, false, false, "UstatsWindow;"),
	new Array("upgradeStatsWindow", "Statistics Window Upgrade", 375, upgradeStatWindow, false, false, "UstatsWindow;"),
	new Array("tickerFixer", "Fix Ticker", 250, tickerFixer, false, false, "M250;UproperNameUpgrade;"),
	new Array("tickerRealInfo", "Ticker News", 475, tickerRealInfo, false, false, "UtickerFixer;"),
	new Array("automationBox", "Automation Display", 750, simpleAutomationBox, false, false, "UupgradeStatsWindow;"),
	new Array("basicAutomation", "Basic Automation", 250, unlockBasicAutomation, false, false, "UautomationBox;"),
	new Array("saveManagerUI", "Save Manager", 500, saveManagerUI, false, false, "UupgradeStatsWindow;"),
	new Array("basicAutomationU1", "Basic Basic Automation Upgrade", 200, upgradeBasicAutomation, false, false, "A10=automation-basic;"),
	new Array("upgradeClicks1", "Click Upgrade", 100, upgradeMouse, false, false, "C150;UproperNameUpgrade;")
); // THIS FUCKING ARRAY HAS GOTTEN OUT OF HAND. I LOVE IT.
var addedBar = false; // THIS IS THAT VARIABLE FROM ./upgrades/upgradeHandler.js