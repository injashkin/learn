"use strict";

let number = prompt("Введите любое число", 0);
if (number < 0) {
  alert(-1);
} else if (number > 0) {
  alert(1);
} else {
  alert(0);
}
