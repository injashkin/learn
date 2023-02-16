"use strict";

let password = "";
let login = prompt("Кто там?", "");

if (login === "Админ") {
  password = prompt("Введите пароль", "");
  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === null || password === "") {
    alert("Отменено");
  } else alert("Неверный пароль");
} else if (login === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
