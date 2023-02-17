"use strict";

let schedule = {};
alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

delete schedule["8:30"];
alert(isEmpty(schedule)); // true

schedule.name = "John";
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
