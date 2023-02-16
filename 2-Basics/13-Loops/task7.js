"use strict";

/* Для решения задачи я использовал написанную мною 
функцию для определения простых чисел */

let num = prompt("Введите число", 0);

function isPrimeNumber(num) {
  let prime = 2;
  let ratio;
  if (num === 0 || num === 1) {
    return false;
  }

  while (prime < num) {
    ratio = num / prime;
    if (Number.isInteger(ratio)) {
      return ratio === 1 ? true : false;
    } else prime = prime + 1;
  }

  return true;
}

for (let i = 1; i <= num; i++) {
  if (isPrimeNumber(i)) {
    alert(i);
  }
}