// const  idCont = document.getElementById('con');
// console.log(idCont);
// const idRules = document.getElementById('rules');
// console.log(idRules);
// const  idCont = document.getElementById('con');
// console.log(idCont);
// idCont.innerHTML = '<p>Nothing</p>';
// const idRules = document.getElementById('rules');
// console.log(idRules);
// idRules.innerHTML = '<div> Hello </div>'
// idRules.style.backgroundColor = '#adbe10';
// idCont.style.backgroundColor = 'gray';
// const idRules = document.getElementsByClassName('fc bp')
// for (rules of idRules) {
//     console.log(rules)
// }
//  let classRulls = document.getElementsByClassName('fc_rules');
//  console.log(classRulls);
//  for (Rulls of classRulls) {
//      console.log(Rulls)
//      Rulls.style.backgroundColor = 'pink';
//  }
// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//
// for (i = 0; i < users.length; i++) {
//     const userDiv = document.createElement('div');
//     userDiv.innerHTML = `${users[i].name}-${users[i].age}y.o  /${users[i].status}/  `
//     document.body.appendChild(userDiv);
//     const adressDiv = document.createElement('div')
//     document.body.appendChild(adressDiv)
//     const countryDiv = document.createElement('div')
//     document.body.appendChild(countryDiv)
//     countryDiv.innerHTML = `${users[i].address.country}`
//     const cityDiv = document.createElement('div')
//     document.body.appendChild(cityDiv)
//     cityDiv.innerHTML = `${users[i].address.city} `
//     const streetDiv = document.createElement('div')
//     document.body.appendChild(streetDiv)
//     streetDiv.innerHTML = `${users[i].address.street} `
//     const homeDiv = document.createElement('div')
//     document.body.appendChild(homeDiv)
//     homeDiv.innerHTML = `${users[i].address.houseNumber} <hr>`
//     userDiv.style.fontSize = '18px';
//     userDiv.style.lineHeight = '25px';
//     userDiv.style.backgroundColor = '#cfe21d';
//     userDiv.style.marginRight = '50px';
//     console.log(userDiv)
//     console.log(adressDiv)
// }

//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// let mainHader = document.getElementById('main_header');
// mainHader.innerText = 'mon-year';
// mainHader.style.color = '#1e9708';

//     b) робить шириниу елементу ul 400px
// let ulArr = document.getElementsByTagName('ul');
// for (ul of ulArr) {
//     ul.style.width = '400px'
//     ul.style.padding = '0px'
// }

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let ulArr = document.getElementsByClassName('linkList');
// for (ul of ulArr) {
//     ul.style.width = '50%'
// }

//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
// let liArr = document.getElementsByTagName('li');
// for (li of liArr) {
//     li.style.backgroundColor = '#e5e3e3'
// }

//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aArr = document.getElementsByTagName('a');
// for (a of aArr) {
//     a.classList.add('anchor');
//     a.classList.add(`element_${a.innerText}`);
//     if (a.innerText === 'link3') {a.style.fontSize = '40px'};
// }

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHedArr = document.getElementsByClassName('sub-header');
// let backCol = `${prompt('Enter color')}`
// for (subHed of subHedArr) {
//   if (subHed.innerText === 'content 2 segment')  {subHed.style.backgroundColor = backCol}
// }


//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let contArr = document.getElementsByClassName('content_1');
// let anyText = `${prompt('enter text')}`;
// for (text of contArr) {
//     text.innerText = anyText;
// }

//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)


//2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
//  			let rules = [
//  				{
//  					title: 'Первое правило Бойцовского клуба.',
//  					body: 'Никому не рассказывать о Бойцовском клубе.'
//  				},
//  				{
//  					title: 'Второе правило Бойцовского клуба.',
//  					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//  				},
//  				{
//  					title: 'Третье правило Бойцовского клуба.',
//  					body: 'В схватке участвуют только двое.'
//  				},
//  				{
//  					title: 'Четвертое правило Бойцовского клуба.',
//  					body: 'Не более одного поединка за один раз.'
//  				},
//  				{
//  					title: 'Пятое правило Бойцовского клуба.',
//  					body: 'Бойцы сражаются без обуви и голые по пояс.'
//  				},
//  				{
//  					title: 'Шестое правило Бойцовского клуба.',
//  					body: 'Поединок продолжается столько, сколько потребуется.'
//  				},
//  				{
//  					title: 'Седьмое правило Бойцовского клуба.',
//  					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//  				},
//  				{
//  					title: 'Восьмое и последнее правило Бойцовского клуба.',
//  					body: 'Новичок обязан принять бой.'
//  				}
//  			];
//
// function rulesfunc (arrToAdjust) {
//     let rulesDiv = document.createElement('div');
//     document.body.appendChild(rulesDiv);
//     for (rule of rules) {
//         let ruleDiv = document.createElement('div');
//         let titleDiv = document.createElement('div');
//         let bodyDiv = document.createElement('div');
//         rulesDiv.appendChild(ruleDiv);
//         ruleDiv.appendChild(titleDiv);
//         ruleDiv.appendChild(bodyDiv);
//         titleDiv.innerHTML = `<h4>${rule.title}</br>`;
//         bodyDiv.innerText = rule.body;
//         titleDiv.classList.add('ruleTitle')
//     }
//      return rulesDiv;
// }
// rulesfunc (rules);

// - Дано 2 масиви з рівною кількістю об'єктів. З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let joinfunc = function (usersArr, addressArr) {
//     for (user of usersArr) {
//         for (addres of addressArr) {
//             if (user.id === addres.user_id) {
//                 user.address = addres;
//                 delete addres.user_id
//             }
//         }
//     }
//     console.log(usersArr);
//     return user;
// }
//
// let newUserArr = joinfunc(usersWithId, citiesWithId);