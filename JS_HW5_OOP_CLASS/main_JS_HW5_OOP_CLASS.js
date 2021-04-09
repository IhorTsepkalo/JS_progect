// ============================================= Task ==============
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

// class BasicComputer {
//     constructor(name = 'BPC', memory, power) {
//         this.name = name;
//         this.memory = 250;
//         this.power = 300;
//     }
//
//     switchOn() {
//         console.log('Switch on this computer');
//     }
//
// }
//
// let basicComp1 = new BasicComputer(undefined, 250, 3);
// console.log(basicComp1);

// ============================================= Task ==============
//Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

// class Laptop extends BasicComputer {
//     constructor(name = 'LP', memory, power, display) {
//         super(name, memory, power);
//         this.display = display;
//         this.battery = this.power / (this.display * this.memory);
//     }
// }
//
//
// let Laptop1 = new Laptop('laptop1', 500, 3, 19);
// console.log(Laptop1);

// ============================================= Task ==============
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
//

// class MiniLaptop extends Laptop {
//     constructor(name = 'MLP', memory, power, display, weight) {
//         super(name, memory, power, display);
//         this.weight = weight;
//     }
//
//     switchOn() {
//         if (this.weight > 2 && this.battery < 4) {
//             console.warn('Something is wrong');
//         }
//     }
// }
//
// let MiniLaptop1 = new MiniLaptop('ML1', 100, 3, 20, 1);
// console.log(MiniLaptop1);
// MiniLaptop1.switchOn();
// console.log(MiniLaptop1);

// ============================================= Task ==============
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

// class PC extends BasicComputer {
//     constructor(name = 'PC', memory, power, FPC) {
//         super(name, memory, power);
//         this.FPC = this.power / this.memory;
//     }
//
//     startGame() {
//         console.log(`You are playing GAME with ${this.FPC} FPC`)
//     }
//
//     upgradeMemory() {
//         let upgratedMemory = +prompt('How much memory are you adjusting?');
//         if (upgratedMemory > this.memory) {
//             alert(`Sorry.. You can not adjust that much. You can adjust at most ${this.memory}`);
//             console.error(`Sorry.. You can not adjust that much. You can adjust at most ${this.memory}`);
//         } else if (upgratedMemory < 0) {
//             console.error(`Sorry.. You can not decrease the memory`);
//
//         } else {
//             upgratedMemory += this.memory;
//             this.memory = upgratedMemory;
//             console.log(`Great! Your ${this.name} has been upgrated to ${upgratedMemory}`);
//
//         }
//     }
//
//     upgradePower() {
//         let upgratedPower = +prompt('How much power are you adjusting?');
//         if (upgratedPower > this.power * 0.1) {
//             alert(`Sorry.. You can not adjust that much. You can adjust at most ${this.power * 0.1}`);
//             console.error(`Sorry.. You can not adjust that much. You can adjust at most ${this.power * 0.1}`);
//         } else if (upgratedPower < 0) {
//             console.error(`Sorry.. You can not decrease the power`);
//
//         } else {
//             upgratedPower += this.power;
//             this.power = upgratedPower;
//             console.log(`Great! Your ${this.name} power has been upgrated to ${upgratedPower}`);
//         }
//     }
// }
//
// let comp1 = new PC();
// comp1.startGame();
// comp1.switchOn()
// comp1.upgradeMemory();
// comp1.upgradePower();
// console.log(comp1);

// ============================================= Task ==============
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

// class GamingPC extends PC {
//     constructor(name = 'GPC', memory, power, FPC) {
//         super(name, memory, power, FPC);
//         this.FPC = (this.FPC * 2);
//     }
// startGame() {
//     this.power = this.power - (this.power * 0.0001);
// if (this.power < 500 && this.memory < 8) {
//     console.warn('This old buket does not support any games')
// }
// }
// }
// let gamingPC1 = new GamingPC();
// gamingPC1.startGame();
// console.log(gamingPC1);
// gamingPC1.startGame();
// console.log(gamingPC1);

// -------------------------------------------- Робота в аудиторії----------------------------------

// ================================TASK=================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function CarConstructor (model, producer, releaseYear, maxSpeed, engCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.releaseYear = releaseYear;
//     this.maxSpeed = maxSpeed;
//     this.engCapacity = engCapacity;
//
//     this.drive = function () {
//         console.log (`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//     this.info = function () {
//         console.log (`${this.model}, ${this.producer}, ${this.releaseYear}, ${this.maxSpeed}, ${this.engCapacity}`);
//     }
//     this.increaseMaxSpeed = function () {
//         adjSpeed  = +prompt('adjust speed');
//         this.maxSpeed = this.maxSpeed + adjSpeed;
//         console.log (`New max speed is ${this.maxSpeed} km/h`);
//     }
//     this.changeReleaseYear = function () {
//         newValue = +prompt('Change year of car release to... ');
//         this.releaseYear = newValue;
//         console.log (`New year of release is ${this.releaseYear}`);
//     }
//     this.addDriver = function () {
//         this.driver = new Driver(prompt('sex'),prompt('age'), prompt('name'), prompt('expirience'));
//
//     }
//
// }
//
// function Driver (sex, age, name, expirience) {
//     this.sex = sex;
//     this.age = age;
//     this.name = name;
//     this.expirience = expirience;
// }
//
//
//
// let car1 = new CarConstructor('Ford Fiesta', 'Ford Motor Company', 2018, 290, 1500);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed();
// car1.changeReleaseYear();
// car1.addDriver();
// console.log(car1);
//
// let car2 = new  CarConstructor('Ford Escape','Ford Motor Company', 220, 350,2000);
// car2.increaseMaxSpeed();
// car2.info();
// console.log(car2);

