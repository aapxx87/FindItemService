
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


const ubrProb = (str) => {

   const preobrText = str.trim();

   return preobrText;

};



const findFarm = (farm) => {

 if (farm === 'Амелотекс' || farm === 'Гриппферон' || farm === 'Дифлюкан' || farm === 'Зовиракс' || farm === 'Лидокаин спрей' || farm === 'Макмирор' || farm === 'Мидокалм' || farm === 'Микролакс' || farm === 'Млекоин' || farm === 'Найз табл' || farm === 'Но-шпа внутривенно' || farm === 'Но-шпа таблетки' || farm === 'Нурофен экспресс' || farm === 'Нурофен сироп детский' || farm === 'Отофа' || farm === 'Офтагель' || farm === 'Парацетомол' || farm === 'Реаферон-Липинт' || farm === 'Burn free' || farm === 'Hydrocortison' || farm === 'Пластырь детский' || farm === 'Терафлю' || farm === 'Пластырь детский' || farm === 'Пластырь детский' || farm === 'Зостерин-ультра' || farm === 'Ринофлуимуцил' || farm === 'Тантум-Верде спрей' || farm === 'Доктор мом' || farm === 'Панатус форте' || farm === 'Отикапс') {

 return 'Коробка 1';

 }


 if (farm === 'Таваник' || farm === 'Тева мазь' || farm === 'Феррум Лек' || farm === 'Фурацилин' || farm === 'Хофитол' || farm === 'Эмла' || farm === 'Энтерол' || farm === 'Новалгин' || farm === 'Нимесил' || farm === 'Налгезин' || farm === 'Креон' || farm === 'Пивные дрожжи' || farm === 'Фенистил' || farm === 'Тонзилгон' || farm === 'Нурофен крем' || farm === 'Банки под анализы' || farm === 'Троксевазин' || farm === 'Називин детский' || farm === 'Найз крем' || farm === 'Перекись' || farm === 'Жидкий пластырь' || farm === 'Эспумизан детский' || farm === 'Презервативы' || farm === 'Имудон' || farm === 'Бинты' || farm === 'Ацикловир' || farm === 'Кетонал' || farm === 'Бепантен' || farm === 'Граммидин' || farm === 'Калгель' || farm === 'Инфлюнет' || farm === 'Цитавир' || farm === 'Аугументин' || farm === 'Цетрин' || farm === 'Баксет беби' || farm === 'Нафтизин раствор') {

 return 'Коробка 2';

 }


 if (farm === 'Регидрон' || farm === 'Самоклеящийся бинт' || farm === 'Пластырь' || farm === 'Рулон ваты' || farm === 'Фламин' || farm === 'Кетонал свечи' || farm === 'Йод' || farm === 'Зеленка' || farm === 'Ихтиол мазь' || farm === 'Виброцил' || farm === 'Бинт' || farm === 'Хлоргексидин' || farm === 'Перекись' || farm === 'Римантадин' || farm === 'Стрептоцид' || farm === 'Темпалгин' || farm === 'Хофитол капли' || farm === 'Клотримазол' || farm === 'Гиоксизон' || farm === 'Цинковая паста' || farm === 'Энтерофурил' || farm === 'Спиртовая салфетка' || farm === 'Градусник' || farm === 'Маски медицинские' || farm === 'Корнерегель' || farm === 'Вигамокс' || farm === 'Банеоцин мазь' || farm === 'Борная кислота' || farm === 'Пиносол' || farm === 'Эхинацей настойка' || farm === 'Хилок форте' || farm === 'Каптоприл' || farm === 'Касторовое масло' || farm === 'Эмла' || farm === 'Градусник' || farm === 'Амбробене' || farm === 'Мастодинон') {

 return 'Коробка 3';

 }

 if (farm === '') {

   return 'Данного продукта нет'
 }

 else {
   return 'Данного продукта нет'
 }

};


function poisk(){
  let str;
  let result;

  str = document.getElementById('inp_1').value;

  result = findFarm(bigBukwa(ubrProb(str)));

  document.getElementById('result1').innerHTML = result;

  document.location.href = 'https://codepen.io/aapspb1987/live/3505cd9fcbc81a1d6b4d144693542dee';
};


const kont1 = ['Амелотекс', 'Гриппферон', 'Дифлюкан', 'Зовиракс', 'Лидокаин спрей', 'Макмирор', 'Мидокалм', 'Микролакс', 'Млекоин', 'Найз табл', 'Но-шпа внутривенно', 'Но-шпа таблетки', 'Нурофен экспресс', 'Нурофен сироп детский', 'Отофа', 'Офтагель', 'Парацетомол', 'Реаферон-Липинт', 'Burn free', 'Hydrocortison', 'Пластырь детский', 'Терафлю', 'Зостерин-ультра', 'Ринофлуимуцил', 'Тантум-Верде спрей', 'Доктор мом', 'Панатус форте', 'Отикапс'];

const kont2 = ['Таваник', 'Тева мазь', 'Феррум Лек', 'Фурацилин', 'Хофитол', 'Эмла', 'Энтерол', 'Новалгин', 'Нимесил', 'Налгезин', 'Креон', 'Пивные дрожжи', 'Фенистил', 'Тонзилгон', 'Нурофен крем', 'Банки под анализы', 'Троксевазин', 'Називин детский', 'Найз крем', 'Перекись', 'Жидкий пластырь', 'Эспумизан детский', 'Презервативы', 'Имудон', 'Бинты', 'Ацикловир', 'Кетонал', 'Бепантен', 'Граммидин', 'Калгель', 'Инфлюнет', 'Цитавир', 'Аугументин', 'Цетрин', 'Баксет беби', 'Нафтизин раствор'];

const kont3 = ['Регидрон', 'Самоклеящийся бинт', 'Пластырь', 'Рулон ваты', 'Фламин', 'Кетонал свечи', 'Йод', 'Зеленка', 'Ихтиол мазь', 'Виброцил', 'Бинт', 'Хлоргексидин', 'Перекись', 'Римантадин', 'Стрептоцид', 'Темпалгин', 'Хофитол капли', 'Клотримазол', 'Гиоксизон', 'Цинковая паста', 'Энтерофурил', 'Спиртовая салфетка', 'Градусник', 'Маски медицинские', 'Корнерегель', 'Вигамокс', 'Банеоцин мазь', 'Борная кислота', 'Пиносол', 'Эхинацей настойка', 'Хилок форте', 'Каптоприл', 'Касторовое масло', 'Эмла', 'Градусник', 'Амбробене', 'Мастодинон'];



function addmassiv(){
    document.getElementById('rezult').innerHTML = kont1.sort().join("<br>");
    };

function addmassiv1(){
    document.getElementById('rezult').innerHTML = kont2.sort().join("<br>");
    };

function addmassiv2(){
    document.getElementById('rezult').innerHTML = kont3.sort().join("<br>");
    };

