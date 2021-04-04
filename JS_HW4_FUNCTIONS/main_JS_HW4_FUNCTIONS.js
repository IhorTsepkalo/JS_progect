// let bank = 200;
// function exchange (sum, rate = 28) {
//     let dollars = sum/rate
//     return dollars
// }
// let gotDollars = exchange(1000);
// gotDollars=parseInt(gotDollars);
// console.log(gotDollars);
// bank += gotDollars;
// console.log(bank)

// 1) створити функцію яка приймає масив та виводить його
// let anyArr = [1, 'some', true, NaN, null, 24, 'wow'];
//
// function arrayToConsole(whatArrToConsole) {
//     console.log(whatArrToConsole)
// }
//
// arrayToConsole(anyArr);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
//
//function randArrCreate() {
//    let emptyArr = [];
//    for (i = 0; i < 10; i++) {
//        let rundomNumber = Math.random() * (200 - 0) + 0;
//        parsedrunNumber = parseInt(rundomNumber);
//        emptyArr.push(parsedrunNumber);
//    }
//    return emptyArr;
//}
//
//let newArr = randArrCreate()
//arrayToConsole(newArr)
//arrayToConsole(anyArr)
//arrayToConsole(newArr)
//arrayToConsole(newArr)
//arrayToConsole(anyArr)

// 3) створити функцію яка приймає три числа та виводить найбільше. (Без Math.min!)
//
//function biggestNumOf3() {
//    let num1 = +prompt('Введіть перше число');
//    let num2 = +prompt('Введіть друге число');
//    let num3 = +prompt('Введіть третє число');
//    let maxNum = 0;
//    if (num1 > num2 || num1 > num3) {
//        maxNum = num1;
//    }
//    else if (num2 > num3) {
//        maxNum = num2;
//    }
//    else {
//        maxNum = num3;
//    }
//    return maxNum
//}
//
//let biggestNum1 = biggestNumOf3()
//console.log(biggestNum1)
//
//let biggestNum2= biggestNumOf3()
//console.log(biggestNum2)

// 4)  створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
//function smalestNumOf3() {
//    let num1 = +prompt('Введіть перше число');
//    let num2 = +prompt('Введіть друге число');
//    let num3 = +prompt('Введіть третє число');
//    let minNum = 0;
//    if (num1 < num2 || num1 < num3) {
//        minNum = num1;
//    }
//    else if (num2 < num3) {
//        minNum = num2;
//    }
//    else {
//        minNum = num3;
//    }
//    return minNum
//}
//
//let smalrstNum1 = smalestNumOf3()
//console.log(smalrstNum1)
//
//let biggestNum3= biggestNumOf3()
//console.log(biggestNum3)

// 5) створити функцію яка повертає найбільше число з масиву
//  let numbersArr1 = [8,1,4,12];
//   function biggestFromArr (whatArrToChek) {
//      let max = Math.max(...whatArrToChek);
//       console.log(max);
//        }
//   biggestFromArr(numbersArr1);
//
//   let a = [1,55,46];
//   biggestFromArr(a);
//
//  let g = [55,100];
//   biggestFromArr(g);
//
// 6) створити функцію яка повертає найменьше число з масиву
// let numbersOfArr2 = [8,9,4,12];
// function smalestFromArr (whatArrToChek) {
//     let min = Math.min(...whatArrToChek);
//     console.log(min);
// }
// smalestFromArr(numbersOfArr2);
//
// let d = [10,2,3,77];
// biggestFromArr(d);
// smalestFromArr(d);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let arrAverage = [100, 250, 50, 168, 120, 345];
// function sumOfArr (whatArrToSumm) {
// let a = 0;
// for (i = 0; i < whatArrToSumm.length; i++) {
//     a += whatArrToSumm[i]
// }
// console.log(a)
// }
// sumOfArr(arrAverage);
//
// let numbersOfArr2 = [8,9,4,12];
// sumOfArr(numbersOfArr2);
//
// let w = [33,55];
// sumOfArr(w);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrAverage = [100, 250, 50, 168, 120, 345];
//
// function averageOfNums(whatArrToChek) {
//     let a = 0;
//     for (i = 0; i < whatArrToChek.length; i++) {
//         a += whatArrToChek[i];
//     }
//     a = a / whatArrToChek.length;
//     console.log(a);
// }
// averageOfNums(arrAverage);
//
// let numbersOfArr2 = [8,9,4,12];
// averageOfNums(numbersOfArr2);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// let arrOfObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function arrFromObj(whatArrToChek) {
//     let arr = [];
//     for (i = 0; i < whatArrToChek.length; i++) {
//         let a = Object.keys(whatArrToChek[i]);
//         arr.push(a);
//     }
//     console.log(arr)
// }
//
// arrFromObj(arrOfObj);
//
// let arr = [{name: 'Dima', age: 13, weight: 75}, {model: 'Camry'}];
// arrFromObj(arr);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//
// let arrOfObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function arrFromObj(whatArrToChek) {
//     let arr = [];
//     for (i = 0; i < whatArrToChek.length; i++) {
//         let a = Object.values(whatArrToChek[i]);
//         arr.push(a);
//     }
//     console.log(arr)
// }
//
// arrFromObj(arrOfObj)
//
// let arr = [{name: 'Dima', age: 13, weight: 75}, {model: 'Camry'}, {job: 'Dev'}];
// arrFromObj(arr);
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron                       Whisley      '
// let n3 = '    Hermione       Granger      '

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// console.log(n1);
// console.log(n2);
// console.log(n3);

// function gapTrimmer(whatToTrimm) {
//     let trimmed = whatToTrimm.trim();
//     let splited = trimmed.split(' ');
//     let emp = [];
//     for (i = 0; i < splited.length; i++) {
//         if (splited[i] !== '') {
//             emp.push(splited[i]);
//         }
//     }
//     let b = emp.join(' ');
//     console.log(b);
// }
//
// gapTrimmer(n1);
// gapTrimmer(n2);
// gapTrimmer(n3);

