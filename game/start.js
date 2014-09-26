if (!loadGame()) // checks if there is a saved game
	begin(); // starts the game from scratch
else
	buyLoading(true); // start the game


function begin() { // weird chat ai thing
	var sprite = document.createElement("img");
	var specialAward = document.createElement("div");
	var specialAwardText = document.createElement("p");
	var arrow = document.createElement("input"); // elements that create the chat

	sprite.id = "sprite";
	arrow.id = "talking";
	specialAward.id = "special-reward";
	specialAwardText.id = "sr-text"; // identifiers

	var currentAnimationFrame = 1; // FRAME 1
	sprite.src = images + "sprites/chat/chat_00" + currentAnimationFrame + ".png"; // load frame
	specialAwardText.innerHTML = "+10000 Added"; // lolwut, why so much

	arrow.type = "button"; // This.
	arrow.onclick = animate; // AT LEAST JAVASCRIPT EXPLAINS ITSELF... sometimes...

	specialAward.appendChild(specialAwardText);
	document.body.appendChild(sprite);
	document.body.appendChild(arrow); // adds elements to the screen

	function animate() { // moves to the next frame
		if (currentAnimationFrame < 6) { // makes sure it doesn't unload the sprite
			sprite.src = images + "sprites/chat/chat_00" + ++currentAnimationFrame + ".png";
			if (currentAnimationFrame == 5) { // if the current frame is 5
				document.body.appendChild(specialAward) // fakeawards.jpg
			}
			if (currentAnimationFrame == 6) { // if frame is 6
				$("#special-reward").remove(); // NOO... meh
				$("talking").remove(); // remove the arrow to change frames
				var startButton = document.createElement("input");
				startButton.id = "start-button";
				startButton.type = "button";
				startButton.value = "Buy Game";
				startButton.onclick = buyLoading; // creates a button and sets stuff for it
				document.body.appendChild(startButton); // add it to the body
			}
		}
	}
}

function buyLoading(alreadyPlaying) { // 'start' the game
	loadingGAME = alreadyPlaying; // THIS WAS FUCKING STUPID
	clearScreen(); // clear the screen of everything
	var loading = document.createElement("div");
	var loadingLabel = document.createElement("p");
	var loadingContainerBar = document.createElement("div");
	var loadingBar = document.createElement("div");
	var loadingText = document.createElement("div"); // creates the progress bar stuff

	loading.id = "loader";
	loadingLabel.id = "label";
	loadingContainerBar.id = "progressContainer";
	loadingBar.id = "progress";
	loadingText.id = "progressLabel"; // set their id

	loadingLabel.innerHTML = "-Initializing Main Start Up Protocols-";
	loadingText.innerHTML = "0"; // set html

	loadingContainerBar.appendChild(loadingBar);
	loadingContainerBar.appendChild(loadingText);
	loading.appendChild(loadingLabel);
	loading.appendChild(loadingContainerBar);
	document.body.appendChild(loading); // add stuff to their appropriate parent

	function setTitle (text) { // I just realized these functions are inside of another function... fml
		if (text == "") text = "&nbsp;";
		loadingLabel.innerHTML = text;
	}
	function setProgress (percent) {
		if (percent < 0) percent = 0;
		if (percent > 100) percent = 100;
		loadingBar.style.width = percent + "%";
		loadingText.innerHTML = percent;
		return percent; // this will make the progress bar 'load'
	} // HAH. IF THERE WAS EVER ANYTHING TO LOAD
	
	totalUpgrades = upgradeID.length; // erm... yea... this...
	
	clearScreen(); // ./util/utils.js
	loadMainScreen(); // ./ui/uiHandler.js
	if (alreadyPlaying) { // if a save exists
		checkUpgrades(); // update the upgrades
		for (startLoop = 0; startLoop < upgradeID.length; startLoop++) { // loop through upgrades
			if (upgradeID[startLoop][5] == true) { // if the upgrade was bought before
				upgradeID[startLoop][3](); // run it's function
			}
		}
	}
	loadingGAME = false; // MAKE SURE YOU STOP LOADING. FFS. THIS MAKES SHIT FREE
	tickGame();
}