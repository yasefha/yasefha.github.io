const board = document.getElementById('board');
const diceResult = document.getElementById('diceResult');
const positionText = document.getElementById('position');

let position = 1;

// Ular dan Tangga
const snakes = {
  16: 6,
  49: 11,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78
};

const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100
};

// Buat papan
for (let i = 100; i > 0; i--) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.id = 'cell-' + i;
  cell.textContent = i;
  board.appendChild(cell);
}

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = `Hasil Dadu: ${roll}`;
  
  let nextPos = position + roll;
  if (nextPos > 100) return;

  // Ular atau tangga
  if (snakes[nextPos]) {
    nextPos = snakes[nextPos];
  } else if (ladders[nextPos]) {
    nextPos = ladders[nextPos];
  }

  // Update posisi
  document.querySelector(`#cell-${position} .player`)?.remove();
  position = nextPos;
  const playerToken = document.createElement('div');
  playerToken.classList.add('player');
  document.getElementById(`cell-${position}`).appendChild(playerToken);
  positionText.textContent = `Posisi Pemain: ${position}`;

  if (position === 100) {
    alert('🎉 Selamat! Kamu menang!');
    position = 1;
    updateBoard();
  }
}

function updateBoard() {
  document.querySelectorAll('.player').forEach(p => p.remove());
  const playerToken = document.createElement('div');
  playerToken.classList.add('player');
  document.getElementById(`cell-${position}`).appendChild(playerToken);
  positionText.textContent = `Posisi Pemain: ${position}`;
}

updateBoard();
