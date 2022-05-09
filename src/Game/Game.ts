import GameField from "GameField/GameField";
import Player from "Player/Player";

import IGame from "Game/IGame";

export default class Game implements IGame {
  player1: Player;
  player2: Player;
  gameField: GameField;
  startGame(): void {
    this.player1.turn(this.gameField);
  }

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameField = new GameField();
  }
}
