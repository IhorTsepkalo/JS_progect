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
//  function biggestNumOf3(num1,num2,num3) {
//     num1 = +prompt('Введіть перше число');
//     num2 = +prompt('Введіть друге число');
//     num3 = +prompt('Введіть третє число');
//      let maxNum = 0;
//      if (num1 > num2 || num1 > num3) {
//          maxNum = num1;
//      }
//      else if (num2 > num3) {
//          maxNum = num2;
//      }
//      else {
//          maxNum = num3;
//      }
//      return maxNum;
//  }
//
//  let biggestNum1 = biggestNumOf3()
//  console.log(biggestNum1)
//
// let biggestNum2= biggestNumOf3()
// console.log(biggestNum2)
//
// let biggestNum3= biggestNumOf3();
// console.log(biggestNum3);

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
//   let numbersArr1 = [8,1,4,12];
//    function biggestFromArrMathMax (whatArrToChek) {
//       let max = Math.max(...whatArrToChek);
//        console.log(max);
//        return max;
//         }
//    biggestFromArrMathMax(numbersArr1);
//
//    let a = [1,55,46];
//    biggestFromArrMathMax(a);
//
//   let g = [55,100];
//    biggestFromArrMathMax(g);
//
// Or.............. Without Math.max.............
//
//  let numbersArr1 = [8, 1, 4];
//
//  function biggestFromArr(whatArrToChek) {
//      let max = 0;
//      for (i = 0; i < whatArrToChek.length; i++) {
//
//          if (max < whatArrToChek[i]) {
//              max = whatArrToChek[i];
//          }
//            }
//      return max;
//     }
//  biggestFromArr(numbersArr1);
//  let biggest = biggestFromArr(numbersArr1);
//  console.log(biggest)
//
// let a = [1,55,46];
// biggestFromArr(a);
// console.log(biggestFromArr(a));
//
//
// let g = [55,100];
// biggestFromArr(g);
// console.log(biggestFromArr(g));

// 6) створити функцію яка повертає найменьше число з масиву
//  let numbersOfArr2 = [8,9,4,12];
//  function smalestFromArr (whatArrToChek) {
//      let min = Math.min(...whatArrToChek);
//      console.log(min);
//  }
//  smalestFromArr(numbersOfArr2);
//
//  let d = [10,2,3,77];
// biggestFromArr(d);
// smalestFromArr(d);
//
// Or.............. Without Math.max.............
//
// let numbersArr1 = [8, -9, 9];
// function smalestFromArr(whatArrToChek) {
//     let min = 0;
//     for (i = 0; i < whatArrToChek.length; i++) {
//         if (min > whatArrToChek[i] || min === 0) {
//             min = whatArrToChek[i];
//         }
//     }
//     return min;
// }
// console.log(smalestFromArr(numbersArr1));
// let a = [-1, 55, 46];
// console.log(smalestFromArr(a));
//
//
// let g = [55, 100, -15];
// console.log(smalestFromArr(g));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let arrAverage = [100, 250, 50, 168, 120, 345];
//
// function sumOfArr(whatArrToSumm) {
//     let a = 0;
//     for (i = 0; i < whatArrToSumm.length; i++) {
//         a += whatArrToSumm[i]
//     }
//     console.log(a)
// }
//
// sumOfArr(arrAverage);
//
// let numbersOfArr2 = [8, 9, 4, 12];
// sumOfArr(numbersOfArr2);
//
// let w = [33, 55];
// sumOfArr(w);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//  let arrAverage = [100, 250, 50, 168, 120, 345];
//
//  function averageOfNums(whatArrToChek) {
//      let a = 0;
//      for (i = 0; i < whatArrToChek.length; i++) {
//          a += whatArrToChek[i];
//      }
//      a = a / whatArrToChek.length;
//      return a;
//  }
//  console.log(averageOfNums(arrAverage));
//
//  let numbersOfArr2 = [8,9,4,12];
//  console.log(averageOfNums(numbersOfArr2));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// let arrOfObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function arrFromObjKeys(whatArrToChek) {
//     let arr = [];
//     for (i = 0; i < whatArrToChek.length; i++) {
//         let a = Object.keys(whatArrToChek[i]);
//         arr.push(a);
//     }
//     console.log(arr)
// }
//
// arrFromObjKeys(arrOfObj);
//
// let arr = [{name: 'Dima', age: 13, weight: 75}, {model: 'Camry'}];
// arrFromObj(arr);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//
// let arrOfObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
//   function arrFromObjVal(whatArrToChek) {
//       let arr = [];
//       for (i = 0; i < whatArrToChek.length; i++) {
//           let a = Object.values(whatArrToChek[i]);
//           arr.push(a);
//       }
//        return arr;
//   }
//
//   console.log(arrFromObjVal(arrOfObj));

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron                       Whisley      '
// let n3 = '    Hermione       Granger      '
//
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//
//  console.log(n1);
//  console.log(n2);
//  console.log(n3);
//
//   function gapTrimmer(whatToTrimm) {
//       let trimmed = whatToTrimm.trim();
//       let splited = trimmed.split(' ');
//       let emp = [];
//       for (i = 0; i < splited.length; i++) {
//           if (splited[i] !== '') {
//               emp.push(splited[i]);
//           }
//       }
//       let fullTrimmed = emp.join(' ');
// return fullTrimmed;
//   }
//
//  console.log(gapTrimmer(n1));
//  console.log(gapTrimmer(n2));
//  console.log(gapTrimmer(n3));

