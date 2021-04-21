
//////////// Home Work////////////////////

// console.log(document);
// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// let elementId = document.getElementById('con');
// elementId.onclick = (ev => elementId.style.display = `none`);
//

// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// let button = document.createElement('button')
// button.style.backgroundColor = `pink`;
// button.style.width = `80px`;
// button.style.height = `40px`;
// button.style.marginTop = `30px`
// button.style.marginLeft = `30px`
// document.body.appendChild(button);
// button.onclick = (ev => button.style.display = `none`);

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// let inputDiv = document.createElement('div');
// inputDiv.innerHTML = '<form name="inputForm">Enter your age: <input style= "width: 30px" type="text" name="age" value=""> </input> <input type = "submit" value = "OK"> </input ></form>'
// document.body.appendChild(inputDiv);
// inputDiv.style.marginTop = `30px`;
// inputDiv.style.marginLeft = `30px`;
// let okInput = document.getElementsByTagName("input")[1];
// okInput.onclick = (ev) => {
//     ev.preventDefault();
//     let age = +document.getElementsByTagName("input")[0].value;
//     if (age < 18) {
//         alert('You are to young')
//     }
//     console.log(age);
// }

// - Створіть меню, яке розгортається/згортається при клику
// let body = document.getElementById('body');
// body.style.backgroundColor = 'rgb(255,255,255)'
// let menuDiv = document.getElementById('menu');
// menuDiv.innerHTML = '<div id="nav_item"></div>'
// menuDiv.style.width = '100%';
// menuDiv.style.marginLeft = '50px';
// menuDiv.style.display = 'flex';
// menuDiv.style.justifyContent = 'left';
// menuDiv.style.columnGap = '50px';
// let menuButtonDiv = document.getElementById('nav_item');
// let menuButton1 = document.createElement('button');
// menuButtonDiv.appendChild(menuButton1);
// menuButton1.style.backgroundColor = `rgb(250, 212, 112)`;
// menuButton1.style.position = 'relative';
// menuButton1.style.width = `90px`;
// menuButton1.style.height = `50px`;
// menuButton1.style.marginTop = `30px`;
// menuButton1.style.marginLeft = `30px`;
//
// let list = document.createElement('div');
// list.innerHTML = '<div>vgkjhb</div> <div>vhbjbh</div><div>bhjlbh</div>'
// menuButton1.appendChild(list);
// list.style.position = 'absolute'
// list.style.backgroundColor = 'rgba(250,212,112,0.68)'
// list.style.border = '2px solid black';
// list.style.borderTop = 'none';
// list.style.width = '80px'
// list.style.lineHeight = '25px'
// list.style.left = '0.5px';
// list.style.bottom = '-1px';
// list.style.zIndex = '-10';
//
// menuButton1.onclick = () => {
//     list.style.bottom = '-75px';
//     list.style.zIndex = '1';
//     menuButton1.onmouseleave = () => {
//         list.style.bottom = '-1px';
//         list.style.zIndex = '-10';
//     }
// }
//

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// let coments = [{
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// },
//     {
//         "postId": 1,
//         "id": 2,
//         "name": "quo vero reiciendis velit similique earum",
//         "email": "Jayne_Kuhic@sydney.com",
//         "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//         "postId": 1,
//         "id": 3,
//         "name": "odio adipisci rerum aut animi",
//         "email": "Nikita@garfield.biz",
//         "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//     },
//     {
//         "postId": 1,
//         "id": 4,
//         "name": "alias odio sit",
//         "email": "Lew@alysha.tv",
//         "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//     },
//     {
//         "postId": 1,
//         "id": 5,
//         "name": "vero eaque aliquid doloribus et culpa",
//         "email": "Hayden@althea.biz",
//         "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
//     },
//     {
//         "postId": 2,
//         "id": 6,
//         "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
//         "email": "Presley.Mueller@myrl.com",
//         "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
//     },];
// let conDiv = document.getElementById('coment');
// coments.forEach(item => {
//     let p = document.createElement('p');
//     let header = document.createElement('h1');
//     let divHed = document.createElement('div');
//     let showButton = document.createElement('button');
//     let hideButton = document.createElement('button');
//     hideButton.innerHTML = 'hide coment';
//     showButton.innerHTML = 'show coment';
//     showButton.style.marginLeft = '20px';
//     header.innerHTML = item.name;
//     p.innerHTML = item.body;
//     conDiv.appendChild(divHed);
//     divHed.appendChild(header);
//     divHed.appendChild(hideButton);
//     divHed.appendChild(showButton);
//     conDiv.appendChild(p);
//
//     hideButton.onclick = (ev => p.style.display = 'none');
//     showButton.onclick = (ev => p.style.display = 'block');
// });

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let inpButt = document.getElementById('inpCofButt');
// inpButt.innerHTML = '<p>Confirm</p>'
// inpButt.style.marginTop = '15px';
// inpButt.style.marginBottom = '15px';
//
// let inpForm1 = document.getElementById('form1');
// inpForm1.style.marginTop = '30px';
// let inpForm2 = document.getElementById('form2');
// inpForm2.style.marginTop = '15px';
//
// let inpAge = document.getElementById('inpAge');
// let inpGender = document.getElementById('inpGender');
// let inpHeight = document.getElementById('inpHeight');
// let inpWeight = document.getElementById('inpWeight');
//
// inpButt.onclick = (ev) => {
//     let data = {
//         age: +inpAge.value,
//         gender: inpGender.value,
//         height: +inpHeight.value,
//         weight: +inpWeight.value
//     }
//     console.log(data);
// };

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// let tableEl = document.getElementById('table');
// const createTable = (str, col, targetTagId) => {
//     let target = document.getElementById(targetTagId);
//     let table = document.createElement('table');
//     for (let i = 0; i < str; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < col; j++) {
//             let td = document.createElement('td');
//             td.innerText = `${i} - ${j}`
//             table.appendChild(td);
//         }
//         table.appendChild(tr)
//     }
//     target.appendChild(table);
// }
// createTable(3, 2, 'table');

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
// let imgCont = document.getElementById('imgCont');
// let rightButt = document.getElementById('rightBut');
// let leftButt = document.getElementById('leftBut');
//
// const imgArr = [
//     {
//         alt: 'cat1',
//         url: './img/dog1.jpg',
//     },
//     {
//         alt: 'cat2',
//         url: './img/dog2.jpg',
//     },
//     {
//         alt: 'cat3',
//         url: './img/dog3.jpg',
//     }
// ]
// currentInd = 0;
// leftButt.onclick = () => {
//     if (currentInd - 1 < 0) {
//         currentInd = imgArr.length - 1;
//     } else {
//         currentInd = currentInd - 1;
//     }
//     imgCont.src = imgArr[currentInd].url
// }
// rightButt.onclick = () => {
//     if (currentInd + 1 > imgArr.length - 1) {
//         currentInd = 0;
//     } else {
//         currentInd = currentInd + 1;
//     }
//     imgCont.src = imgArr[currentInd].url
// }
//
////////// Class Work////////////////////

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова
//     Перевірку робити при натисканні на кнопку

