export default interface IGameField {
  field: string[];
  isFilled(): boolean;
  isWon(sign: string): boolean;
}
