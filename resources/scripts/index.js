// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const user_selection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);
const rockButton = document.getElementById(`rock-button`);
const paperButton = document.getElementById(`paper-button`);
const scissorsButton = document.getElementById(`scissors-button`);
const emptySelectionWarning = document.getElementById(`emptySelectionWarning`);

// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors(userName);
let userSelection;

// hide game screen
gameScreen.classList.add(`d-none`);
emptySelectionWarning.classList.add(`d-none`);
user_selection.classList.add(`d-none`);

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
  if(userSelection){
    emptySelectionWarning.classList.add(`d-none`);
    game.play(userSelection);
    updateScoreTallyUI();
    updateGameHistoryUI();
  } else {
    emptySelectionWarning.classList.remove(`d-none`);
  }
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