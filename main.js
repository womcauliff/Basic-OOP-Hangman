var inquirer = require('inquirer');
var Game = require('./Game.js');
var hangman = new Game();
gameRound();

function gameRound() {
	console.log(hangman.getDisplayText());
	
	inquirer.prompt([
		{
			name: "letterGuess",
			message: "Guess a letter:",
			type: "input",
			validate: function(value) {
				if (value.length !== 1) {
					console.log("\nPlease enter a single letter as your guess.");
					return false;
				}
				else if (!/[a-zA-Z]/.test(value)) {
					console.log("\nPlease enter a letter from the alphabet as your guess.");
					return false;
				}
				else if(!hangman.isNewGuess(value)) {
					console.log("\nYou have already guessed " + value 
						+ "\nPlease guess a different letter.");
					return false;
				}
				return true;
			}
		}
	]).then(function (answer){

			if(hangman.makeGuess(answer.letterGuess)) {
				//guess was good, so check if user won
				if(hangman.isWon()) {
					console.log(hangman.getActualValue());
					console.log("you win");
				}
				//else, next round
				else {
					gameRound();
				}
			}
		   	else {
		       //guess was bad, so check if user lost
		       if(hangman.getTriesLeft() == 0) {
		       		console.log(hangman.getActualValue());
		       		console.log("you lost");
		       }
		       //else, next round
		       else {
		       		console.log("Tries Left: " + hangman.getTriesLeft());
					gameRound();
		       }
		   }
	});
}