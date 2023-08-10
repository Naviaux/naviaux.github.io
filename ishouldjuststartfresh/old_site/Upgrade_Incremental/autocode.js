function makeCode(automation, price, income) { 
  var proper = automation.toUpperCase().substring(0,1) + automation.substring(1);
  var names = new Array("Basic", "Novice", "Intermediate", "Advanced", "Expert");
  var upgrade = new Array(price / 2, price / 2 * 4, price / 2 * 12, price / 2 * 36, price / 2 * 108);
  var incomes = new Array(income / 2, income, income * 2, income * 4, income * 8);
  console.log("new Array(\"unlock" + proper + "Automation\", \"" + proper + " Automation\", " + price + ", unlockAutomation(\"unlock" + proper + "Automation\", \"automation-" + automation + "\"), false, false, \"\", \"Base Income: " + income + ". Base Cost: " + price + ". Cost Multiplier: ??\"),");
  for (var i = 1; i <= names.length; i++) {
    console.log("new Array(\"" + automation + "AutomationU" + i + "\", \"" + names[i - 1] + " " + proper + " Automation Upgrade\", " + upgrade[i - 1] + ", upgradeAutomation(\"" + automation + "AutomationU" + i + "\", \"automation-" + automation + "\", " + incomes[i-1] + "), false, false, \"A" + i + "0=automation-" + automation + ";" + (i==1 ? "" : "U" + automation + "AutomationU" + (i - 1) + ";") + "\", \"Increases " + automation + " Automation income by " + incomes[i-1] + "/s\")," );
  }
  console.log("new Array(\"upgradeMPCU##\", \"" + proper + " MCP\", $$, upgradeClickMPC(\"upgradeMPCU##\", M.M), false, false, \"U" + automation + "AutomationU" + names.length + ";\"),");
}