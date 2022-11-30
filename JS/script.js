"use strict";

// Guess My Number
const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".show-modal-gmn");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Roll The Dice
const modal2 = document.querySelector(".modal-2");
const btnOpenModal2 = document.querySelector(".show-modal-2");
const btnCloseModal2 = document.querySelector(".close-modal-2");

// BMI Calculator
const modal3 = document.querySelector(".modal-3");
const btnOpenModal3 = document.querySelector(".show-modal-3");
const btnCloseModal3 = document.querySelector(".close-modal-3");

// Tic Tac Toe
const modal4 = document.querySelector(".modal-4");
const btnOpenModal4 = document.querySelector(".show-modal-4");
const btnCloseModal4 = document.querySelector(".close-modal-4");

// Guess My Number
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Roll The Dice
const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal2.addEventListener("click", openModal2);
btnCloseModal2.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});

// BMI Calculator
const openModal3 = function () {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal3 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal3.addEventListener("click", openModal3);
btnCloseModal3.addEventListener("click", closeModal3);
overlay.addEventListener("click", closeModal3);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModal3();
  }
});

// Tic Tac Toe
const openModal4 = function () {
  modal4.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal4 = function () {
  modal4.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal4.addEventListener("click", openModal4);
btnCloseModal4.addEventListener("click", closeModal4);
overlay.addEventListener("click", closeModal4);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal4.classList.contains("hidden")) {
    closeModal3();
  }
});
