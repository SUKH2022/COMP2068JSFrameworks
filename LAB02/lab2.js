// Lab2 is the entry point of this application
// as defined in the package.json

// Install the npm install prompt
const prompt = require('prompt');

// Func. to determine winner based on selected option of the user
function determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie!";
    } else if (userSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
        return "User Wins!";
        } else {
        return "Computer Wins!";
        }
    } else if (userSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return "User Wins!";
        } else {
            return "Computer Wins!";
        }
    } else if (userSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            return "User Wins!";
        } else {
            return "Computer Wins!";
        }
    } else {
        return "Invalid user selection!! /nKindly choose from these options:- ROCK, PAPER, or SCISSORS.";
    }
}

// Get user input
prompt.get(['userSelection'], (err, result) => {
    // To ensure case-insensitive user input
    const userSelection = result.userSelection.toUpperCase(); 

    // Generate random number for the section of the comp.
    const randNum = Math.random();
    let computerSelection;
    if (randNum < 0.34) {
        computerSelection = "PAPER";
    } else if (randNum < 0.67) {
        computerSelection = "SCISSORS";
    } else {
        computerSelection = "ROCK";
    }

    // Displaying the outcome of the game
    console.log(`User Selection: ${userSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);
    console.log(determineWinner(userSelection, computerSelection));
});

/*
PS D: \COMP2068JSFrameworks> cd lab02
PS D:\COMP2068JSFrameworks\lab02> nodemon 
[nodemon] 3.1.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node lab2.js`
prompt: userSelection:  paper
paper
User Selection: PAPER
Computer Selection: SCISSORS
Computer Wins!
*/