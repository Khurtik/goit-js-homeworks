'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let inNumberDroids = prompt('Сколько дроидов вы хотите купить?');

let totalPrice = pricePerDroid * inNumberDroids;
let residue = credits - totalPrice;
let message;

if (inNumberDroids === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = ` Вы купили ${inNumberDroids} дроидов, на счету осталось ${residue} кредитов.`;
}

console.log(message);
