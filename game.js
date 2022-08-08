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
            result = "You lose! Paper beats rock!";
            compWins++;
        } else {
            result = "You win! Rock beats scissors!";
            playerWins++; }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            result = "You win! Paper beats rock!";
            playerWins++;
        } else {
            result = "You lose! Scissors beats paper!";
            compWins++; }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            result = "You win! Scissors beats paper!"
            playerWins++;
        } else {
            result = "You lose! Rock beats scissors!"
            compWins++;
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Input 'rock' 'paper' or 'scissors'");
        playRound(playerSelection, computerSelection);
    }
}