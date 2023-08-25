//1 GAMEBOARD MODULE
const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const updateBoard = (index, symbol) => {
    if (board[index] === "") {
      board[index] = symbol;
      return true;
    }
    return false;
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    // document.querySelector(".message").classList.add("hidden");
  };

  return { getBoard, updateBoard, resetBoard };
})();

//PLAYER FACTORY FUNCTION
const playerFactory = (name, symbol) => {
  return { name, symbol };
};

//INITIALIZE PLAYERS
const player1 = playerFactory("Player 1", "X");
const player2 = playerFactory("Player 2", "O");

let currentPlayer = player1;

//WINNING CONDITIONS MODULE
const winningConditions = (() => {
  const winCondition = [
    //HORIZONTAL
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //VERTICAL
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //DIAGONAL
    [2, 4, 6],
    [0, 4, 8],
  ];

  const checkForWinner = () => {
    const board = gameBoard.getBoard();
    for (let i = 0; i < winCondition.length; i++) {
      const [a, b, c] = winCondition[i];
      if (board[a] && board[a] == board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };
  return { checkForWinner };
})();
//EVENT LISTENERS
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const tableId = cell.getAttribute("data-table-id");
    if (gameBoard.updateBoard(tableId, currentPlayer.symbol)) {
      cell.textContent = currentPlayer.symbol;
      if (winningConditions.checkForWinner()) {
        document.querySelector(
          ".message"
        ).textContent = `${currentPlayer.name} WINS!`;
        // document.querySelector(".message").classList.remove("hidden");
        return;
      }
      //SWITCH PLAYERS
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
  });
});

//RESET BUTTON EVENT LISTENER
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  gameBoard.resetBoard();
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  document.querySelector(".message").textContent = "";
  currentPlayer = player1;
});
