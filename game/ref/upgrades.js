var upgradeID = new Array( // REALLY LONG ARRAY THAT USED TO BE SEPERATED INTO MULTIPLE ARRAYS... This just looks cleaner...
			// [0]UpgradeID, [1]UpgradeName, [2]Cost, [3]Function, [4]Added, [5]Bought, [6]Requirements // I really wish there was an easier way to set the requirements... -ragagagage-
	new Array("semiNameUpgrade", "LI", 5, firstNameUpgrade, false, false, "C5;"),
	new Array("properNameUpgrade", "%names%", 10, finalNameUpgrade, false, false, "M10;UsemiNameUpgrade;"),
	new Array("moneyDisplay", "%display%", 10, displayMoney, false, false, "M10;UsemiNameUpgrade;"),
	new Array("upgradeBox", "Upgrade Box", 20, upgradeBox, false, false, "M20;UproperNameUpgrade;"),
	/*new Array("titleFix", "Fix Title", 50, titleFix, false, false, "M50;UproperNameUpgrade;"),
	new Array("titleCounter", "Title Counter", 150, titleCounter, false, false, "M150;UtitleFix"),*/
	new Array("upgradeCostDisplay", "Cost Display", 50, costDisplay, false, false, "UmoneyDisplay,upgradeBox;"),
	new Array("statsWindow", "Statistics Window", 75, simpleStatWindow, false, false, "M75;UmoneyDisplay,upgradeBox;"),
	new Array("upgradeStatsWindow", "Statistics Window Upgrade", 375, upgradeStatWindow, false, false, "UstatsWindow;"),
	new Array("statsUpgrade", "Upgrade Statistics", 150, statsUpgrade, false, false, "UstatsWindow;"),
	new Array("statsAutomations", "Automation Statistics", 150, statsAutomations, false, false, "A1=automation-basic;"),
	new Array("tickerFixer", "Fix Ticker", 250, tickerFixer, false, false, "M250;UproperNameUpgrade;"),
	new Array("tickerRealInfo", "Ticker News", 475, tickerRealInfo, false, false, "UtickerFixer;"),
	new Array("automationBox", "Automation Display", 750, simpleAutomationBox, false, false, "UupgradeStatsWindow;"),
	new Array("upgradeAutomationUI", "Automation Display", 200, automationUIUp, false, false, "UautomationBox;"),
	new Array("saveManagerUI", "Save Manager", 500, saveManagerUI, false, false, "UupgradeStatsWindow;"),
	new Array("upgradeClicks1", "Click Upgrade", 100, upgradeMouse("upgradeClicks1", 1), false, false, "C150;UproperNameUpgrade;"),
	new Array("upgradeClicks2", "Basic Click Upgrade", 200, upgradeMouse("upgradeClicks2", 2), false, false, "C500;A1=automation-basic;UupgradeClicks1;"),
	new Array("upgradeClicks3", "Novice Click Upgrade", 600, upgradeMouse("upgradeClicks3", 4), false, false, "C1000;A1=automation-novice;UupgradeClicks2;"),
	new Array("upgradeClicks4", "Intermediate Click Upgrade", 1200, upgradeMouse("upgradeClicks4", 8), false, false, "C1500;A1=automation-intermediate;UupgradeClicks3;"),
	new Array("upgradeClicks5", "Advanced Click Upgrade", 2400, upgradeMouse("upgradeClicks5", 16), false, false, "C2000;A1=automation-advanced;UupgradeClicks4;"),
	new Array("upgradeClicks6", "Expert Click Upgrade", 4800, upgradeMouse("upgradeClicks6", 32), false, false, "C2500;A1=automation-expert;UupgradeClicks5;"),
	new Array("upgradeClicks7", "Homeless Clicker", 9000, upgradeClickCPS("upgradeClicks7", .02), false, false, "C3000,UupgradeClicks6;"),
	new Array("upgradeClicks8", "Poor Clicker", 18000, upgradeClickCPS("upgradeClicks8", .02), false, false, "C3500,UupgradeClicks7;"),
	new Array("upgradeClicks9", "Lower Class Clicker", 36000, upgradeClickCPS("upgradeClicks9", .02), false, false, "C4000,UupgradeClicks8;"),
	new Array("upgradeClicks10", "Middle Class Clicker", 72000, upgradeClickCPS("upgradeClicks10", .02), false, false, "C4500,UupgradeClicks9;"),
	new Array("upgradeClicks11", "Upper Class Clicker", 144000, upgradeClickCPS("upgradeClicks11", .02), false, false, "C4500,UupgradeClicks10;"),
	new Array("upgradeClicks12", "Rich Clicker", 288000, upgradeClickCPS("upgradeClicks12", .02), false, false, "C5000,UupgradeClicks11;"),
	new Array("upgradeClicks13", "Thirteen", 576000, upgradeClickCPS("upgradeClicks13", .02), false, false, "C5500,UupgradeClicks12;"),
	new Array("upgradeClicks14", "Tycoon Clicker", 1500000, upgradeClickCPS("upgradeClicks14", .06), false, false, "C6000,UupgradeClicks13;"),
	new Array("upgradeSaveUI", "Save Manager Display", 150, saveManagerUIUp, false, false, "UsaveManagerUI;"),
	new Array("automationUpgrades", "Automation Upgrades", 500, automationUpgrades, false, false, "A10=automation-basic;UunlockBasicAutomation;"),
	new Array("unlockBasicAutomation", "Basic Automation", 250, unlockAutomation("unlockBasicAutomation", "automation-basic"), false, false, "UautomationBox;"),
	new Array("unlockNoviceAutomation", "Novice Automation", 500, unlockAutomation("unlockNoviceAutomation", "automation-novice"), false, false, "A5=automation-basic;"),
	new Array("unlockIntermediateAutomation", "Intermediate Automation", 1000, unlockAutomation("unlockIntermediateAutomation", "automation-intermediate"), false, false, "A5=automation-novice;"),
	new Array("unlockAdvancedAutomation", "Advanced Automation", 2000, unlockAutomation("unlockAdvancedAutomation", "automation-advanced"), false, false, "A5=automation-intermediate;"),
	new Array("unlockExpertAutomation", "Expert Automation", 4000, unlockAutomation("unlockExpertAutomation", "automation-expert"), false, false, "A5=automation-advanced;"),
	new Array("basicAutomationU1", "Basic Basic Automation Upgrade", 125, upgradeAutomation("basicAutomationU1", "automation-basic", 0.5), false, false, "A10=automation-basic;UautomationUpgrades;"),
	new Array("basicAutomationU2", "Novice Basic Automation Upgrade", 500, upgradeAutomation("basicAutomationU2", "automation-basic", 1), false, false, "A1=automation-novice,20=automation-basic;UbasicAutomationU1;"),
	new Array("basicAutomationU3", "Intermediate Basic Automation Upgrade", 1500, upgradeAutomation("basicAutomationU3", "automation-basic", 2), false, false, "A1=automation-intermediate,30=automation-basic;UbasicAutomationU2;"),
	new Array("basicAutomationU4", "Advanced Basic Automation Upgrade", 4500, upgradeAutomation("basicAutomationU4", "automation-basic", 4), false, false, "A1=automation-advanced,40=automation-basic;UbasicAutomationU3;"),
	new Array("basicAutomationU5", "Expert Basic Automation Upgrade", 13500, upgradeAutomation("basicAutomationU5", "automation-basic", 8), false, false, "A1=automation-expert,50=automation-basic;UbasicAutomationU4;"),
	new Array("noviceAutomationU1", "Basic Novice Automation Upgrade", 250, upgradeAutomation("noviceAutomationU1", "automation-novice", 2.5), false, false, "A10=automation-novice;UautomationUpgrades;"),
	new Array("noviceAutomationU2", "Novice Novice Automation Upgrade", 1000, upgradeAutomation("noviceAutomationU2", "automation-novice", 5), false, false, "A20=automation-novice;UnoviceAutomationU1;"),
	new Array("noviceAutomationU3", "Intermediate Novice Automation Upgrade", 3000, upgradeAutomation("noviceAutomationU3", "automation-novice", 10), false, false, "A1=automation-intermediate,30=automation-novice;UnoviceAutomationU2;"),
	new Array("noviceAutomationU4", "Advanced Novice Automation Upgrade", 9000, upgradeAutomation("noviceAutomationU4", "automation-novice", 20), false, false, "A1=automation-advanced,40=automation-novice;UnoviceAutomationU3;"),
	new Array("noviceAutomationU5", "Expert Novice Automation Upgrade", 27000, upgradeAutomation("noviceAutomationU5", "automation-novice", 40), false, false, "A1=automation-expert,50=automation-novice;UnoviceAutomationU4;"),
	new Array("intermediateAutomationU1", "Basic Intermediate Automation Upgrade", 500, upgradeAutomation("intermediateAutomationU1", "automation-intermediate", 5), false, false, "A10=automation-intermediate;UautomationUpgrades;"),
	new Array("intermediateAutomationU2", "Novice Intermediate Automation Upgrade", 2000, upgradeAutomation("intermediateAutomationU2", "automation-intermediate", 10), false, false, "A1=automation-novice,20=automation-intermediate;UintermediateAutomationU1;"),
	new Array("intermediateAutomationU3", "Intermediate Intermediate Automation Upgrade", 6000, upgradeAutomation("intermediateAutomationU3", "automation-intermediate", 20), false, false, "A30=automation-intermediate;UintermediateAutomationU2;"),
	new Array("intermediateAutomationU4", "Advanced Intermediate Automation Upgrade", 18000, upgradeAutomation("intermediateAutomationU4", "automation-intermediate", 40), false, false, "A1=automation-advanced,40=automation-intermediate;UintermediateAutomationU3;"),
	new Array("intermediateAutomationU5", "Expert Intermediate Automation Upgrade", 54000, upgradeAutomation("intermediateAutomationU5", "automation-intermediate", 80), false, false, "A1=automation-expert,50=automation-intermediate;UintermediateAutomationU4;"),
	new Array("advancedAutomationU1", "Basic Advanced Automation Upgrade", 1000, upgradeAutomation("advancedAutomationU1", "automation-advanced", 12.5), false, false, "A10=automation-advanced;UautomationUpgrades;"),
	new Array("advancedAutomationU2", "Novice Advanced Automation Upgrade", 4000, upgradeAutomation("advancedAutomationU2", "automation-advanced", 25), false, false, "A1=automation-novice,20=automation-advanced;UadvancedAutomationU1;"),
	new Array("advancedAutomationU3", "Intermediate Advanced Automation Upgrade", 12000, upgradeAutomation("advancedAutomationU3", "automation-advanced", 50), false, false, "A1=automation-intermediate,30=automation-advanced;UadvancedAutomationU2;"),
	new Array("advancedAutomationU4", "Advanced Advanced Automation Upgrade", 36000, upgradeAutomation("advancedAutomationU4", "automation-advanced", 100), false, false, "A40=automation-advanced;UadvancedAutomationU3;"),
	new Array("advancedAutomationU5", "Expert Advanced Automation Upgrade", 108000, upgradeAutomation("advancedAutomationU5", "automation-advanced", 200), false, false, "A1=automation-expert,50=automation-advanced;UadvancedAutomationU4;"),
	new Array("expertAutomationU1", "Basic Expert Automation Upgrade", 2000, upgradeAutomation("expertAutomationU1", "automation-expert", 25), false, false, "A10=automation-expert;UautomationUpgrades;"),
	new Array("expertAutomationU2", "Novice Expert Automation Upgrade", 8000, upgradeAutomation("expertAutomationU2", "automation-expert", 50), false, false, "A1=automation-novice,20=automation-expert;UexpertAutomationU1;"),
	new Array("expertAutomationU3", "Intermediate Expert Automation Upgrade", 24000, upgradeAutomation("expertAutomationU3", "automation-expert", 100), false, false, "A1=automation-intermediate,30=automation-expert;UexpertAutomationU2;"),
	new Array("expertAutomationU4", "Advanced Expert Automation Upgrade", 72000, upgradeAutomation("expertAutomationU4", "automation-expert", 200), false, false, "A1=automation-advanced,40=automation-expert;UexpertAutomationU3;"),
	new Array("expertAutomationU5", "Expert Expert Automation Upgrade", 216000, upgradeAutomation("expertAutomationU5", "automation-expert", 400), false, false, "A50=automation-expert;UexpertAutomationU4;")
); // THIS FUCKING ARRAY HAS GOTTEN OUT OF HAND. I LOVE IT.
var addedBar = false; // THIS IS THAT VARIABLE FROM ./upgrades/upgradeHandler.js