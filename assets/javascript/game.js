


//array for possible computer choices//
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables to track user information// 
var userWins = 0;
var userLosses = 0;
var guessesRemaining = 9;
var userTries = [];
var computerGuess = [];

//intial computer letter//
window.onload = function() {
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //computerGuess.push is adding the random guess created by var compGuess to the array computerGuess//
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}

//game//
document.onkeyup = function(event) {
    var playerGuess = event.key;
    userTries.push(playerGuess);
    console.log(playerGuess[0]);

    if ((playerGuess === computerGuess[0]) && (guessesRemaining > 0)) {
        userWins++;
        guessesRemaining = 9;
        userTries.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }

    else if ((playerGuess !== computerGuess[0]) && (guessesRemaining > 0)) {
        guessesRemaining = guessesRemaining-1;
    }

    else {
        userLosses++;
        guessesRemaining = 9;
        userTries.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }

    var html = "<h1><strong>The Psychic Game</strong></h1>" +
                "<p><strong>Guess what letter I'm thinking of</strong></p>" +
                "<p>Wins: " + userWins + "</p>" +
                "<p>Losses: " + userLosses + "</p>" +
                "<p>Guesses left: " + guessesRemaining + "</p>" +
                "<p>Your guesses so far: " + userTries + "</p>";

    document.querySelector("#game").innerHTML = html;

}