/////// Additional tasks////////////////////
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let a = [1, 2, 'd', null, 35,2,5,6,7,4,5,0];
// let b = [2, 3, 4, 5, 5, 5, 55];
// let h = [2, 3, 4, 5, 5, 5, 55, 20, 'h', true];
//
// function sumAB(arr1, arr2) {
//     let c = [];
//     if (arr1.length > arr2.length) {
//         c.length = arr1.length
//     } else {
//         c.length = arr2.length
//     }
//     for (i = 0; i < c.length; i++) {
//         c[i] = arr1[i] + arr2[i];
//
//         if (typeof arr2[i] === "undefined") {
//             c[i] = arr1[i];
//         }
//         if (typeof arr1[i] === "undefined") {
//             c[i] = arr2[i];
//         }
//         if (typeof c[i] !== "number") {
//             c[i] = NaN;
//         }
//     }
//     return c;
// }
//
// console.log(sumAB(a, b));
// console.log(sumAB(a, h));
// console.log(sumAB(h, b));

//  Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function zeroToEnd() {
//     let arr1 = [];
//     let arr2 = [];
//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] !== 0) {
//             arr1.push(arguments[i])
//         } else {
//             arr2.push(arguments[i])
//         }
//     }
//     for (k = 0; k < arr2.length; k++) {
//         arr1.push(arr2[k])
//     }
//     return arr1;
// }
//
// let a = zeroToEnd(1, 3, 5, 6, 0,0,0,0,0,0,0, 5, 6, 7, 8, 0, 7,5,6,7,8,9,0);
// console.log(a);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// function MinMax() {
//     let min = 0;
//     for (i = 0; i < arguments.length; i++) {
//         if (min > arguments[i] || min === 0) {
//             min = arguments[i];
//         }
//     }
//     let max = 0;
//     for (i = 0; i < arguments.length; i++) {
//         if (max < arguments[i]) {
//             max = arguments[i];
//         }
//     }
//     console.log(max);
//     return min;
// }
// let x = MinMax(1,2,3,4,5,-20,333);
// console.log(x);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// let arr = [{name: 'Dima', age: 13, weight:75}, {model: 'Camry'}, {country: 'Ukraine', city:'Lviv'}];
//
// function arrFromObjKeys(whatArrToChek) {
//     let arr = [];
//     for (i = 0; i < whatArrToChek.length; i++) {
//         let a = Object.keys(whatArrToChek[i]);
//         arr.push(a);
//     }
//     return arr;
// }
//
// function arrFromObjVal(whatArrToChek) {
//     let arr = [];
//     for (i = 0; i < whatArrToChek.length; i++) {
//         let a = Object.values(whatArrToChek[i]);
//         arr.push(a);
//     }
//      return arr;
// }
//
// function keysValues (whatToGet) {
//    let a = 0;
//       if (whatToGet === 'keys') {
//        a = console.log(arrFromObjKeys(arr));
//    }
//    else if (whatToGet === 'values') {
//        a = console.log(arrFromObjVal(arr));
//    }
//    else a = console.error('Wrong Input. Please try again');
//    return a;
// }
// keysValues(prompt('Whoud you like to see: keys OR values'));
// keysValues('keys');
// keysValues('values');

// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"
// let num = 3275;
//
// function splitter(whatNumToChange) {
//     str = `${whatNumToChange}`;
//     splited = str.split('');
//     splited.splice(`${splited.length - 2}`, 1, `${splited[splited.length - 2]}0`);
//     splited.splice(`${splited.length - 3}`, 1, `${splited[splited.length - 3]}00`);
//     splited.splice(`${splited.length - 4}`, 1, `${splited[splited.length - 4]}00`);
//     joined = splited.join(' + ')
//
//     console.log(joined);
//     return joined;
// }
//
// splitter(num);

// Вирівняти багаторівневий масив в однорівневий [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9]
// flat використовувати заборонено.
// let arr = [1, 3, ['Hello', 'World', [9, 6, 1]], ['oops'], 9];
// console.log(typeof arr[2])
//
// function toOneLevel(whatArrToChange) {
//     let onelayerArr = [];
//     for (i = 0; i < whatArrToChange.length; i++) {
//         if (typeof whatArrToChange[i] === 'object') {
//             let a = arr[i];
//             for (k = 0; k < a.length; k++) {
//                 if (typeof a[k] === 'object') {
//                     let x = a[k];
//                     for (y = 0; y < x.length; y++) {
//                         m = x[y];
//                         onelayerArr.push(m);
//                     }
//                 } else {
//                     onelayerArr.push(a[k])
//                 }
//             }
//         } else {
//             onelayerArr.push(whatArrToChange[i])
//         }
//     }
//     return onelayerArr;
// }
// console.log(toOneLevel(arr));

