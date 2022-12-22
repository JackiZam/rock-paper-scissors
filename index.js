const playButton = document.querySelector('.play');
playButton.addEventListener('click', () => {
    location.href = './gameScreen.html';
});

const infoButton = document.querySelector('.infoButton');
infoButton.addEventListener('click', () => {
    window.open("./instructions.html", "_self");
});