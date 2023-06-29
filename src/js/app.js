import Game, {GameSavingData, writeGameSaving as saveGame, readGameSaving as loadGame} from './game'

const game = new Game();
game.start();