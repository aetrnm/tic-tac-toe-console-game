import tk from "terminal-kit";

import IPlayer from "./IPlayer";
import GameField from "GameField/GameField";

import { clearTerminal } from "../tools/clearTerminal.js";

const term = tk.terminal;

export default class Player implements IPlayer {
  name: string;
  opponent: IPlayer;
  sign: string;

  constructor(name: string, sign: string) {
    this.name = name;
    this.sign = sign;
  }

  turn(gameField: GameField): void {
    clearTerminal();
    term.cyan(`${this.name}, your turn. Place ${this.sign}:\n`);
    term.gridMenu(
      gameField.field,
      {
        width: 10,
        leftPadding: "|",
        selectedLeftPadding: "|",
        rightPadding: "|",
        selectedRightPadding: "|",
        style: term.green,
        selectedStyle: term.yellow,
        exitOnUnexpectedKey: true,
      },
      (error, response) => {
        if (gameField.field[response.selectedIndex] !== " ") {
          this.turn(gameField);
          return;
        }

        gameField.field[response.selectedIndex] = this.sign;

        if (gameField.isWon(this.sign)) {
          clearTerminal();
          term.eraseLineAfter.green(`${this.name}(${this.sign}) is a winner!`);
          process.exit();
        }

        if (gameField.isFilled()) {
          clearTerminal();
          term.eraseLineAfter.brightMagenta("Draw!");
          process.exit();
        }

        this.opponent.turn(gameField);
      }
    );
  }

  setOpponent(opponent: Player): void {
    this.opponent = opponent;
  }
}
