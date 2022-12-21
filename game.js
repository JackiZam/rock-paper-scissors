let choices = ['Rock', 'Paper', 'Scissors'];
let numUserWins = 0, numCompWins = 0;

const userWins = document.querySelector('.userScoreBox');
userWins.textContent = `${numUserWins}`;

const compWins = document.querySelector('.compScoreBox');
compWins.textContent = `${numCompWins}`;

const userOptions = document.querySelectorAll('.userOption');
const computerChoice = document.querySelector('.computerChoice');
const roundResults = document.querySelector('.roundResults');
const gameResults = document.createElement('p');
const gameOverSection = document.querySelector('.gameOverScreen');
const gameOverAlert = document.createElement('p');

function getComputerChoice(choices) {
    let indexPos = [Math.floor(Math.random() * choices.length)];
    let choice = choices[indexPos];
    return choice;
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice(choices);
    computerChoice.textContent = `The computer chose ${computerSelection.toLowerCase()}.`;
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        roundResults.textContent = "It's a tie. Go again!";

    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            numCompWins++;
            roundResults.textContent = `${computerSelection} beats ${playerSelection.toLowerCase()}. You lost!`;
        }
        else {
            numUserWins++;
            roundResults.textContent = `${playerSelection} beats ${computerSelection.toLowerCase()}. You won!`;
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            numUserWins++;
            roundResults.textContent = `${playerSelection} beats ${computerSelection.toLowerCase()}. You won!`;
        }
        else {
            numCompWins++;
            roundResults.textContent = `${computerSelection} beat ${playerSelection.toLowerCase()}. You lost!`;
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            numUserWins++;
            roundResults.textContent = `${playerSelection} beat ${computerSelection.toLowerCase()}. You won!`;
        }
        else {
            numCompWins++;
            roundResults.textContent = `${computerSelection} beats ${playerSelection.toLowerCase()}. You lost!`;
        }
    }
    
    userWins.textContent = `${numUserWins}`;
    compWins.textContent = `${numCompWins}`;
    
    if (numCompWins == 5 || numUserWins == 5) {
        gameOver();
        return;
    }
}

function playGame() {
    userOptions.forEach((button) => {
        button.addEventListener('click', function(e) {
            playRound(button.id);
        });
    });
}


function gameOver() {
    gameOverAlert.textContent = "Game over";
    document.body.appendChild(gameOverAlert);
    if (numUserWins > numCompWins) {
        gameResults.textContent = "Congrats! You win!";
    }
    else {
        gameResults.textContent = "You lose!";
    }
    document.body.appendChild(gameResults);
    // put these V in a new function for when the replay button is clicked
    // numCompWins = 0;
    // numUserWins = 0;
    return;
}

playGame();
