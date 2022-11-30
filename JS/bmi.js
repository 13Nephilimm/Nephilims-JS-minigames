"use strict";

const weightInput = document.querySelector(".weight");
const heightInput = document.querySelector(".height");
const btnCheck = document.querySelector(".btn");
const btnReset = document.querySelector(".btn-reset");
const clear = document.querySelector(".no-number");
const result = document.querySelector(".result");
const resultRed = function () {
  document.querySelector("html").style.backgroundColor = "#ff0000cc";
};
const resultGreen = function () {
  document.querySelector("html").style.backgroundColor = "#60b347";
};
const resultRemove = function () {
  result.classList.remove("hidden");
};

btnCheck.addEventListener("click", function () {
  const result2 =
    Number(weightInput.value) /
    (Number(heightInput.value) * Number(heightInput.value));
  if (!weightInput.value || !heightInput.value) {
    clear.classList.remove("hidden");
  } else {
    if (result2 < 18.5) {
      resultRemove();
      resultRed();
      document.querySelector(
        ".result"
      ).textContent = `😐You are in the underweight range! (${result2.toFixed(
        2
      )})`;
    } else if (result2 > 24.9) {
      resultRemove();
      resultRed();
      document.querySelector(
        ".result"
      ).textContent = `😐You are in the overweight range! (${result2.toFixed(
        2
      )})`;
    } else if (result2 >= 18.5 && result2 <= 24.9) {
      resultRemove();
      resultGreen();
      document.querySelector(
        ".result"
      ).textContent = `🤩You are in the healthy weight range! (${result2.toFixed(
        2
      )})`;
    }
  }
});

btnReset.addEventListener("click", function () {
  weightInput.value = heightInput.value = "";
  result.classList.add("hidden");
  document.querySelector("html").style.backgroundColor = "#adb0ab";
});
