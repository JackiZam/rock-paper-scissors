let choices = ['Rock', 'Paper', 'Scissors'];
let numUserWins = 0, numCompWins = 0;

const userWins = document.querySelector('.userScoreBox');
userWins.textContent = `${numUserWins}`;

const compWins = document.querySelector('.compScoreBox');
compWins.textContent = `${numCompWins}`;

const userOptions = document.querySelectorAll('.userOption');
const computerChoice = document.querySelector('.computerChoice');
const roundResults = document.querySelector('.roundResults');
const gameResults = document.querySelector('.gameResults');
gameResults.style.fontSize = "x-large";
const gameOverSection = document.querySelector('.gameOverScreen');
const gameOverAlert = document.createElement('p');
const closeButton = document.querySelector('.closeButton');
const restartButton = document.querySelector('.restart');

const infoButton = document.querySelector('.infoButton');
infoButton.addEventListener('click', () => {
    window.open("./instructions.html", "_self");
});

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
            numCompWins += 1;
            roundResults.textContent = `${computerSelection} beats ${playerSelection.toLowerCase()}. You lost!`;
        }
        else {
            numUserWins += 1;
            roundResults.textContent = `${playerSelection} beats ${computerSelection.toLowerCase()}. You won!`;
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            numUserWins += 1;
            roundResults.textContent = `${playerSelection} beats ${computerSelection.toLowerCase()}. You won!`;
        }
        else {
            numCompWins += 1;
            roundResults.textContent = `${computerSelection} beat ${playerSelection.toLowerCase()}. You lost!`;
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            numUserWins += 1;
            roundResults.textContent = `${playerSelection} beat ${computerSelection.toLowerCase()}. You won!`;
        }
        else {
            numCompWins += 1;
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
    numCompWins = 0;
    numUserWins = 0;
    gameOverSection.style.visibility = 'hidden';
    userOptions.forEach((button) => {
        button.addEventListener('click', function(e) {
            playRound(button.id);
        });
    });
}


function gameOver() {
    gameOverSection.style.visibility = 'visible';
    if (numUserWins > numCompWins) {
        gameResults.textContent = "Congrats! You win!";
    }
    else {
        gameResults.textContent = "You lose!";
    }
    closeButton.addEventListener('click', () => {
        gameOverSection.style.visibility = 'hidden';
        userOptions.forEach((button) => {
            button.disabled = true;
        });
    });
    restartButton.addEventListener('click', function(e) {
        numCompWins = 0;
        numUserWins = 0;
        userWins.textContent = `${numUserWins}`;
        compWins.textContent = `${numCompWins}`;
        gameOverSection.style.visibility = 'hidden';
    })
    return;
}

playGame();
