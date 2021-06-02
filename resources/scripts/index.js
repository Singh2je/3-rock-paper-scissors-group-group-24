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
const resetButton = document.getElementById(`reset-button`);

// instantiate the game object from the `RockPaperScissors` class.
let game;
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
  game = new RockPaperScissors(userName);
  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`); 
  game.username.value = userName.value;
  updateScoreTallyUI();
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
  rockButton.style.background='#000000'
  paperButton.style.background='#707070'
  scissorsButton.style.background='#707070'
});

paperButton.addEventListener(`click`, function () {
  userSelection = `paper`;
  rockButton.style.background='#707070'
  paperButton.style.background='#000000'
  scissorsButton.style.background='#707070'
});

scissorsButton.addEventListener(`click`, function () {
  userSelection = `scissors`;
  rockButton.style.background='#707070'
  paperButton.style.background='#707070'
  scissorsButton.style.background='#000000'
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
resetButton.addEventListener(`click`, function(e) { 
  gameScreen.classList.add(`d-none`);
  welcomeScreen.classList.remove(`d-none`);
  game.username.value = ``;
  game.gameHistoryLog = [];
  game.score.cpu = 0;
  game.score.user = 0;
  userSelection = ``;
  rockButton.style.background='#707070'
  paperButton.style.background='#707070'
  scissorsButton.style.background='#707070'
  updateGameHistoryUI();
  updateScoreTallyUI();
});