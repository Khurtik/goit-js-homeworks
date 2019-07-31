'use strict';

// const number = 5;

// let number = 5;

// console.log(number);

// const value = 100;

// const adder = (a, b) => {
//   return a + b;
// };

// adder(value, 5);

// _________________

// const a = 15;

// const b = 10;

// const result = a > b;

// console.log(result);

// ___________________

// let input = prompt('Угадай число от 1 до 10');

// input = Number(input);

// const notCorrect = input >= 1 && input <= 10;

// console.log(notCorrect);

// ___________________

// console.log(5 * '6');

// console.log(5 + 5 + '6');

// ___________________

// const name = 'Mango';
// const age = 2;
// const mood = 'happy';

// const message = `My name is ${name}, I'm ${age} years old and ${mood}.`;

// console.log(message);

// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(firstMonth); // June

// ___________________________

//Task-1

// const name = 'Генератор защтного поля';

// let price = 1000;

// console.log('Выбран «Генератор защитного поля», цена за штуку 1000 кредитов');

// price = 2000;

// console.log('Выбран «Генератор защитного поля», цена за штуку 2000 кредитов');

// ___________________________

// const total = 100;

// const ordered = 50;

// if (ordered >= 100) {
//   console.log('На складе недостаточно товаров!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// ___________________________

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// message = prompt('Введите пароль');

// message = 'Отменено пользователем!';

// console.log(message);

// ___________________________

// const userName = 'Bob';

// const userLastName = 'Dilan';

// console.log(userName, userLastName);

// let isLoggetIn = false;
// isLoggetIn = confirm('Are you loggedin ?');
// if (isLoggetIn) {
//   salary = prompt('enter your salary');
//   console.log(salary);
// }

// ___________________________

// const min = 10;
// const max = 30;
// const value = 125;
// let message;

// if (value < 10) {
//   message = 'Less then 10';
// } else if (value > 10 && value < 50) {
//   message = 'Greater then 10';
// } else {
//   message = ':(';
// }

// console.log(message);

// const isInRange = value > 10 && value < 30;
// console.log(isInRange);

// ___________________________
// let apple = 10;

// const age = prompt('enter your age');

// let apple = 10;

// if (age > 10 && age <= 20) {
//   message = 'child';
// } else if (age > 20 && age <= 50) {
//   message = 'adult';
// } else if (age > 50) {
//   message = 'granny';
// }
// alert(message);

// while (apple >= 0) {
//   console.log('apple=${apple}');
//   apple = apple - 1;
// }

// for (let index = 0; index < apple; index++) {
//   console.log(`index=${index}`);
// }

// const userName = 'Bob';
// const userLastName = 'Dilan';
// const userLogin = 'Bob91';
// const userPassword = 'Dilan91';

// let isUserLoginValid = false;
// let isUserPasswordValid = false;

// while (!isUserLoginValid) {
//   const userInput = prompt('input your login');
//   if (userInput === userLogin) {
//     isUserLoginValid = true;
//     console.log('login');
//   }
// }

{
  /* <script type="module" src="./js/task-01.js" />; */
}

// const name = 'Генератор защтного поля';

// let price = 1000;

// console.log('Выбран «Генератор защитного поля», цена за штуку 1000 кредитов');

// price = 2000;

// console.log('Выбран «Генератор защитного поля», цена за штуку 2000 кредитов');

// ___________________________

// const total = 100;

// const ordered = 50;

// if (ordered >= 100) {
//   console.log('На складе недостаточно товаров!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// ___________________________

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// message = prompt('Введите пароль');

// message = 'Отменено пользователем!';

// console.log(message);

// 'use strict';

// let inNumber = prompt('Ввведите число');

// let input;
// let total = 0;

// const userList = ['car', 'dog', 'cat'];

// let cat = userList[5];
// console.log(`item name is ${cat}`);

// userList[5] = true;
// userList[2] = 'mouse';
// console.log(`Amoung of user ${userList.length}`);

// let userList = ['Bob Dilan', 'Jon Week', 'Tony Stark'];
// for (let i = 0; i < userList.length; i += 1) {
//   console.log(`${i + 1}) User name is ${userList[i]}`);
// }

// for (const user of userList) {
//   console.log(`User name is ${user}`);
// }

//Search for user

// for (const user of userList) {
//   if (user === 'Jon Week') {
//     console.log(`Found user ${user}`);
//     break;
//   }

//   console.log(`User name is ${user}`);
// }

// const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const number of numberList) {
//   if (number % 2 === 0) {
//     console.log(`Number is ${number}`);
//     continue;
//   }

//   console.log(`Number  ${number}`);
// }

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(`Array item[${i}][${j}] =${matrix[i][j]}`);
//   }
// }

// const article = 'I need your clothers, boots and motocycle';

// const wordsArray = article.split(' ');
// const outPutString = wordsArray.join('_');
// console.log(wordsArray.indexOf('boots'));
// console.log(outPutString);

// console.log(userList);
// userList.push('super user');
// console.log(userList.slice(1, 3));

// const userList = ['Cat', 'Dog', 'Mouse'];

// const user = prompt('enter userName');

// if (userList.includes(user)) {
//   alert('User already exest');
// } else {
//   userList.push(user);
//   alert('User was added');
// }

// function expression

// const userList = ['admin', 'manager', 'employe'];

// const isUserPresent = function(user, listOfUser) {
//   return listOfUser.includes(user);
// };

// console.log(getAllUserNames(userList));

// // function declaration

// function getAllUserNames(list) {
//   let result = '';
//   for (let user of list) {
//     result = result + user + ' ';
//   }
//   return result;
// }

// const calculateSquare = function(width = 50, height = 100) {
//   console.log(Array.from(arguments));
//   return width * height;
// };

// const square = calculateSquare(500, 500, 600);

// console.log(square);

const sumAllArguments = function() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
};
const sum = sumAllArguments(50, 40, 30, 20, 10);
console.log(sum);
