'use strict';

let total = 0;
let input;

while (true) {
  input = prompt('Ввведите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  total += input;

  if (total) {
    alert(`Общая сумма чисел равна ${total}`);
  }
}
