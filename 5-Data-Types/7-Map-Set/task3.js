"use strict";

let map = new Map();
map.set("name", "John");

// Возвращает итерируемый объект
let keys1 = map.keys(); // [Map Iterator] { 'name' }

// Поэтому вызов:
// keys1.push("more");
// выдаст ошибку
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция

// Возвращает массив
let keys2 = Array.from(map.keys()); // [ 'name' ]
// или так
let keys3 = [...map.keys()]; // [ 'name' ]

// Работает без ошибок
keys2.push("more"); // [ 'name', 'more' ]
// то же
keys3.push("more"); // [ 'name', 'more' ]
