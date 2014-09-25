var automations = new Array(
			// [0]Identifier, [1]Name, [2]Cost, [3]Cost Multipler, [4]Income, [5]Count
	new Array("automation-basic", "Basic Automation", 1.0, 1.443, 1, 0) // BUY IT, USE IT, BREAK IT, F- Okay I'll stop... For now
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
	if (money >= Math.ceil(details[2])) { // Does the player have enough money
		money -= Math.ceil(details[2]); // Subtract the current cost
		automations[numeral][2] *= details[3]; // increase the cost
		automations[numeral][5]++; // Add a number to the counter
		updateCounter(); // TO AVOID CONFUSION
		return true; // YES, I BOUGHT THAT AUTOMATION
	} /* DO EET FAGGOT, I DWARE YOU */
	return false; // NOT ENOUGH MONEY? NO ROBOTS FOR YOU
} // LITERALLY, FUCK OFF. I'M BUSY
function buyAutomation(ID) { // THIS IS WHAT HAPPENS WHEN YOU BUY ONE
	return function buyID() { // HEY LOOK ITS THAT ANONYMOUS FUNCTION I WAS TALKING ABOUT EARLIER
		var aInfo = getAutomationDetails(ID); // THIS THING
		if (enoughMoneyAUTO(aInfo[0])) { // IS FABULOUS
			$("#" + aInfo[0] + " .auto-name")[0].innerHTML = aInfo[1] + " (+" + aInfo[4] + ")"; // I DONT EVEN THINK
			$("#" + aInfo[0] + " .auto-counter")[0].innerHTML = aInfo[5] + " owned"; // YOU UNDERSTAND HOW HELPFUL THIS IS
			$("#" + aInfo[0] + " .auto-cost")[0].innerHTML = Math.ceil(aInfo[2]); // BECAUSE... BECAUSE- BECAU- -passes out-
			$("#" + aInfo[0] + " .auto-income")[0].innerHTML = (aInfo[4] * aInfo[5]) + "/s"; // sets appropriate information
		} /* MAKE ME */
	}; // Goddammit, SOMEONE HELP ME.
} /* I'll help you */
function updateAutomationIncome(ID) { // updates the automation display with correct information
	var aInfo = getAutomationDetails(ID); // I hate you so much
	$("#" + aInfo[0] + " .auto-name")[0].innerHTML = aInfo[1] + " (+" + aInfo[4] + ")"; /* THATS WHAT I WAS MEANT TO DO */
	$("#" + aInfo[0] + " .auto-counter")[0].innerHTML = aInfo[5] + " owned"; // ...
	$("#" + aInfo[0] + " .auto-cost")[0].innerHTML = Math.ceil(aInfo[2]); /* AHAHAHA, WHAT'S WRONG? */
	$("#" + aInfo[0] + " .auto-income")[0].innerHTML = (aInfo[4] * aInfo[5]) + "/s"; // sets appropriate information
}// -shoots-