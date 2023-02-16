"use strict";

function pow(x, n) {
  let result = 1;

  while (n) {
    result *= x;
    n--;
  }
  return result;
}

let x = +prompt("Введите число x", "");
let n = +prompt("Введите число n", "");

if (n > 0 && Number.isSafeInteger(n)) {
  alert(pow(x, n));
} else {
  alert("Степень должна быть натуральным числом");
}
