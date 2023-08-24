//PLAYERS DEFINED IN FACTORY EXPRESSIONS
// const player = (name, symbol) => {
//   const getName = () => name;
//   const getSymbol = () => symbol;

//   return getName, getSymbol;
// };

// const players = [player("Player 1", "X"), player("Player 2", "O")];

/*//GAME LOGIC MODULE
const gameBoard = (() => {
    // Initialize the game board as an array of 9 empty strings
    const board = ["", "", "", "", "", "", "", "", ""];

    // Create two player objects using the factory function
    const players = [Player("Player 1", "X"), Player("Player 2", "O")];

    // Initialize the current player as the first player
    let currentPlayer = players[0];

    // Define functions and variables to be used within the module

    // The getBoard function returns the current state of the game board.
    const getBoard = () => board;

    // The getCurrentPlayer function returns the current player object.
    const getCurrentPlayer = () => currentPlayer;

    // The makeMove function allows a player to make a move by specifying an index on the board.
    const makeMove = (index) => {
        // Check if the selected cell is empty and the game is not over
        if (board[index] === "" && !checkWin()) {
            // Update the cell with the current player's symbol
            board[index] = currentPlayer.getSymbol();

            // Switch to the next player's turn
            currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
        }
    };

    // The checkWin function is a placeholder for checking win conditions (not fully implemented in this example).

    // The resetBoard function resets the game board and switches back to the first player.
    const resetBoard = () => {
        board.fill("");
        currentPlayer = players[0];
    };

    // Return an object with public functions and data
    return { getBoard, getCurrentPlayer, makeMove, resetBoard };
})();

*/

//1 GAMEBOARD
let playing = true;
let board = ["", "", "", "", "", "", "", "", ""];

//2 PLAYERS
const players = [
  { name: "Player 1", symbol: "X" },
  { name: "Player 2", symbol: "O" },
];

//WINNING CONDITIONS
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
// Create a function to check for a winner
function checkForWinner() {
  for (let i = 0; i < winCondition.length; i++) {
    const [a, b, c] = winCondition[i];
    if (board[a] && board[a] == board[b] && board[a] == board[c]) {
      document.querySelector(
        ".message"
      ).textContent = `${currentPlayer.name} WINS!`;
    }
  }
  playing = false;
  return;
}

//3 PLAYER START
let currentPlayer = players[0];

//4 SELECTION
if (playing) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const tableId = cell.getAttribute("data-table-id");
      if (board[tableId] == "") {
        board[tableId] = currentPlayer.symbol;
        cell.textContent = currentPlayer.symbol;

        //CHECK FOR WIINER
        checkForWinner();
        //CHECK FOR EMPTY BOARD
        const allFilled = board.every((value) => value !== "");
        if (allFilled) {
          document.querySelector(".message").textContent = "CAT GAME!";
          return;
        }

        console.log(board);

        //SWITCH PLAYERS
        currentPlayer == players[0]
          ? (currentPlayer = players[1])
          : (currentPlayer = players[0]);
      }
    });
  });
}
