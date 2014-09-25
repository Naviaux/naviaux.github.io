function checkUpgrades() {
	if (clicks >= 5) {
		if (!addedBar) {
			addUpgradeBar(); // adds upgrade list
			addedBar = true; // makes sure it doesn't happen again
		}
		for (CUL = 0; CUL < upgradeID.length; CUL++) { // loops through upgrades
			if (!upgradeID[CUL][4] && !upgradeID[CUL][5] && checkRequirements(upgradeID[CUL][6])) { // not added, not bought, meets requirements
				addUpgrade(CUL); // adds upgrades according to the upgradeID listing < MIGHT CHANGE; IT FUCKS WITH UPDATING
			}
		}
	}
}

function checkRequirements(requires) {
	var meetsReqs = true;
	var matches = new Array();
	if (matches = requires.match("C([0-9]+);")) { // Total Clicks
		if (clicks >= matches[1]) { // checks clicks
			meetsReqs = true;
		} else { meetsReqs = false; }
	}
	if (meetsReqs == true && (matches = requires.match("M([0-9]+);"))) { // Current Money
		if (money >= matches[1]) { // checks current money
			meetsReqs = true;
		}  else { meetsReqs = false; }
	}
	if (meetsReqs == true && (matches = requires.match("U([0-9+,*]+);"))) { // Upgrades Bought
		var splitter = matches[1].split(","); // weird shit
		for (CURL = 0; CURL < splitter.length; CURL++) { // Yes... LET THE CANADIAN JOKES RAIN. RAIN FROM THE FUCKING SKY.
			if (upgradeID[splitter[CURL]][5] == true) {
				meetsReqs = true;
			} else { meetsReqs = false; break; }
		}
	}
	if (meetsReqs == true && (matches = requires.match("A([0-9]+=[0-9\-]+,?)+;"))) { // Automations Bought
		var splitter = matches[0].replace("A", "").replace(";","").split(",");
		for (CARL = 0; CARL < splitter.length; CARL++) { // CAAAAAAAAAAAAAAAAARRRRRRRRRRRRRRRRRRRRRLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
			if (automations[splitter[CARL].split("=")[1]][5] >= splitter[CARL].split("=")[0]) { // Dear lord this is one hell of an if statement
				meetsReqs = true;
			} else { meetsReqs = false; break; }
		}
	}
	return meetsReqs;
} // Fuck off, I know it's coral... But I'm never going to get a loop name that long... CAAAAAAAAAAAAAAAAARRRRRRRRRRRRRRRRRRRRRLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

function addUpgradeBar() { // explains itself
	var container = document.createElement("div");
	var title = document.createElement("h4");
	var ulist = document.createElement("ul");
	// OR DOES IT
	container.id = "upgrade-container";
	title.id = "utitle";
	ulist.id = "upgrade-list";
	// DOES IT EXPLAIN ITSELF
	title.innerHTML = "H4:";
	// I THINK SO
	container.appendChild(title);
	container.appendChild(ulist);
	document.body.appendChild(container);
} // KINDA OBVIOUS, ISN'T IT?

function addUpgrade(upgradeNumber) {
	if (!upgradeID[upgradeNumber][4]) { // not added
		var uList = document.getElementById("upgrade-list");
		uList.innerHTML = ""; // clear upgrade list
		for (AUL = 0; AUL < upgradeID.length; AUL++) { // loop through upgrades
			if ((upgradeID[AUL][4] && !upgradeID[AUL][5]) || AUL == upgradeNumber) { // checks if added, not bought | upgrade to be added
				var upgrade = document.createElement("li");
				var name = document.createElement("p");
				var cost = document.createElement("p"); // create elements
				
				upgrade.id = upgradeID[AUL][0];
				name.className = "name";
				cost.className = "cost"; // sets appropriate identifiers
				
				name.innerHTML = upgradeID[AUL][1];
				cost.innerHTML = upgradeID[AUL][2]; // sets information
				
				upgrade.appendChild(name); // adds name
				if (isUpgradeBought("upgradeCostDisplay")) // if costDisplay is bought
					upgrade.appendChild(cost); // display cost
				upgrade.onclick = upgradeID[AUL][3]; // set on click to function
				
				uList.appendChild(upgrade); // add upgrade to list
				upgradeID[AUL][4] = true; // set added to true
			}
		}
	}
	checkUpgrades(); // THEN DOES IT ALL AGAIN. CAUSE THIS PROGRAM IS WEIRD.
}
function updateUpgradeNames() {
	for (UUNL = 0; UUNL < upgradeID.length; UUNL++) { // loops through upgrades
		if (upgradeID[UUNL][4] && !upgradeID[UUNL][5]) { // if upgrade added and not bought
			$("#" + upgradeID[UUNL][0] + " .name")[0].innerHTML = upgradeID[UUNL][1]; // update it's listing
		}
	}
}