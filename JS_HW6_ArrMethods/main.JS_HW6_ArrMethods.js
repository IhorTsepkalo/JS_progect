// ------------ Task ----------------------------
// 1) Створити масив з 20 чисел та:
//  a) відсортувати його від меншого до більшого.
//  b) відсортувати його від більшого до меншого.
//  c) Відфілтрувати числа які є кратними 3.
//  d) Відфілтрувати числа які є більшими за 10.
//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
//  g) Порахувати загальну суму всіх елментів у масиві (reduce)

let numsArr = [];
for (i = 0; i < 20; i++) {
    let randNum = Math.round(Math.random() * (50 - 0) + 0);
    numsArr.push(randNum);
}
console.log(numsArr);

let numsArrSortAZ = numsArr.sort((a, b) => a - b);
console.log(numsArrSortAZ);

let numsArrSortZA = numsArr.sort((a, b) => b - a);
console.log(numsArrSortZA);

let numsArrFilter2 = numsArr.filter(value => value % 3 === 0);
console.log(numsArrFilter2);

let numsArrFilter1 = numsArr.filter(value => value > 10);
console.log(numsArrFilter1);

let numsArrForEach = numsArr.forEach(value => {
    document.write(value);
    document.write(`<br/>`);
});

let numsArrMap = numsArr.map(value => value * 3);
console.log(numsArrMap);

let mumsArrSumReduce = numsArr.reduce((acc, currentValue) => acc + currentValue);
console.log(mumsArrSumReduce);

// ------------ Task ----------------------------
// 2) Створити масив з 20 стрічок та:
// a) Відсортувати його в алфавітному порядку
// b) Відсортувати в зворотньому порядку
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

let strArr = ['Alex', 'Viktor', 'Andrew', 'Stas', 'Max', 'Taras', 'Nazar', 'Kolya', 'Petro', 'Oleg', 'Anya', 'Ira', 'Zoryana', 'Alina', 'Aika', 'Oxana', 'Olya', 'Vika', 'Nadya', 'Sonya'];
console.log(strArr);

//a) Відсортувати його в алфавітному порядку
let strArrSortedAZ = strArr.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    return -1;
});
console.log(strArrSortedAZ);

// b) Відсортувати в зворотньому порядку
let strArrSortedZA = strArr.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    return -1;
});
console.log(strArrSortedZA);

let strArrFiltered = strArr.filter(value => value.length > 4);
console.log(strArrFiltered);

let strArrSamSays = strArr.map(value => `Sam says ${value}`);
console.log(strArrSamSays);

// ------------ Task ----------------------------
// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//    {name: 'vasya', age: 31, isMarried: false},
//    {name: 'petya', age: 30, isMarried: true},
//    {name: 'kolya', age: 29, isMarried: true},
//    {name: 'olya', age: 28, isMarried: false},
//    {name: 'max', age: 30, isMarried: true},
//    {name: 'anya', age: 31, isMarried: false},
//    {name: 'oleg', age: 28, isMarried: false},
//    {name: 'andrey', age: 29, isMarried: true},
//    {name: 'masha', age: 30, isMarried: true},
//    {name: 'olya', age: 31, isMarried: false},
//    {name: 'max', age: 31, isMarried: true}
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//
const usersToModify = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

// a) відсортувати його за  віком (зростання)
let usersSortedByAgeAZ = [];
for (user of usersToModify) {
    usersSortedByAgeAZ.push(user);
}
usersSortedByAgeAZ.sort((a, b) => {
    if (a.age > b.age) {
        return 1;
    }
    return -1;
});
console.log(usersSortedByAgeAZ);

// b) відсортувати його за віком (спадання)
let usersSortedByAgeZA = [];
for (user of usersToModify) {
    usersSortedByAgeZA.push(user);
}
usersSortedByAgeZA.sort((a, b) => {
    if (a.age < b.age) {
        return 1;
    }
    return -1;
});
console.log(usersSortedByAgeZA);

// b) відсортувати його за кількістю знаків в імені  (зростання)
let userSortedByNameLenghthAZ = [];
for (user of usersToModify) {
    userSortedByNameLenghthAZ.push(user)
}
userSortedByNameLenghthAZ.sort((a, b) => {
    if (a.name.length > b.name.length) {
        return 1;
    }
    return -1;
});
console.log(userSortedByNameLenghthAZ);

// b) відсортувати його за кількістю знаків в імені  (спадання)
let userSortedByNameLenghthZA = [];
for (user of usersToModify) {
    userSortedByNameLenghthZA.push(user)
}
userSortedByNameLenghthZA.sort((a, b) => {
    if (a.name.length < b.name.length) {
        return 1;
    }
    return -1;
});
console.log(userSortedByNameLenghthZA);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//   та зберегти це в новий масив (первинний масив залишиться без змін)
let usersWithID = [];
for (user1 of usersToModify) {
    usersWithID.push(user1)
}
let usersStr = JSON.stringify(usersToModify);
usersWithID.map((value, index) => {
    value.id = index + 1;
    return value
});
console.log(usersStr);
console.log(usersWithID);
let users = JSON.parse(usersStr);
console.log(users);

// d) відсортувати його за індентифікатором
let usersSortedByID = [];
for (user1 of usersToModify) {
    usersSortedByID.push(user1)
}
usersSortedByID.sort((a, b) => {
    if (a.id > b.id) {
        return 1
    }
    return -1
});
console.log(usersSortedByID);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let usersWithFlat = usersToModify.reduce((acc, currenValue) => {
    if (currenValue.isMarried) {
        currenValue.flat = true;
        acc.push(currenValue)
    }
    return acc
}, []);
console.log(usersWithFlat);