// let obscWords = ['сука', 'дибіл', 'придурок'];
// let inputFormObsc = document.getElementById('inputFormObsc');
// let okBut = document.getElementById('buttObsc');
// let inpWord = document.getElementById('inputFormObsc');
//
// okBut.onclick =  () => {
//     for (obsWord of obscWords) {
//         let inpStr = inpWord.value.toLowerCase();
//         obsWord == inpStr ? alert ('obscence language') : console.log(inpWord.value)
//         inpStr.includes(obsWord) ? alert ('obscence language') : console.log(inpWord.value)
//     }
//   }

// range button
//   let rangeBut = document.getElementById('vol');
// rangeBut.onchange = (ev => console.log(rangeBut.value));
//
//
// console.log(navigator);

// getting coordinates
// navigator.geolocation.getCurrentPosition( (data) => {
//     console.log(data.coords.latitude);
//     console.log(data.coords.longitude);
// })

// getting video from webcam
// const video = document.getElementById('video');
// navigator.mediaDevices
//     .getUserMedia( {video: false, audio: false})
//     .then(stream => {
//         video.srcObject = stream;
//         video.play();
//     });

// localStorage.setItem('name', 'Ihor');
// let name = localStorage.getItem('name');
// console.log(name);
// localStorage.clear();
//
//
