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
        result = "It's a tie!";
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            result = "loss";
            compWins++;
            return "You lose! Paper beats rock!";
        } else {
            result = "win";
            playerWins++; 
            return "You win! Rock beats scissors!";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            result = "win";
            playerWins++;
            return "You win! Paper beats rock!";
        } else {
            result = "loss";
            compWins++; 
            return "You lose! Scissors beats paper!";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            result = "win";
            playerWins++;
            return "You win! Scissors beats paper!";
        } else {
            result = "loss";
            compWins++;
            return "You lose! Rock beats scissors!";
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Input 'rock' 'paper' or 'scissors'");
        playRound(playerSelection, computerSelection);
    }
}