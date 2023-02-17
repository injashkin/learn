"use strict";

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let salaries2 = {};

//======================

function getSumSalaries(obj) {
  let result = 0;
  for (let key in obj) {
    result += obj[key];
  }
  return result;
}

let sum = getSumSalaries(salaries);
console.log(sum); //390
sum = getSumSalaries(salaries2);
console.log(sum); // 0
