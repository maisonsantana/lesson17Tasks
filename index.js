"use strict";

// 1) Знайти середнє арифметичне значення усіх переданих аргументів, якщо аргументів не має - повертати null

function avgNum() {
  let sumOfNum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === undefined) {
      return null;
    }
    sumOfNum += arguments[i];
  }
  return sumOfNum / arguments.length;
}
console.log(avgNum(3, 2, 1));

// ----------------------------------------

// 2) Замінити усі максимальні значення в масиві на значення 0

function changeElements(arr) {
  let maxElem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElem) {
      maxElem = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxElem) {
      arr[i] = 0;
    }
  }
  return arr;
}
const arr1 = [21, 7, 31, 8, 2, 31, 7, 15, 21];
console.log(arr1);
console.log(changeElements(arr1));
