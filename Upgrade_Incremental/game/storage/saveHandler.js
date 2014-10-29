function saveGame() {
	localStorage.setItem("save-exists", "true");
	localStorage.setItem("stat-money", money);
	localStorage.setItem("stat-clicks", clicks);
	localStorage.setItem("stat-clickMoney", totalClickMoney);
	localStorage.setItem("stat-totalMoney", totalMoney);
	localStorage.setItem("stat-auto", autoSaving ? "t" : "f");
	for (SUL = 0; SUL < upgradeID.length; SUL++) {
		localStorage.setItem("upgrade-" + upgradeID[SUL][0], upgradeID[SUL][5] ? "t" : "f");
	}
	for (SAL = 0; SAL < automations.length; SAL++) {
		localStorage.setItem("automation-" + automations[SAL][0], automations[SAL][5]);
	}
}
function convertSaveCookies() {
	if (!document.cookie == "" && !localStorage.getItem("save-exists")) { // Temp Function to convert save files
		var statCookie = document.cookie.split(";")[0].split("=")[1].split(",");
		// ITS FUCKING LONG
		localStorage.setItem("save-exists", "true");
		localStorage.setItem("stat-money", statCookie[0]);
		localStorage.setItem("stat-clicks", statCookie[1]);
		localStorage.setItem("stat-clickMoney", statCookie[2]);
		localStorage.setItem("stat-totalMoney", statCookie[3]);
		localStorage.setItem("stat-auto", statCookie[4]);
		
		var upgradeCookie = document.cookie.split(";")[1].split("=")[1].split(",");
		// LENGTH.jpg
		var previousUpgrades = new Array(getUpgradeID("semiNameUpgrade"), getUpgradeID("properNameUpgrade"), getUpgradeID("moneyDisplay"), 
								getUpgradeID("upgradeBox"), getUpgradeID("upgradeCostDisplay"), getUpgradeID("statsWindow"),
								getUpgradeID("upgradeStatsWindow"), getUpgradeID("statsUpgrade"), getUpgradeID("statsAutomations"), 
								getUpgradeID("tickerFixer"), getUpgradeID("tickerRealInfo"), getUpgradeID("automationBox"), 
								getUpgradeID("upgradeAutomationUI"), getUpgradeID("saveManagerUI"), getUpgradeID("upgradeClicks1"), 
								getUpgradeID("upgradeClicks2"), getUpgradeID("upgradeClicks3"), getUpgradeID("upgradeClicks4"), 
								getUpgradeID("upgradeClicks5"), getUpgradeID("upgradeClicks6"), getUpgradeID("upgradeClicks7"), 
								getUpgradeID("upgradeClicks8"), getUpgradeID("upgradeClicks9"),  getUpgradeID("upgradeClicks10"), 
								getUpgradeID("upgradeClicks11"), getUpgradeID("upgradeClicks12"), getUpgradeID("upgradeClicks13"), 
								getUpgradeID("upgradeClicks14"), getUpgradeID("upgradeSaveUI"), getUpgradeID("automationUpgrades"), 
								getUpgradeID("unlockBasicAutomation"), getUpgradeID("unlockNoviceAutomation"), getUpgradeID("unlockIntermediateAutomation"), 
								getUpgradeID("unlockAdvancedAutomation"), getUpgradeID("unlockExpertAutomation"), getUpgradeID("basicAutomationU1"), 
								getUpgradeID("basicAutomationU2"), getUpgradeID("basicAutomationU3"), getUpgradeID("basicAutomationU4"), 
								getUpgradeID("basicAutomationU5"), getUpgradeID("noviceAutomationU1"), getUpgradeID("noviceAutomationU2"), 
								getUpgradeID("noviceAutomationU3"), getUpgradeID("noviceAutomationU4"), getUpgradeID("noviceAutomationU5"), 
								getUpgradeID("intermediateAutomationU1"), getUpgradeID("intermediateAutomationU2"), getUpgradeID("intermediateAutomationU3"), 
								getUpgradeID("intermediateAutomationU4"), getUpgradeID("intermediateAutomationU5"), getUpgradeID("advancedAutomationU1"), 
								getUpgradeID("advancedAutomationU2"), getUpgradeID("advancedAutomationU3"), getUpgradeID("advancedAutomationU4"), 
								getUpgradeID("advancedAutomationU5"), getUpgradeID("expertAutomationU1"), getUpgradeID("expertAutomationU2"), 
								getUpgradeID("expertAutomationU3"), getUpgradeID("expertAutomationU4"), getUpgradeID("expertAutomationU5")
		);
		for (CUCL = 0; CUCL < previousUpgrades.length; CUCL++) {
			localStorage.setItem("upgrade-" + upgradeID[previousUpgrades[CUCL]][0], upgradeCookie[CUCL]);
		}
		
		var automationCookie = document.cookie.split(";")[2].split("=")[1].split(",");
		
		var previousAutomations = new Array(getAutomationID("automation-basic"), getAutomationID("automation-novice"),
									getAutomationID("automation-intermediate"), getAutomationID("automation-advanced"),
									getAutomationID("automation-expert"));
									
		for (CACL = 0; CACL < previousAutomations.length; CACL++) { // KEK KEK KEK
			localStorage.setItem("automation-" + automations[previousAutomations[CACL]][0], automationCookie[CACL]);
		}
	}
}
function loadGame() {
	if (localStorage.getItem("save-exists")) {
		// load stats
		loadingGAME = true;
		money = parseFloat(localStorage.getItem("stat-money"));
		clicks = parseInt(localStorage.getItem("stat-clicks"));
		totalClickMoney = parseFloat(localStorage.getItem("stat-clickMoney"));
		totalMoney = parseFloat(localStorage.getItem("stat-totalMoney"));
		loadMainScreen(); // ./ui/uiHandler.js
		if (localStorage.getItem("stat-auto") == "t") {
			autoSaving = true;
		} else {
			autoSaving = false;
		}
		// load upgrades
		checkUpgrades();
		for (LUL = 0; LUL < upgradeID.length; LUL++) {
			if (localStorage.getItem("upgrade-" + upgradeID[LUL][0]) == "t") {
				loadingGAME = true;
				upgradeID[LUL][3]();
				upgradeID[LUL][4] = true;
				upgradeID[LUL][5] = true;
			}
		}
		// load automations
		for (LAL = 0; LAL < automations.length; LAL++) {
			if (localStorage.getItem("automation-" + automations[LAL][0])) {
				for (BAL = 0; BAL < parseInt(localStorage.getItem("automation-" + automations[LAL][0])); BAL++) {
					loadingGAME = true;
					enoughMoneyAUTO(automations[LAL][0]);
				}
			}
		}
		$("#upgrade-list")[0].innerHTML = "";
		return true;
	}
	return false;
}
function deleteSavedGame() {
	localStorage.removeItem("save-exists");
	location.reload();
}
function restoreDeletedSave() {
	localStorage.setItem("save-exists", "true");
	location.reload();
}