var automations = new Array(
			// [0]Identifier, [1]Name, [2]Cost, [3]Cost Multipler, [4]Income, [5]Count
	new Array("automation-basic", "Basic Automation", 10, 1.3, 1, 0), // BUY IT, USE IT, BREAK IT, F- Okay I'll stop... For now
	new Array("automation-novice", "Novice Automation", 25, 1.3, 5, 0),
	new Array("automation-intermediate", "Intermediate Automation", 50, 1.3, 10, 0),
	new Array("automation-advanced", "Advanced Automation", 100, 1.3, 25, 0),
	new Array("automation-expert", "Expert Automation", 200, 1.3, 50, 0),
	new Array("automation-hostile", "Hostile Automation", 500, 1.2, 200, 0),
	new Array("automation-angered", "Angered Automation", 800, 1.2, 400, 0),
	new Array("automation-wary", "Wary Automation", 1100, 1.2, 600, 0),
	new Array("automation-neutral", "Neutral Automation", 1500, 1.15, 300, 0),
	new Array("automation-friendly", "Friendly Automation", 1800, 1.2, 800, 0),
	new Array("automation-respected", "Respected Automation", 2100, 1.2, 1000, 0),
	new Array("automation-honoured", "Honoured Automation", 2300, 1.2, 1500, 0)
);
function getAutomationID(ID) {
	for (GAIDL = 0; GAIDL < automations.length; GAIDL++) { // loops through automations
		if (automations[GAIDL][0] == ID) { // checks to see if the id at GAIDL matches the input
			return GAIDL; // returns GAIDL if true
		} /* Gay download? What. */
	} /* WHAT WERE YOU THINKING. */
	return -1; // otherwise it doesn't exist
} // Get Automation ID Loop?
function getAutomationDetails(ID) { // Gets the details of an automation
	for (GADL = 0; GADL < automations.length; GADL++) { // loops through automations
		if (automations[GADL][0] == ID) { // checks to see if the id given matches any existing automation id
			return automations[GADL]; // returns the array for that automation
		} /* Oh... Right >_> */
	} // Please, fuck off. I'm -trying- to comment without some ASSHOLE bugging me about it
	return -1; // Doesn't exist
} /* NOOOOOOPE, FUCK YOU */
function enoughMoneyAUTO(ID) { // Oh for FUCKSAKES
	var numeral = getAutomationID(ID); /* NYAHAHAHAHAHA */
	var details = getAutomationDetails(ID); // I swear, I will murder you.
	if (loadingGAME || money >= Math.ceil(details[2])) { // Does the player have enough money
		if (!loadingGAME)
			money -= Math.ceil(details[2]); // Subtract the current cost
		automations[numeral][2]++;
		automations[numeral][2] *= details[3]; // increase the cost
		automations[numeral][5]++; // Add a number to the counter
		if (!loadingGAME)
			updateCounter(); // TO AVOID CONFUSION
		return true; // YES, I BOUGHT THAT AUTOMATION
	} /* DO EET FAGGOT, I DWARE YOU */
	return false; // NOT ENOUGH MONEY? NO ROBOTS FOR YOU
} // LITERALLY, FUCK OFF. I'M BUSY
function buyAutomation(ID) { // THIS IS WHAT HAPPENS WHEN YOU BUY ONE
	return function buyID() { // HEY LOOK ITS THAT ANONYMOUS FUNCTION I WAS TALKING ABOUT EARLIER
		var aInfo = getAutomationDetails(ID); // THIS THING
		if (enoughMoneyAUTO(aInfo[0])) { // IS FABULOUS
			$("#" + aInfo[0] + " .auto-name")[0].innerHTML = aInfo[1] + " (+" + convertNumber(aInfo[4]) + ")"; // I DONT EVEN THINK
			$("#" + aInfo[0] + " .auto-counter")[0].innerHTML = aInfo[5] + " owned"; // YOU UNDERSTAND HOW HELPFUL THIS IS
			$("#" + aInfo[0] + " .auto-cost")[0].innerHTML = convertNumber(aInfo[2]); // BECAUSE... BECAUSE- BECAU- -passes out-
			$("#" + aInfo[0] + " .auto-income")[0].innerHTML = convertNumber((aInfo[4] * aInfo[5])) + "/s"; // sets appropriate information
		} /* MAKE ME */
	}; // Goddammit, SOMEONE HELP ME.
} /* I'll help you */
function updateAutomationIncome(ID) { // updates the automation display with correct information
	var aInfo = getAutomationDetails(ID); // I hate you so much
	$("#" + aInfo[0] + " .auto-name")[0].innerHTML = aInfo[1] + " (+" + convertNumber(aInfo[4]) + ")"; /* THATS WHAT I WAS MEANT TO DO */
	$("#" + aInfo[0] + " .auto-counter")[0].innerHTML = aInfo[5] + " owned"; // ...
	$("#" + aInfo[0] + " .auto-cost")[0].innerHTML = convertNumber(aInfo[2]); /* AHAHAHA, WHAT'S WRONG? */
	$("#" + aInfo[0] + " .auto-income")[0].innerHTML = convertNumber((aInfo[4] * aInfo[5])) + "/s"; // sets appropriate information
}// -shoots-
function getTotalAutomationIncome() {
	var totalIncome = 0;
	for (TAIL = 0; TAIL < automations.length; TAIL++)
		if (automations[TAIL][5] > 0)
			totalIncome += (automations[TAIL][4] * automations[TAIL][5]);
	return totalIncome;
}