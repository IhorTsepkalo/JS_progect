//- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//
// let textDiv = document.getElementById('con');
// textDiv.onclick = (() => textDiv.style.display = 'none');

//- Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
// let divBut = document.createElement('div');
// document.body.appendChild(divBut);
// divBut.style.width = '30px';
// divBut.style.height = '20px';
// divBut.style.backgroundColor = '#eaa466';
// divBut.innerText = 'OK';
//
// divBut.onclick = (() => divBut.style.display = 'none');

//- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
//
// let ageInp = document.getElementById('inputFormObsc');
// let okBut = document.getElementById('buttObsc');
//
// okBut.onclick = (() => +ageInp.value<18?alert('you are to young'):alert('welcome'));

// - Створіть меню, яке розгортається/згортається при клику
// let divBut = document.createElement('div');
// document.body.appendChild(divBut);
// divBut.style.width = '30px';
// divBut.style.height = '20px';
// divBut.style.backgroundColor = '#eaa466';
// divBut.innerText = 'OK';
//
// let list = document.createElement('ul');
// divBut.appendChild(list);
// let li1 = document.createElement('li');
// li1.innerText = 'wow';
// list.appendChild(li1);
// let li2 = document.createElement('li');
// li2.innerText = 'yes';
// list.appendChild(li2);
// let li3 = document.createElement('li');
// li3.innerText = 'no';
// list.appendChild(li3);
//
// divBut.onclick = (() => list.style.display = 'block');
// divBut.onmouseleave = (() => list.style.display = 'none');

//- Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
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
//
// let comentsDiv = document.createElement('div');
// document.body.appendChild(comentsDiv);
// for (coment of coments) {
//     let comentDiv = document.createElement('div');
//     let titleDiv = document.createElement('div');
//     let bodyDiv = document.createElement('div');
//     comentsDiv.appendChild(comentDiv);
//     comentDiv.appendChild(titleDiv);
//     comentDiv.appendChild(bodyDiv);
//     titleDiv.innerText = coment.name;
//     bodyDiv.innerText = coment.body;
//
//     let showBut = document.createElement('button');
//     showBut.innerText = 'show coment';
//     comentDiv.appendChild(showBut);
//     let hideBut = document.createElement('button');
//     hideBut.innerText = 'hide coment';
//     comentDiv.appendChild(hideBut);
//     showBut.onclick = (() => bodyDiv.style.display = 'block');
//     hideBut.onclick = (() => bodyDiv.style.display = 'none')
// }

//- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let inpAge = document.getElementById('inpAge');
// let inpGender = document.getElementById('inpGender');
// let inpHeight = document.getElementById('inpHeight');
// let inpWeight = document.getElementById('inpWeight');
//
// let submBut = document.getElementById('inpCofButt');
// submBut.innerText = 'submit';
//
// submBut.onclick = (() => {
//     let infoObj = {age: inpAge.value,
//         gender: inpGender.value,
//         height: inpHeight.value,
//         weight: inpWeight.value
//     }
//     console.log(infoObj);
// })

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
// let imgCont = document.getElementById('imgCont');
// let leftBut = document.getElementById('leftBut');
// let rightBut = document.getElementById('rightBut');
//
// let arrOfUrl = [
//     {url: './img/dog1.jpg', alt: 'dog1'},
//     {url: './img/dog2.jpg', alt: 'dog2'},
//     {url: './img/dog3.jpg', alt: 'dog3'}
// ];
//
// let curIndex = 0;
// leftBut.onclick = (() => {
//     if (curIndex - 1 < 0) {
//         curIndex = arrOfUrl.length-1
//     }
//     else {curIndex = curIndex-1}
//
//     imgCont.src = arrOfUrl[curIndex].url
// });
// rightBut.onclick = (() => {
//     if (curIndex + 1 > arrOfUrl.length-1) {
//         curIndex = 0
//     }
//     else {curIndex = curIndex+1}
//
//     imgCont.src = arrOfUrl[curIndex].url
// })

// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
//
// let contDiv = document.createElement('div');
// document.body.appendChild(contDiv);
//
// let contDivs = document.getElementsByTagName("h2");
//
// for (contItem of contDivs) {
//     let contDivItem = document.createElement('a');
//     contDiv.appendChild(contDivItem);
//     contDivItem.innerHTML = `<a href = "#rulesOf"> ${contItem.innerHTML} <br> </a>`
//
//     contDivItem.onclick = (() => {
//
//     })
// }

