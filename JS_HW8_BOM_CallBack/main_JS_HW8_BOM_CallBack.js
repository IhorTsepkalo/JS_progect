// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const confBut = document.getElementById('loginBut');
// let logS = document.getElementById('loginW');
// let passS = document.getElementById('passwordK');
//
// confBut.onclick = (ev) => {
//     localStorage.setItem('login', logS.value);
//     localStorage.setItem('password', passS.value);
// }
// logS.value = localStorage.getItem('login');
// passS.value = localStorage.getItem('password');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// let login = document.getElementById('loginW');
// let password = document.getElementById('passwordK');
// let checkCat = document.getElementById('checkboxCat');
// let checkDog = document.getElementById('checkboxDog');
// let radBirdTrue = document.getElementById('radio1');
// let radBirdFalse = document.getElementById('radio2');
// let selectPet = document.getElementById('petSelect');
//
// login.onchange = (ev => localStorage.setItem('login', login.value));
// login.value = localStorage.getItem('login');
// password.onchange = (ev => localStorage.setItem('password', password.value));
// password.value = localStorage.getItem('password');
// checkCat.onchange = (ev => localStorage.setItem('cat', checkCat.value = true));
// checkDog.onchange = (ev => localStorage.setItem('dog', checkDog.value = true));
// radBirdTrue.onchange = (ev => localStorage.setItem('bird', radBirdTrue.value = true));
// radBirdFalse.onchange = (ev => localStorage.setItem('bird', radBirdFalse.value = false));
// selectPet.onchange = (ev => localStorage.setItem('pet', selectPet.value));
// selectPet.value = localStorage.getItem('pet');

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let text = document.getElementById('story');
// let saveBut = document.getElementById('save');
// let forwBut = document.getElementById('forward');
// let backBut = document.getElementById('back');
// let currInd = 0
//
// let arrData = [];
// saveBut.onclick = () => {
//     let data = text.value;
//     let arrData = JSON.parse(localStorage.getItem('version'))
//     arrData.push(data);
//     localStorage.setItem('version', JSON.stringify(arrData))
//     currInd++
// };
// let versions = localStorage.getItem('version');
// let trimmedVer = []
//
// let version = JSON.parse(versions);
// for (let i = 0; i < version.length; i++) {
//     let story = version[i].trim();
//     trimmedVer.push(story)
// }
//
// backBut.onclick = () => {
//     if (currInd - 1 >= 0) {
//         currInd--
//     } else {
//         currInd = trimmedVer.length - 1
//     }
//     text.value = trimmedVer[currInd]
// }
// forwBut.onclick = () => {
//     if (currInd + 1 <= trimmedVer.length-1) {
//         currInd++
//     } else {
//         currInd = 0
//     }
//     text.value = trimmedVer[currInd]
// }


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// let saveButt = document.getElementById('saveProfile');
// let userName = document.getElementById('name');
// let userSecondName = document.getElementById('secondName');
// let userEmail = document.getElementById('email');
// let userCompany = document.getElementById('company');
// let userDepartment = document.getElementById('dep');
// let userBirthday = document.getElementById('birthday');
//
//
// let arr = [];
// saveButt.onclick = () => {
//     let user = {
//         name: userName.value,
//         secondName: userSecondName.value,
//         email: userEmail.value
//     }
//     let data = user;
//     arr.push(data);
//     JSON.parse(localStorage.getItem('user'));
//     localStorage.setItem('user', JSON.stringify(arr));
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//
//     console.log(arr);
// }








