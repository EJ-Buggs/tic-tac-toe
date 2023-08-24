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
