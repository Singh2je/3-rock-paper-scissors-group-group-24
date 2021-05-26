// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
// const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);
const rockButton = document.getElementById(`rock-button`);
const paperButton = document.getElementById(`paper-button`);
const scissorsButton = document.getElementById(`scissors-button`);

// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors(userName);
let userSelection = `rock`;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = game.username.value + `: ` + game.score.user + ` CPU: ` + game.score.cpu;
}

// updateGameHistoryUI
  function updateGameHistoryUI(){
    gameHistoryParagraph.innerHTML = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`); 
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  game.play(userSelection);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

rockButton.addEventListener(`click`, function () {
  userSelection = `rock`;
});

paperButton.addEventListener(`click`, function () {
  userSelection = `paper`;
});

scissorsButton.addEventListener(`click`, function () {
  userSelection = `scissors`;
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });