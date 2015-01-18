function addMenu(currentPage) {
	var headDiv = document.createElement("div");
	var menuDiv = document.createElement("div");
	
	var mainTitle = document.createElement("h1");
	var subTitle = document.createElement("h2");
	
	var menuList = document.createElement("ul");
	var homeItem = document.createElement("li");
	var homeLink = document.createElement("a");
	var gamesItem = document.createElement("li");
	var gamesLink = document.createElement("a");
	var programsItem = document.createElement("li");
	var programsLink = document.createElement("a");
	
	headDiv.id = "head";
	menuDiv.id = "menu";
	
	mainTitle.innerHTML = "Naviaux's Github";
	subTitle.innerHTML = currentPage + " Page";
	
	homeLink.href = "index.html";
	homeLink.innerHTML = "Home";
	homeItem.appendChild(homeLink);
	
	gamesLink.href = "games.html";
	gamesLink.innerHTML = "Web Projects";
	gamesItem.appendChild(gamesLink);
	
	programsLink.href = "programs.html";
	programsLink.innerHTML = "Programs";
	programsItem.appendChild(programsLink);
	
	headDiv.appendChild(mainTitle);
	headDiv.appendChild(subTitle);
	
	menuList.appendChild(homeItem);
	menuList.appendChild(gamesItem);
	menuList.appendChild(programsItem);
	menuDiv.appendChild(menuList);
	
	document.body.appendChild(headDiv);
	document.body.appendChild(menuDiv);
}