// ================================TASK=================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// cinderellaArr = [];
//
// let cinderella1 = new Cinderella('li', 23, 45);
// cinderellaArr.push(cinderella1);
// let cinderella2 = new Cinderella('Jo', 33, 41);
// cinderellaArr.push(cinderella2);
// let cinderella3 = new Cinderella('An', 32, 38);
// cinderellaArr.push(cinderella3);
// let cinderella4 = new Cinderella('Nu', 24, 39);
// cinderellaArr.push(cinderella4);
// let cinderella5 = new Cinderella('Mi', 23, 39);
// cinderellaArr.push(cinderella5);
// let cinderella6 = new Cinderella('Sa', 23, 39);
// cinderellaArr.push(cinderella6);
// let cinderella7 = new Cinderella('Xs', 21, 39);
// cinderellaArr.push(cinderella7);
// let cinderella8 = new Cinderella('Zx', 19, 37);
// cinderellaArr.push(cinderella8);
// let cinderella9 = new Cinderella('Kl', 17, 36);
// cinderellaArr.push(cinderella9);
// let cinderella10 = new Cinderella('Ni', 18, 40);
// cinderellaArr.push(cinderella10);
// console.log(cinderellaArr);
//
// class Prince {
//     constructor(name, age, foundShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
// }
//
// let newPrince1 = new Prince('Max', 55, 41);
// console.log(newPrince1);
//
// for (i = 0; i < cinderellaArr.length; i++) {
//     if (newPrince1.foundShoe === cinderellaArr[i].footSize) {
//         console.log(cinderellaArr[i].name)
//     }
// }

// ================================TASK=================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella (name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// cinderellaArr = [];
//
// let cinderella1 = new Cinderella('li', 23, 45);
// cinderellaArr.push(cinderella1);
// let cinderella2 = new Cinderella('Jo', 33, 41);
// cinderellaArr.push(cinderella2);
// let cinderella3 = new Cinderella('An', 32, 38);
// cinderellaArr.push(cinderella3);
// let cinderella4 = new Cinderella('Nu', 24, 39);
// cinderellaArr.push(cinderella4);
// let cinderella5 = new Cinderella('Mi', 23, 39);
// cinderellaArr.push(cinderella5);
// let cinderella6 = new Cinderella('Sa', 23, 39);
// cinderellaArr.push(cinderella6);
// let cinderella7 = new Cinderella('Xs', 21, 39);
// cinderellaArr.push(cinderella7);
// let cinderella8 = new Cinderella('Zx', 19, 37);
// cinderellaArr.push(cinderella8);
// let cinderella9 = new Cinderella('Kl', 17, 36);
// cinderellaArr.push(cinderella9);
// let cinderella10 = new Cinderella('Ni', 18, 40);
// cinderellaArr.push(cinderella10);
// console.log(cinderellaArr);
//
// function Prince (name, age, foundShoe) {
//     this.name = name;
//     this.age = age;
//     this.foundShoe = foundShoe;
//     this.findCinderella = function () {
//         for (i=0;i<cinderellaArr.length;i++) {
//             if (this.foundShoe === cinderellaArr[i].footSize) {
//                 console.log(cinderellaArr[i].name)
//             }
//         }
//     }
// }
//
// let prince1 = new Prince('Alex', 19, 36);
// console.log(prince1);
// prince1.findCinderella();


// -------------------------------------------- Додатково-----------------------------------------

//-  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

// class TagDiscription {
//      constructor(name, performance) {
//          this.nameOfTag = name;
//          this.performanceOfTag = performance;
//          this.attributes = [attr1, attr2, attr4, attr4]
// 
//      }
//  }
// let attr1 = new Attribute('align left', 'Выравнивание заголовка по левому краю.');
// let attr2 = new Attribute('align right', 'Выравнивание заголовка по правому краю');
// let attr3 = new Attribute('align center', 'Выравнивание заголовка по центру');
// let attr4 = new Attribute('align justify', 'Выравнивание заголовка по ширине');
// function Attribute (nameOfAtt, perfOfAtt) {
//      this.nameOfAtt = nameOfAtt;
//      this.perfOfAtt = perfOfAtt;
//  }
// 
//  let h1Tag = new TagDiscription ('h1', 'представляет собой наиболее важный заголовок первого уровня') ;
//      console.log(h1Tag);
