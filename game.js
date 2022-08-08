function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
 }

const computerSelection = getComputerChoice;
 
function play(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats rock!";
        } else {
            return "You win! Rock beats scissors!"; }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock!";
        } else {
            return "You lose! Scissors beats paper!";}
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beats paper!"
        } else {
            return "You lose! Rock beats scissors!"
        }
    }

}
