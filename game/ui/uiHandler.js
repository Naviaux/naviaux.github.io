function loadMainScreen() { // Loads the main UI
	var header = document.createElement("div");
	var title = document.createElement("h3");
	var news = document.createElement("p");
	var clicker = document.createElement("input");
	var counter = document.createElement("p"); // creates the elements required
	
	header.id = "header";
	title.id = "htitle";
	news.id = "news-ticker";
	clicker.id = "clicker";
	counter.id = "counter"; // sets the identifiers for above elements
	
	clicker.type = "button";
	clicker.value = "INPUT";
	clicker.onclick = clickerPress; // ./money/moneyHandler.js
	
	title.innerHTML = "H3";
	news.innerHTML = "P";
	counter.innerHTML = "P"; // Set all the info to none human readable formats
	// BECAUSE FUCK HUMANS, RIGHT?
	header.appendChild(title);
	header.appendChild(news);
	header.appendChild(clicker);
	header.appendChild(counter);
	document.body.appendChild(header); // add the things to their appropriate parent
	fixUpgradeRequirements(); // Make the requirements machine readable
} // BECAUSE FUCK HUMANS, RIGHT?
function fixUpgradeRequirements() { // Make it so it works in the checkRequirement function in ./upgrades/upgradeHandler.js
	for (FURL = 0; FURL < upgradeID.length; FURL++) { // loops through upgrade list
		var HALPME = new Array(); // BECAUSE I FUCKING HATE REGEX
		if (HALPME = upgradeID[FURL][6].match("U([a-zA-Z0-9]*,?)+;")) { // checks if there is an upgrade requirement
			var matching = upgradeID[FURL][6].match("U([a-zA-Z0-9]*,?)+;")[0]; // I FUCKING. HATE. REGEX. OFC U([\w]*,?)+; DOESN'T WORK. WHY WOULD IT
			var upgradeReqList = matching.replace("U","").replace(";","").split(","); // Hurray for chain commands!
			var newReq = "U"; // Used to recreate the requirement with numbers
			for (URLL = 0; URLL < upgradeReqList.length; URLL++) { // ITS NOT JUST URLS NOW. ITS URLL... Shut up, it would've been funnier with two Rs...
				newReq += getUpgradeID(upgradeReqList[URLL]); // Adds the upgrade ID as a numeral
				if (URLL < upgradeReqList.length - 1)
					newReq += ","; // adds a comma if it isn't the end of the loop
				else newReq += ";"; // otherwise add a semicolon
			}
			upgradeID[FURL][6] = upgradeID[FURL][6].replace(matching, newReq); // replaces strings with numbers basically
		}
		if (HALPME = upgradeID[FURL][6].match("A[0-9]+=[a-zA-Z0-9\-]+;")) { // checks if there is an automation requirement
			var matching = upgradeID[FURL][6].match("A[0-9]+=[a-zA-Z0-9\-]+;")[0]; // DID I MENTION I HATE REGEX? A[\d]+=[\w\-]+;
			var automationReqList = matching.replace("A","").replace(";","").split(","); // MORE CHAINING
			var newReq = "A"; // More requirement recreation, this time with automations
			for (ARLL = 0; ARLL < automationReqList.length; ARLL++) {
				newReq += automationReqList[ARLL].split("=")[0] + "=" + getAutomationID(automationReqList[ARLL].split("=")[1]); // A RATHER LONG SET STATEMENT IF I DO SAY SO MYSELF
				if (ARLL < automationReqList.length - 1)
					newReq += ","; // Same function as the URLL loop
				else newReq += ";";
			}
			upgradeID[FURL][6] = upgradeID[FURL][6].replace(matching, newReq); // THAT WAS THE ENTIRE POINT OF THIS CODE.
		} // I HATE IT.
	} // DID I MENTION THAT I HATE IT?
} // As you can see, my relationship with Javascript is very love/hate... Mostly hate... FUCK REGEX.