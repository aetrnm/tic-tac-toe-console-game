import tk from "terminal-kit";

import IPlayer from "./IPlayer";

import { isFieldFilled } from "../tools/isFieldFilled.js";
import { clearTerminal } from "../tools/clearTerminal.js";
import { checkWinCondition } from "../tools/checkWinCondition.js";

const term = tk.terminal;

export default class Player implements IPlayer {
  name: string;
  opponent: IPlayer;
  sign: string;

  constructor(name: string, sign: string) {
    this.name = name;
    this.sign = sign;
  }

  turn(gameField: string[]): void {
    clearTerminal();
    term.cyan(`${this.name}, your turn. Place ${this.sign}:\n`);
    term.gridMenu(
      gameField,
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
        if (gameField[response.selectedIndex] !== " ") {
          this.turn(gameField);
          return;
        }

        gameField[response.selectedIndex] = this.sign;
        if (checkWinCondition(gameField, this.sign)) {
          clearTerminal();
          term.eraseLineAfter.green(`${this.name}(${this.sign}) is a winner!`);
          process.exit();
        }

        if (isFieldFilled(gameField)) {
          clearTerminal();
          term.eraseLineAfter.brightMagenta("Draw!");
          process.exit();
        }

        this.opponent.turn(gameField);
      }
    );
  }

  setOpponent(opponent: IPlayer): void {
    this.opponent = opponent;
  }
}
