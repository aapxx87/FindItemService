
const bigBukwa = (str) => {

if (str[0] ===  str[0].toUpperCase()) {

  return str;
}

if (str[0] !== str[0].toUpperCase()) {

   const newString = str[0];
   const newString2 = str[0].toUpperCase();
   const body = str.slice(1);
   const newString3 = newString2 + body;
   return newString3;

}

};

const findFarm = (farm) => {

 if (farm === 'Амелотекс' || farm === 'Гриппферон' || farm === 'Дифлюкан' || farm === 'Зовиракс' || farm === 'Лидокаин спрей' || farm === 'Макмирор' || farm === 'Мидокалм' || farm === 'Микролакс' || farm === 'Млекоин' || farm === 'Найз табл' || farm === 'Но-шпа внутривенно' || farm === 'Но-шпа таблетки' || farm === 'Нурофен экспресс' || farm === 'Нурофен сироп детский' || farm === 'Отофа' || farm === 'Офтагель' || farm === 'Парацетомол' || farm === 'Реаферон-Липинт' || farm === 'Burn free' || farm === 'Hydrocortison' || farm === 'Пластырь детский' || farm === 'Терафлю' || farm === 'Пластырь детский' || farm === 'Пластырь детский' || farm === 'Зостерин-ультра' || farm === 'Ринофлуимуцил' || farm === 'Тантум-Верде спрей' || farm === 'Доктор мом' || farm === 'Панатус форте' || farm === 'Отикапс') {
 return 'Коробка 1';
 }


 if (farm === 'Таваник' || farm === 'Тева мазь' || farm === 'Феррум Лек' || farm === 'Фурацилин' || farm === 'Хофитол' || farm === 'Эмла' || farm === 'Энтерол' || farm === 'Новалгин' || farm === 'Нимесил' || farm === 'Налгезин' || farm === 'Креон' || farm === 'Пивные дрожжи' || farm === 'Фенистил' || farm === 'Тонзилгон' || farm === 'Нурофен крем') {
 return 'Коробка 2';
 }


 if (farm === 'Регидрон' || farm === 'Самоклеящийся бинт' || farm === 'Пластырь' || farm === 'Рулон ваты' || farm === 'Фламин' || farm === 'Кетонал свечи' || farm === 'Йод' || farm === 'Зеленка' || farm === 'Ихтиол мазь' || farm === 'Виброцил') {
 return 'Коробка 3';
 }


 else {
   return 'Данного продукта нет'
 }

};


function poisk(){
  let str;
  let result;

  str = document.getElementById('inp_1').value;

  result = findFarm(bigBukwa(str));

  document.getElementById('result1').innerHTML = result;
};