// -------------------------------------- РОБОТА В АУДИТОРІЇ-------------------------------------

const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];

//---------------------- Відфільтрувати масив за наступними крітеріями: двигун більше 3х літрів
let carsVolume = cars.filter((value => value.volume > 3));
console.log(carsVolume);

//---------------------- Відфільтрувати масив за наступними крітеріями: двигун = 2л
let carsVolume2 = cars.filter((value => value.volume = 2));
console.log(carsVolume2);

//---------------------- Відфільтрувати масив за наступними крітеріями: виробник мерс.
let carsMerc = cars.filter((value => value.producer === 'mercedes'));
console.log(carsMerc);

//---------------------- Відфільтрувати масив за наступними крітеріями: двигун більше 3х літрів + виробник мерседес
let carsVolMerc = cars.filter((value => value.producer === 'mercedes' && value.volume > 3));
console.log(carsVolMerc);

//---------------------- Відфільтрувати масив за наступними крітеріями: двигун більше 3х літрів + виробник субару
let carsVolumeSub = cars.filter((value => value.volume > 3 && value.producer === 'subaru'));
console.log(carsVolumeSub);

//---------------------- Відфільтрувати масив за наступними крітеріями: сили більше ніж 300
let carsPower = cars.filter((value => value.power > 300));
console.log(carsPower);

//---------------------- Відфільтрувати масив за наступними крітеріями: cили більше ніж 300 + виробник субару
let carsPowerSub = cars.filter((value => value.power > 300 && value.producer === 'subaru'));
console.log(carsPowerSub);

//---------------------- Відфільтрувати масив за наступними крітеріями: мотор серіі ej
let carsEngine = cars.filter((value => value.engine.startsWith('ej')));
console.log(carsEngine);

//---------------------- Відфільтрувати масив за наступними крітеріями: двигун меньше 3х літрів + виробник мерседес
let carsVolLessMerc = cars.filter((value => value.volume < 3 && value.producer === 'mercedes'));
console.log(carsVolLessMerc);

//---------------------- Відфільтрувати масив за наступними крітеріями: двигун більше 2л + сили більше 250
carsVolMoreBmw = cars.filter((value => value.volume > 2 && value.power > 250));
console.log(carsVolMoreBmw);

//---------------------- Відфільтрувати масив за наступними крітеріями: сили більше 250  + виробник бмв
carsPowerBmw = cars.filter((value => value.power > 250 && value.producer === 'bmw'));
console.log(carsPowerBmw);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

//---------------------- Відсортувати їх по ID
usersWithAddressByIdAZ = usersWithAddress.sort((a, b) => a.id - b.id);
console.log(usersWithAddressByIdAZ);

//-------------------------Відсортувати їх по ID в зворотньому порядку
let usersWithAddressByIdZA = usersWithAddress.sort((a, b) => b.id - a.id);
console.log(usersWithAddress);

//-------------------------Відсортувати по віку
let usersWithAddressByAgeAZ = usersWithAddress.sort((a, b) => a.age - b.age);
console.log(usersWithAddressByAgeAZ);

//-------------------------Відсортувати по віку в зворотньому порядку
let usersWithAddressByAgeZA = usersWithAddress.sort((a, b) => b.age - a.age);
console.log(usersWithAddressByAgeZA);

//-------------------------Відсорутвати по імені
let usersWithAddressByName = usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    }
    return -1
});
console.log(usersWithAddressByName);

//-------------------------Відсорутвати по назві вулиці
let userusersWithAddressByStreet = usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1
    }
    return -1
});
console.log(userusersWithAddressByStreet);

//-------------------------Відсорутвати по номеру будинку
let userusersWithAddressByNumber = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
console.log(userusersWithAddressByNumber);

//-------------------------Залигити тільки тих, хто молодший ніж 30 (filter)
let userusersWithAddressByAgeLess30 = usersWithAddress.filter(value => value.age < 30);
console.log(userusersWithAddressByAgeLess30);

//-------------------------Залишити тільки одружених
let userusersWithAddressMarriedByAgeLess30 = usersWithAddress.filter(value => value.isMarried);
console.log(userusersWithAddressMarriedByAgeLess30);

//-------------------------Залишити тільки одружених, які молодні за 30
let userusersWithAddressMarriedAgeLess30 = usersWithAddress.filter(value => value.isMarried && value.age < 30);
console.log(userusersWithAddressMarriedAgeLess30);

//-------------------------Залишити лише тих, в кого парні номери будинків.
let userusersWithAddressNumberEven = usersWithAddress.filter(value => value.address.number % 2 === 0);
console.log(userusersWithAddressNumberEven);

//-------------------------Порахувати загальний вік всіх людей. (reduce)
let userusersWithAddressTotalAge = usersWithAddress.reduce((acc, currentValue) => {
    return acc + currentValue.age;
}, 0);
console.log(userusersWithAddressTotalAge);

//-------------------------Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
let usersWithAddressMarriedAgeMore30Child = usersWithAddress.reduce((acc, curentValue) => {
   if (curentValue.isMarried && curentValue.age > 30) {
       curentValue.child = true;

       acc.push(curentValue);
   }
   return acc
},[]);
console.log(usersWithAddressMarriedAgeMore30Child);



