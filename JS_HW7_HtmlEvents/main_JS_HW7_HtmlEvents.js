console.log(document);
// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
let elementId = document.getElementById('con');

elementId.onclick = (ev => elementId.style.display = `none`);


// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
let button = document.createElement('button')
button.style.backgroundColor = `pink`;
button.style.width = `80px`;
button.style.height = `40px`;
button.style.marginTop = `30px`
button.style.marginLeft = `30px`
document.body.appendChild(button);
button.onclick = (ev => button.style.display = `none`);

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
let inputDiv = document.createElement('div');
inputDiv.innerHTML = '<form name="inputForm">Enter your age: <input style= "width: 30px" type="text" name="age" value=""> </input> <input type = "submit" value = "OK"> </input ></form>'
document.body.appendChild(inputDiv);
inputDiv.style.marginTop = `30px`;
inputDiv.style.marginLeft = `30px`;
let okInput = document.getElementsByTagName("input")[1];
okInput.onclick = (ev) => {
    ev.preventDefault();
    let age = +document.getElementsByTagName("input")[0].value;
    if (age < 18) {
        alert('You are to young')
    }
    console.log(age);
}

// - Створіть меню, яке розгортається/згортається при клику
let body = document.getElementById('body');
body.style.backgroundColor = 'rgb(255,255,255)'
let menuDiv = document.getElementById('menu');
menuDiv.innerHTML = '<div id="nav_item"></div>'
menuDiv.style.width = '100%';
menuDiv.style.marginLeft = '50px';
menuDiv.style.display = 'flex';
menuDiv.style.justifyContent = 'left';
menuDiv.style.columnGap = '50px';

let menuButtonDiv = document.getElementById('nav_item');
let menuButton1 = document.createElement('button');
menuButtonDiv.appendChild(menuButton1);
menuButton1.style.backgroundColor = `rgb(250, 212, 112)`;
menuButton1.style.position = 'relative';
menuButton1.style.width = `90px`;
menuButton1.style.height = `50px`;
menuButton1.style.marginTop = `30px`;
menuButton1.style.marginLeft = `30px`;

let list = document.createElement('div');
list.innerHTML = '<div>vgkjhb</div> <div>vhbjbh</div><div>bhjlbh</div>'
menuButton1.appendChild(list);
list.style.position = 'absolute'
list.style.backgroundColor = 'rgba(250,212,112,0.68)'
list.style.border = '2px solid black';
list.style.borderTop = 'none';
list.style.width = '80px'
list.style.lineHeight = '25px'
list.style.left = '0.5px';
list.style.bottom = '-1px';
list.style.zIndex = '-10';

menuButton1.onclick = () => {
    list.style.bottom = '-75px';
    list.style.zIndex = '1';
    menuButton1.onmouseleave = () => {
        list.style.bottom = '-1px';
        list.style.zIndex = '-10';
    }
}



// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.