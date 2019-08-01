'use strict';

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

let inCountry = prompt('В какую страну вы хотите оформить доставку?');

if (inCountry === null) {
  console.log('Отменено пользователем');
} else {
  switch (inCountry.toLowerCase()) {
    case 'china':
      console.log(`Доставка в China  будет стоить ${priceChina} кредитов`);

      break;

    case 'chile':
      console.log(`Доставка в Chile  будет стоить ${priceChile} кредитов`);

      break;

    case 'australia':
      console.log(
        `Доставка в Australia  будет стоить ${priceAustralia} кредитов`,
      );

      break;

    case 'india':
      console.log(`Доставка в India  будет стоить ${priceIndia} кредитов`);

      break;

    case 'jamaica':
      console.log(`Доставка в Jamaica  будет стоить ${priceJamaica} кредитов`);

      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}
