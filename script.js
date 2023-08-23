const gameBoard = () => {
  const board = ["", "X", "", "", "", "", "", "", ""];

  return board;
};

//PLAYERS DEFINED IN FACTORY EXPRESSIONS
// const player = (name, symbol) => {
//   const getName = () => name;
//   const getSymbol = () => symbol;

//   return getName, getSymbol;
// };

// const players = [player("Player 1", "X"), player("Player 2", "O")];

const players = [
  { name: "Player 1", symbol: "X" },
  { name: "Player 2", symbol: "O" },
];
