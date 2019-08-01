'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let inNumberDroids = prompt('Сколько дроидов вы хотите купить?');

let totalPrice = pricePerDroid * inNumberDroids;

if (inNumberDroids === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    ` Вы купили ${inNumberDroids} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
