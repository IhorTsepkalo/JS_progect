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

