function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
 }

const computerSelection = getComputerChoice;

let result = "";
let playerWins = 0;
let compWins = 0;
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        result = "tie";
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            result = "loss";
            return "You lose! Paper beats rock!";
        } else {
            result = "win";
            return "You win! Rock beats scissors!";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            result = "win";
            return "You win! Paper beats rock!";
        } else {
            result = "loss";
            return "You lose! Scissors beats paper!";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            result = "win";
            return "You win! Scissors beats paper!";
        } else {
            result = "loss";
            return "You lose! Rock beats scissors!";
        }
    }

    if (result == "loss") {
        compWins++;
    } else if (result == "win") {
        playerWins++;
    } else {
        playerWins = playerWins;
        compWins = compWins;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Input 'rock' 'paper' or 'scissors'");
        playRound(playerSelection, computerSelection);
    }
    if (playerWins > compWins) {
        console.log("You won!");
    } else {
        console.log("You loss!");
    }
    console.log(`You have ${playerWins} wins, and the computer has ${compWins} wins!`);
}