var highestRecordedValue = 0;
var stocks = new Array(
	//[0]ID, [1]Cost, [2]Change, [3]Total Stocks, [4]Stocks Bought, [5]Crashed
);
$(document).ready(run);
$(window).onscroll(function() {
	if (window.scrollY > 60) {
		$("#market-stats").style.top = "10px";
	} else if (window.scrollY == 0) {
		$("#market-stats").style.top = "60px";
	} else {
		$("#market-stats").style.top = window.scrollY / 60 + "px";
	}
});

function run() {
	log("On.");
	
	UICreation();
	StartingStocks();
	startTick();
}
function UICreation() {
	var marketHeader = create("h1");
	var marketStats = create("div");
	var statTitle = create("h4");
	var marketName = generateName(5, 10) + "'S STOCK MARKET";
	marketHeader.id = "market-title";
	marketStats.id = "market-stats";
	statTitle.id = "stat-title";
	
	log(marketName);
	marketHeader.innerHTML = marketName;
	statTitle.innerHTML = marketName;
	
	var stocksCrashed = create("p");
	var stocksActive = create("p");
	var totalCompanies = create("p");
	var avgPrice = create("p");
	var totalFreeStocks = create("p");
	var totalStocksOwned = create("p");
	var totalStocks = create("p");
	var stockMarketValue = create("p");
	var stockHigh = create("p");
	
	stocksCrashed.id = "stocks-crashed";
	stocksActive.id = "stocks-active";
	totalCompanies.id = "total-companies";
	avgPrice.id = "average-price";
	totalFreeStocks.id = "total-free-stocks";
	totalStocksOwned.id = "total-stocks-owned";
	totalStocks.id = "total-stocks";
	stockMarketValue.id = "stock-market-value";
	stockHigh.id = "stock-high";
	
	var market = create("div");
	market.id = "market";
	
	marketStats.appendChild(statTitle);
	marketStats.appendChild(stocksCrashed);
	marketStats.appendChild(stocksActive);
	marketStats.appendChild(totalCompanies);
	marketStats.appendChild(avgPrice);
	marketStats.appendChild(totalFreeStocks);
	marketStats.appendChild(totalStocksOwned);
	marketStats.appendChild(totalStocks);
	marketStats.appendChild(stockMarketValue);
	marketStats.appendChild(stockHigh);
	append(marketHeader);
	append(marketStats);
	append(market);
}

function StartingStocks() {
	var num = Math.round(Math.random() * 30 + 20);
	for (var i = 0; i < num; i++) {
		addStock(true);
	}
}

function startTick() {
	var updates = false;
	for (var i = 0; i < stocks.length; i++) {
		if (!stocks[i][5]) {
			stocks[i][2] = parseFloat((Math.random() * 100) < (50 - (stocks[i][4] / 10000)) ? '-' + Math.random() * 10 + 0.05 : Math.random() * 2 + 4).toFixed(2);
			stocks[i][1] += parseFloat(stocks[i][2]);
			if (stocks[i][1] < 0.05) 
				stocks[i][5] = true;
			
			$("#" + stocks[i][0])[0].className = "stock " + (parseFloat(stocks[i][2])>0 ? "increase" : "decrease");
			stocks[i][4] += parseInt((Math.random() * 100) < 50 ? Math.random() * (stocks[i][3] - stocks[i][4]) + 1 : '-' + (Math.random() * stocks[i][3]));
			if (stocks[i][4] > stocks[i][3]) stocks[i][4] = stocks[i][3];
			if (stocks[i][4] < 0) stocks[i][4] = 0;
			if (stocks[i][1] > 500 && (Math.random() * 100 < 25)) {
				stocks[i][1] *= 0.5;
				stocks[i][3] *= 2;
				stocks[i][4] *= 2;
				$("#" + stocks[i][0])[0].className = "stock split";
			}
			if (!stocks[i][5]) {
				var stockInfo = $("#" + stocks[i][0])[0].childNodes;
				stockInfo[1].innerHTML = "$" + parseFloat(stocks[i][1]).toFixed(2) + ((stocks[i][2] < 0) ? " v " : " ^ ") + parseFloat(stocks[i][2]).toFixed(2);
				stockInfo[2].innerHTML = stocks[i][3] - stocks[i][4];
				stockInfo[3].innerHTML = stocks[i][3];
				updates = true;
			} else 
				$("#" + stocks[i][0])[0].remove();
		}
	}
	if (updates)
		for (var i = 0; i < Math.random() * 10; i++)
			Math.random() * 100 < 90 ? i=i : addStock(false);
	updateStats();
	if (updates)
		setTimeout(startTick, 1);
	else 
		crash();
}
function crash() {
	var announcement = create("h2");
	$("#market")[0].innerHTML = "";
	announcement.innerHTML = "Market Crashed"
	$("#market")[0].appendChild(announcement);
}
function updateStats() {
	var counter = 0;
	for (var i = 0; i < stocks.length; i++) if (stocks[i][5]) counter++;
	$("#stocks-crashed")[0].innerHTML = "Stocks Crashed: " + counter;
	$("#stocks-active")[0].innerHTML = "Stocks Active: " + (stocks.length - counter);
	$("#total-companies")[0].innerHTML = "Total Companies: " + stocks.length;
	var price = 0;
	for(var i = 0; i < stocks.length; i++) if(!stocks[i][5]) price += parseFloat(stocks[i][1]);
	$("#average-price")[0].innerHTML = "Average Stock Price: $" + (price / (stocks.length - counter)).toFixed(2);
	var stocksOwned = 0;
	for (var i = 0; i < stocks.length; i++) if (!stocks[i][5]) stocksOwned += stocks[i][4];
	$("#total-stocks-owned")[0].innerHTML = "Total Owned Stocks: " + stocksOwned.toLocaleString();
	var stockTotal = 0;
	for (var i = 0; i < stocks.length; i++) if (!stocks[i][5]) stockTotal += stocks[i][3];
	$("#total-stocks")[0].innerHTML = "Total Stocks: " + stockTotal.toLocaleString();
	$("#total-free-stocks")[0].innerHTML = "Total Free Stocks: " + (stockTotal - stocksOwned).toLocaleString();
	var stockValue = 0;
	for (var i = 0; i < stocks.length; i++) if (!stocks[i][5]) stockValue += stocks[i][3] * stocks[i][1];
	$("#stock-market-value")[0].innerHTML = "Total Market Value: $" + stockValue.toLocaleString().substring(0, stockValue.toLocaleString().indexOf("."));
	if (stockValue > highestRecordedValue)
		highestRecordedValue = stockValue;
	$("#stock-high")[0].innerHTML = "Highest Market Value: $" + highestRecordedValue.toLocaleString().substring(0, stockValue.toLocaleString().indexOf("."));
}

