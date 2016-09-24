Letter = function(lettertext) {
	var guessed = false;
	var trueValue = lettertext;

	this.isGuessed = function() {
		return guessed;
	}
	this.getDisplayText = function() {
		if(guessed) {
			return trueValue; 
		}
		else {
			return "_";
		}
	}
	this.checkMatch = function(guess) {
		if(trueValue == guess) {
			guessed = true;
			return true;
		}
		return false;
	}
}
module.exports = Letter;