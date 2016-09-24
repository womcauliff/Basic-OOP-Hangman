var Word = require("./word.js");
var wordList = require("./wordbank.js");

Game = function () {
	var lettersUsed = [];//stores previous guesses
	var triesLeft = 10;//attempts remaining

	var randomIndex = Math.floor(Math.random() * (wordList.length - 0)) + 0;
	var randomWord = wordList[randomIndex];
	var secretWord = new Word(randomWord);

	this.getTriesLeft = function() {
		return triesLeft;
	};

	this.getActualValue = function() {
		return secretWord.getActualValue();
	}

	this.getDisplayText = function() {
	   return secretWord.getDisplayText();
	};

	this.isNewGuess = function(guess) {
		guess = guess.toUpperCase().trim();
		if (lettersUsed.indexOf(guess) === -1)
			return true;
		else
			return false;
	};

	this.makeGuess = function(guess) {
		guess = guess.toUpperCase().trim();

		lettersUsed.push(guess);

		//if the guess matched at least one of the word's letters
		if (secretWord.checkMatches(guess)) {
			return true;
		}
		//else, none of the word's letters matched the guess
		else {
			//Remove life
			triesLeft--;
			return false;
		}
	};

	this.isWon = function() {
		return secretWord.isGuessed();
	};
}
module.exports = Game;