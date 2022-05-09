export default class GameField implements IGameField {
  field: string[];

  constructor() {
    this.field = new Array(9).fill(" "); // TODO: add choosable field size (must be a perfect square)
  }

  isWon(sign: string): boolean {
    if (
      this.field[0] === sign &&
      this.field[1] === sign &&
      this.field[2] === sign
    )
      return true;
    if (
      this.field[3] === sign &&
      this.field[4] === sign &&
      this.field[5] === sign
    )
      return true;
    if (
      this.field[6] === sign &&
      this.field[7] === sign &&
      this.field[8] === sign
    )
      return true;
    if (
      this.field[0] === sign &&
      this.field[3] === sign &&
      this.field[6] === sign
    )
      return true;
    if (
      this.field[1] === sign &&
      this.field[4] === sign &&
      this.field[7] === sign
    )
      return true;
    if (
      this.field[2] === sign &&
      this.field[5] === sign &&
      this.field[8] === sign
    )
      return true;
    if (
      this.field[0] === sign &&
      this.field[4] === sign &&
      this.field[8] === sign
    )
      return true;
    if (
      this.field[2] === sign &&
      this.field[4] === sign &&
      this.field[6] === sign
    )
      return true;

    return false;
  }

  isFilled(): boolean {
    const emptyCellIndex = this.field.indexOf(" ");
    return emptyCellIndex === -1;
  }
}

interface IGameField {
  field: string[];
  isFilled(): boolean;
  isWon(sign: string): boolean;
}
