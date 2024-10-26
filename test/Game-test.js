const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Game = require('../js/Game.js');
global.BonusRound = require('../js/Round.js')
global.Round = require('../js/Round.js')
global.data = require('../js/data.js');
global.wheel = {
  grabSpinValue() {
    return true;
  }
}
global.domUpdates = require('../js/DOM.js');
global.Round = require('../js/Round.js');
global.Player = require('../js/Player.js');
chai.spy.on(global.domUpdates, ['clearInputs', 'goToGameScreen',
  'displayWinner', 'goToHomeScreen', 'displayWheel', 'hideWheel',
  'resetPuzzleSquares', 'resetKeyboard', 'newPlayerTurn', 'enableLetters',
  'disableKeyboard', 'updateBankAccts', 
  'clearBankAccts', 'displayBonusIntro'], () => true);
chai.spy.on(global.domUpdates, 'getPlayerNames', () =>
  ({ 'Player 1: Dog': 0, 'Player 2: Frog': 0, 'Player 3: Sloth': 0 })); 

describe('Game', () => {
  var game;
  beforeEach(() => {
    game = new Game()
  });

  it('should have the correct default properties', () => {
    expect(game.round).to.equal(0);
    expect(game.bonusRound).to.equal(false);
    expect(game.players).to.deep.equal({});
    expect(game.puzzleKeys).to.deep.equal(['one_word_answers',
      'two_word_answers', 'three_word_answers', 'four_word_answers', 'five_word_answers']);
  });

  it('should be able to take in player names', () => {
    game.init();
    expect(game.players).to.deep.equal({ 'Player 1: Dog': 0,
      'Player 2: Frog': 0, 'Player 3: Sloth': 0 });
  });

  it('should start a new game', () => {
    game.init();
    expect(global.domUpdates.clearInputs).to.have.been.called(2);
  });

  it('should be able to start a new round', () => {
    game.startRound();
    expect(game.round).to.equal(1);
  });

  it('should be able to start a bonus round', () => {
    game.round = 4;
    game.startRound();
    expect(game.bonusRound).to.equal(true);
  })

  it('should be able to end a players turn', () => {
    let index = game.endTurn([{name: 'Player 1: Theo', score: 400},
      {name: 'Player 2: Jamie', score: -200},
      {name: 'Player 3: Dog', score: 10000}], 0);
    expect(index).to.equal(1);
  });

  it('should choose the winner of the round add to their bank account', () => {
    game.players = {
      'Player 1: Theo': 0,
      'Player 2: Jamie': 0,
      'Player 3: Dog': 0
    }
    game.endRound({name: 'Player 3: Dog', wallet: 10000},
      [{name: 'Player 1: Theo', wallet: 400},
        {name: 'Player 2: Jamie', wallet: -200},
        {name: 'Player 3: Dog', wallet: 10000}], 2);
    expect(game.players['Player 3: Dog']).to.equal(10000);
  });

  it('should reset everyones wallet at the end of the round', () => {
    let result = game.endRound({name: 'Player 3: Dog', wallet: 10000},
      [{name: 'Player 1: Theo', wallet: 400},
        {name: 'Player 2: Jamie', wallet: -200},
        {name: 'Player 3: Dog', wallet: 10000}], 2);
    expect(result).to.deep.equal([{name: 'Player 1: Theo', wallet: 0},
      {name: 'Player 2: Jamie', wallet: 0},
      {name: 'Player 3: Dog', wallet: 0}])
  });

  it('should pick the bonus player at the end of the game', () => {
    game.players = {'player1: Theo': 400, 'player2: Jamie': 500,
      'player3: Bartholimule': 700};
    global.round = 
      new BonusRound(data.puzzles['four_word_answers'].puzzle_bank,
        data.bonusWheel)
    game.endGame();
    expect(global.domUpdates.displayBonusIntro).to.have.been.called(1);
    expect(global.domUpdates.displayBonusIntro).to.have.been.called.with(
      'player3: Bartholimule', 700);
  });

  it('should show homescreen when quit button is pressed', () => {
    game.quitGame();
    expect(global.domUpdates.goToHomeScreen).to.have.been.called(1);
    expect(global.domUpdates.resetPuzzleSquares).to.have.been.called(1);
    expect(global.domUpdates.resetKeyboard).to.have.been.called(1);
  });

  it('should display the wheel and keyboard when spin button is pressed',
    () => {
      game.setUpWheel();
      expect(global.domUpdates.displayWheel).to.have.been.called(1);
      expect(global.domUpdates.enableLetters).to.have.been.called(1);
    });

  it('should hide wheel after it is spun on delay', () => {
    game.tearDownWheel();
    expect(global.domUpdates.hideWheel).to.have.been.called(1);
  });
});

