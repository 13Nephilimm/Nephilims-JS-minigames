"use strict";

// Elements
let currentPlayer;
const playerX = "X";
const playerO = "O";
const resetBtn = document.querySelector(".btn-reset");
const cells = document.querySelectorAll(".box");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let spaces = ["", "", "", "", "", "", "", "", ""];
let playing = false;
const statusText = document.querySelector(".status");

initGame();

// Functions
function initGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  resetBtn.addEventListener("click", restartGame);
  currentPlayer = playerX;
  statusText.textContent = `${currentPlayer}'s Turn`;
  playing = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("id");

  if (spaces[cellIndex] != "" || !playing) {
    return;
  } else {
    updateCell(this, cellIndex);
    checkWinner();
  }
}

function updateCell(cell, index) {
  spaces[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function switchPlayer() {
  if (currentPlayer == playerX) {
    currentPlayer = playerO;
  } else {
    currentPlayer = playerX;
  }
  statusText.textContent = `${currentPlayer}'s Turn`;
}

function checkWinner() {
  let gameWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = spaces[condition[0]];
    const cellB = spaces[condition[1]];
    const cellC = spaces[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      gameWon = true;
      break;
    }
  }

  if (gameWon) {
    statusText.textContent = `${currentPlayer} has Won the Game!`;
  } else if (!spaces.includes("")) {
    playing = false;
    statusText.textContent = `Draw!`;
  } else {
    switchPlayer();
  }
}

function restartGame() {
  currentPlayer = "X";
  statusText.textContent = `${currentPlayer}'s Turn`;
  spaces = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => (cell.textContent = ""));
  playing = true;
}
