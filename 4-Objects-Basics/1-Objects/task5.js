"use strict";

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu.width); // 400
console.log(menu.height); // 600
console.log(menu.title); // My menu
