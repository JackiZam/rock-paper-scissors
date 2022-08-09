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
        result = "tie";
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "paper") {
            result = "loss";
            return "You lose! Paper beats rock!";
        } else {
            result = "win";
            return "You win! Rock beats scissors!";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            result = "win";
            return "You win! Paper beats rock!";
        } else {
            result = "loss";
            return "You lose! Scissors beats paper!";
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "paper") {
            result = "win";
            return "You win! Scissors beats paper!";
        } else {
            result = "loss";
            return "You lose! Rock beats scissors!";
        }
    }

}

let computerSelection = ""; /* getComputerChoice(choices);
console.log(computerSelection); */

/*console.log(playRound("paper", computerSelection));
console.log(result); */

/* this counter section vv needs to go after the function call */
function test(result) {
    if (result == "loss") {
        compWins = compWins + 1;
    } else if (result == "win") {
        playerWins = playerWins + 1;
    } else {
        playerWins = playerWins;
        compWins = compWins;
    }
}

 // test(result);

/* v uncomment when the playGame function includes the loop to test
console.log(playerWins);
console.log(compWins); */



function playGame() {
    let userSelection = "";
    for (let i=0; i<5; i++) {
        computerSelection = getComputerChoice(choices);
        userSelection = prompt("Input rock paper or scissors");
        console.log(`You selected ${userSelection}, and the computer selected ${computerSelection}`);
        playRound(userSelection, computerSelection);
        console.log(result);
        test(result);
    }

    console.log(`You have ${playerWins} wins, and the computer has ${compWins} wins!`);

    if (playerWins == compWins) {
        console.log("It's a tie!");
    } else if (playerWins > compWins) {
        console.log("You won!");
    } else {
        console.log("You lost!");
    }
}

playGame();