function addStock(starting) {
	var nameLength = Math.round(Math.random() * 3 + 2);
	var stockName = generateName(3, 5);
	var price = (starting ? (Math.random() * 95 + 0.20) : (Math.random() * 3 + 0.20)).toFixed(2);
	var total = Math.round(starting ? (Math.random() * 400 + 50) : (Math.random() * 100 + 25));
	var bought = Math.round(starting ? (Math.random() * total) : 0);
	stocks[getStockID(stockName) >= 0 ? stocks[getStockID(stockName)][5] ? getStockID(stockName) : -1 : stocks.length] = new Array(stockName, parseFloat(price), 0.00, total, bought, false);
	
	var exists = false;
	if (stocks[-1] != undefined)
		if (stocks[-1][0] == stockName) {
			exists = true;
			stocks[-1] = undefined;
		}
	
	if (!exists) {
		var stock = create("div");
		var nameE = create("h3");
		var priceE = create("p");
		var stocksFree = create("p");
		var stocksTotal = create("p");
		var follow = create("p");
		
		stock.id = stockName; stock.className = "stock";
		nameE.id = stockName; nameE.className = "name";
		priceE.id = stockName; priceE.className = "price";
		stocksFree.id = stockName; stocksFree.className = "free";
		stocksTotal.id = stockName; stocksTotal.className = "total";
		follow.id = stockName; follow.className = "follow";
		follow.alt = "Follow Stock";
		
		nameE.innerHTML = stockName;
		priceE.innerHTML = "$" + price + " - 0.00";
		stocksFree.innerHTML = total - bought;
		stocksTotal.innerHTML = total;
		
		stock.appendChild(nameE);
		stock.appendChild(priceE);
		stock.appendChild(stocksFree);
		stock.appendChild(stocksTotal);
		stock.appendChild(follow);
		$("#market")[0].appendChild(stock);
	}
}

function getStockID(name) {
	for (var i = 0; i < stocks.length; i++)
		if (stocks[i][0] == name)
			return i;
	return -1;
}

function generateName(lower, upper) {
	var nameLength = Math.round(Math.random() * (upper - lower) + lower);
	var marketName = "";
	for (var i = 0; i < nameLength; i++) {
		switch(Math.round(Math.random() * 26)) {
			case 0: marketName += "A"; break;
			case 1: marketName += "B"; break;
			case 2: marketName += "C"; break;
			case 3: marketName += "D"; break;
			case 4: marketName += "E"; break;
			case 5: marketName += "F"; break;
			case 6: marketName += "G"; break;
			case 7: marketName += "H"; break;
			case 8: marketName += "I"; break;
			case 9: marketName += "J"; break;
			case 10: marketName += "K"; break;
			case 11: marketName += "L"; break;
			case 12: marketName += "M"; break;
			case 13: marketName += "N"; break;
			case 14: marketName += "O"; break;
			case 15: marketName += "P"; break;
			case 16: marketName += "Q"; break;
			case 17: marketName += "R"; break;
			case 18: marketName += "S"; break;
			case 19: marketName += "T"; break;
			case 20: marketName += "U"; break;
			case 21: marketName += "V"; break;
			case 22: marketName += "W"; break;
			case 23: marketName += "X"; break;
			case 24: marketName += "Y"; break;
			case 25: marketName += "Z"; break;
		}
	}
	return marketName;
}

function log(message) {
	console.log(message);
}
function append(object) {
	document.body.appendChild(object);
}
function create(type) {
	return document.createElement(type);
}