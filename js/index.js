let game = new Game();
let round;
let puzzle;

const playerArray = [];
let playerArrayIndex = 0;

$('.start-button').on('click', () => {
  game = new Game();
  let gamePlayers = game.init();
  const nameKeys = Object.keys(gamePlayers);
  nameKeys.forEach(key => {
    let newPlayer = new Player(key);
    playerArray.push(newPlayer);
  });
  domUpdates.displayNames();
  round = game.startRound();
  puzzle = round.generatePuzzle();
  puzzle.populateBoard();
});



$('.quit').on('click', game.quitGame);

$('.spin-button').on('click', game.setUpWheel);

$('.spin-text').on('click', spinWheel);

// $('.solve-button').on('click', game.endGame);


// Make this a method of wheel
function spinWheel() {
  $('.wheel-circle').toggleClass('wheel-spin');
  setTimeout(game.tearDownWheel, 5500);
}


$('.keyboard-section').on('click', () => {
  let currentTurn = playerArray[playerArrayIndex];
  let currentGuess = $(event.target).text();
  if(['A', 'E', 'I', 'O', 'U'].includes($(event.target).text())) {
    return;
  }
  let isGuessCorrect = puzzle.checkGuess(currentGuess);
  domUpdates.disableGuessedLetter(event);
  // isGuessCorrect ? player.guessCorrectLetter(puzzle.numberCorrect) // End Turn
});

