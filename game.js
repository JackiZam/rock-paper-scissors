choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices) {
    let indexPos = [Math.floor(Math.random() * choices.length)];
    let choice = choices[indexPos];
    return choice;
 }

 let result = "";
 let playerWins = 0;
 let compWins = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == computerSelection) {
        result = "It's a tie!";
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "paper") {
            result = "You lost.";
            return "You lose! Paper beats rock!";
        } else {
            result = "You won!";
            return "You win! Rock beats scissors!";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            result = "You won!";
            return "You win! Paper beats rock!";
        } else {
            result = "You lost.";
            return "You lose! Scissors beats paper!";
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "paper") {
            result = "You won!";
            return "You win! Scissors beats paper!";
        } else {
            result = "You lost.";
            return "You lose! Rock beats scissors!";
        }
    }

}

let computerSelection = ""; 

function test(result) {
    if (result == "You lost.") {
        compWins = compWins + 1;
    } else if (result == "You won!") {
        playerWins = playerWins + 1;
    } else {
        playerWins = playerWins;
        compWins = compWins;
    }
}

function playGame() {
    let userSelection = "";
    for (let i=0; i<5; i++) {
        computerSelection = getComputerChoice(choices);
        userSelection = prompt("Input rock paper or scissors");
        console.log(`You selected ${userSelection}, and the computer selected ${computerSelection}.`);
        playRound(userSelection, computerSelection);
        console.log(result);
        test(result);
    }

    console.log(`You had ${playerWins} win(s), and the computer had ${compWins} win(s)!`);

    if (playerWins == compWins) {
        console.log("It's a tie!");
    } else if (playerWins > compWins) {
        console.log("You won!");
    } else {
        console.log("You lost!");
    }
}

playGame();