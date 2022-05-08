export function isFieldFilled(gameField: string[]) {
  const emptyCellIndex = gameField.indexOf(" ");
  return emptyCellIndex === -1;
}
