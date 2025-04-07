console.log("Hello World");


function getRandom3() {
    return Math.floor((Math.random() * 3))
}
// Logic to get the computer choice
function getComputerChoice() {
    if (getRandom3() == 0) {
        return "rock";
    }
    else if (getRandom3() == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}   

// Logic to get the human choice
function getHumanChoice() {
    let userChoice = prompt("Please enter your choice (rock/paper/scissors)?: ");
    return userChoice;
}

// Declare the player score var
let humanScore = 0;
let computerScore = 0;

// logic to play a single round
function playRound(humanChoice, computerChoice) {
    
}