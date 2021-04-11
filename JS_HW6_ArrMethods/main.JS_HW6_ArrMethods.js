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

let numsArrSortAZ = numsArr.sort((a, b) => {
    return a - b;
});
console.log(numsArrSortAZ);

let numsArrSortZA = numsArr.sort((a, b) => {
    return b - a;
});
console.log(numsArrSortZA);

let numsArrFilter2 = numsArr.filter(value => {
    return value % 3 === 0;
});
console.log(numsArrFilter2);

let numsArrFilter1 = numsArr.filter(value => {
    return value > 10;
});
console.log(numsArrFilter1);

let numsArrForEach = numsArr.forEach(value => {
    document.write(value);
    document.write(`<br/>`);
});

let numsArrMap = numsArr.map(value => {
    return value * 3;
});
console.log(numsArrMap);

let mumsArrSumReduce = numsArr.reduce((acc, currentValue) => {
    return acc + currentValue;
});
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

let strArrFiltered = strArr.filter(value => {
    return value.length > 4;
});
console.log(strArrFiltered);

let strArrSamSays = strArr.map(value => {
    return `Sam says ${value}`
});
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
;
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
;
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
;
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
})
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
})
console.log(usersSortedByID);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let usersWithFlat = usersToModify.reduce((acc, currenValue) => {
    if (currenValue.isMarried) {
        currenValue.flat = true;
        acc.push(currenValue)
    }
    return acc
}, [])
console.log(usersWithFlat);
