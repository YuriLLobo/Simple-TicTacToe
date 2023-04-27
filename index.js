const squares = document.querySelectorAll('button');
let currentPlayer = 'X';
let gameFinished = false;

function playTurn() {
  if (gameFinished) return;

  const square = this;
  if (square.textContent !== '') return;

  square.textContent = currentPlayer;

  if (checkWin()) {
    alert(`Player ${currentPlayer} won!`);
    gameFinished = true;
    window.location.reload();
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  if (checkDraw()) {
    alert('Draw!');
    gameFinished = true;
    window.location.reload();
  }
  
}

function checkDraw() {
  if ([...squares].every(square => square.textContent !== '' && !checkWin())){
    return true;
  }

}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    if (
      squares[combo[0]].textContent === currentPlayer &&
      squares[combo[1]].textContent === currentPlayer &&
      squares[combo[2]].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

squares.forEach(square => {
  square.addEventListener('click', playTurn);
});