var Letter = require("./letter.js");
Word = function (word) {
	var actualValue = word.toUpperCase();
	var letterList = [];

	for(var i = 0; i < actualValue.length; i++) {
		letterList.push(new Letter(actualValue[i]));
	}
	this.getActualValue = function() {
		return actualValue;
	}

	this.getDisplayText = function() {
		var wordDisplayText = "";
		for(var i = 0; i < letterList.length; i++) {
			var singleLetter = letterList[i];
			wordDisplayText += singleLetter.getDisplayText() + " ";
		}
		return wordDisplayText;
	}

	this.isGuessed = function() {
		for (var i = 0; i < letterList.length; i++) {
			var singleLetter = letterList[i];
			if(singleLetter.isGuessed() == false) {
				return false;
			}
		}
		return true;
	}

	this.checkMatches = function(guess) {
		var matchFound = false;
		for(var i = 0; i < letterList.length; i++) {
			var singleLetter = letterList[i];
			if(singleLetter.checkMatch(guess)) {
				matchFound = true;
			}
		}
		return matchFound;
	}
}
module.exports = Word;