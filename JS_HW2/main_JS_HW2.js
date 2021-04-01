// 1. створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
//let words = ['january', 'february', 'march', 'april', 'may'];
//let numbers = [1, 2, 3, 4, 5];
//let mix = ['day', 12, true, false, 'night'];
//console.log(words);
//console.log(numbers);
//console.log(mix);

// 2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let empty = [];
// empty[0] = 'january';
// empty[1] = 'february';
// empty[2] = 'march';
// empty[3] ='april';
// empty[4] ='may';
//for (let i=0;i<empty.length;i++) {
//    console.log(empty[i])
//}

// 3. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині.
//let words = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
//for (let i=0;i<10;i++) {
//    document.write(`<div> ${words[i]}</div>`)
//}

// 4.  За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//let monthes = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
//for (let i=0;i<10;i++) {
//    document.write(`<div>${monthes[i]}</div>`)
//}

// 5. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
// let i = 0;
// while (i<20) {
//     document.write(`<div><h1>${months[i]}</h1></div>`);
// i++
// }

// 6. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september'];
// let i = 0;
// while (i<20) {
//     i++
//     document.write(`<div><h1>${months[i-1]}</h1></div>`);
// }

// 7. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//let numbers = [1,2,3,4,5,6,7,8,9,10];
//for (let i=0;i<numbers.length;i++) {
//    console.log(numbers[i])
//}

// 8. Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october'];
// for (let i=0;i<months.length;i++){
//     console.log(months[i])
// }

// 9. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let any = ['january', 3, 'march', true, false, 'june', 45, '50', 'september', 'october'];
// for (i=0;i<any.length;i++) {
//     console.log(any[i])
// }

// 10. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let any = ['january', 3, 'march', true, false, 'june', 45, '50', 'september', 'october'];
// for(let i=0;i<any.length;i++) {
// if (typeof any[i] ==='boolean') {
//       document.write(`<div>${any[i]}</div>`)
//   }
//}

// 11. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//let any = ['january', 3, 'march', true, false, 'june', 45, '50', 'september', 'october'];
//for(let i=0;i<any.length;i++) {
//    if(typeof any[i] === 'number') {
//        document.write(`<div>${any[i]}</div>`)
//    }
//}

// 12. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//let any = ['january', 3, 'march', true, false, 'june', 45, '50', 'september', 'october'];
//for(let i=0;i<any.length;i++) {
//    if (typeof any[i] === 'string') {
//        document.write(`<div>${any[i]}</div>`)
//    }
//}

// 13.  Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//let empty = [];
// empty[0] = 'january';
// empty[1] = 'february';
// empty[2] = 'march';
// empty[3] =4;
// empty[4] ='june';
// empty[5] ='july';
// empty[6] =true;
// empty[7] ='september';
// empty[8] =false;
// empty[9] =48;
//for (let i=0;i<empty.length;i++) {
//    console.log(empty[i])
//}

// 14. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (let i=0;i<10;i++) {
//    console.log(i)
//    document.write(`<div>${i}</div>`)
//}

// 15. Створити цикл for на 100  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i++) {
//     console.log(i+1)
//     document.write(`<div>${i+1}</div>`)
// }

// 16. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i+=2) {
// console.log(i);
// document.write(`<div>${i}</div>`);
// }
// 17.  Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0;i<=100;i+=2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// 18. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//for (let i=0;i<100;i++) {
//    i++
//    console.log(i);
//    document.write(`<div>${i}</div>`);
//}

// 19. Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//for (let m = 1;m<=2;m++) {
//    for (let s=1;s<60;s++) {
//     console.log(s)
//    }
//    console.log(m)
//}

// 20. Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for(let h = 1;h<=2;h++) {
//     for (let m = 1;m<=60;m++) {
//         for (let s = 1;s<60;s++) {
//             document.write(s)
//         }
//         document.write(`<p><h2>${m}</h2></p>`)
//     }
//     document.write(`<div style="color:red"><h1>${h}</h1></div>`)
// }

/////////////// Додатково

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let word = ['a', 'b', 'c'];
// for (i=0;i<word.length;i++) {
//     document.write(`${word[i]}`)
// }

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//let word = ['a', 'b', 'c'];
//let i = 0;
//while (i<word.length) {
//    i++
//    document.write(`${word[i-1]}`);
//}

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let letters = ['a', 'b', 'c'];
// for (let createdWord of letters) {
//     document.write(`${createdWord}`)
// }

// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let letters = ['a', 'b', 'c'];
// letters [3] = 1;
// letters [4] = 2;
// letters [5] = 3;
// for (let i=0;i<letters.length;i++) {
//     console.log(letters[i]);
//   }

// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let numbers = [1,2,3];
// let reversed = numbers.reverse();
// console.log(reversed);

// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//let numbers = [1,2,3];
//numbers.push(4,5,6);
//console.log(numbers);

// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//let numbers = [1,2,3];
//numbers.unshift(4,5,6);
//console.log(numbers);

// Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//let m = ['js', 'css', 'jq'];
//let shifted = m.shift();
//console.log(shifted);

// n Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let m = ['js', 'css', 'jq'];
// let popped = m.pop();
// console.log(popped);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let numbers = [1,2,3,4,5];
// let fourFive = numbers.slice(3,5);
// console.log(fourFive);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let numbers = [1,2,3,4,5];
// let oneTwo = numbers.slice(0,2);
// console.log(oneTwo);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let numbers = [1,2,3,4,5];
// numbers.splice(1,2);
// console.log(numbers);// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let numbers = [1,2,3,4,5];
// numbers.splice(2,1,3,'a','b','c');
// console.log(numbers);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let numbers = [1,2,3,4,5];
// numbers.splice(0,1,1,'a','b');
// numbers.splice(5,1,4,'c');
// numbers.splice(7,1,5,'e');
// console.log(numbers);

// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// for (let i=0;i<=10;i+=2) {
//     console.log(i);
// }

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let empty = [];
// empty.push(numbers)
// for (let i=0;i<empty.length;i++) {
//     console.log(empty[i])
// }

//  Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//let numbers = [1,2,3,4,5,6,7,8,9,10];
// let empty = [];
// for (empty of numbers) {
//     console.log(empty)
//}

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

//     1. перебрати його циклом while
// let num = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i<num.length) {
//     console.log (num[i])
//     i++
// }

// 2. перебрати його циклом for
//let num = [2,17,13,6,22,31,45,66,100,-18];
//for (i=0;i<num.length;i++) {
//    console.log(num[i])
//}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let num = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i<num.length) {
//     if ([i] % 2 !== 0) {
//     console.log(num[i])}
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let num = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0;i<num.length;i++) {
//     if ([i]%2!==0) {
//         console.log(num[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let num = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<num.length) {
//     if (i%2===0) {
//         console.log(num[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let num = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0;i<num.length;i++) {
//     if (i%2===0) {
//         console.log(num[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let num = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0;i<num.length;i++) {
//     if (i%3===0) {
//         num.splice(i,1,'okten')
//     }
//     console.log(num[i])
// }

// 8. вивести масив в зворотньому порядку.
// let num = [2,17,13,6,22,31,45,66,100,-18];
// let numReversed = num.reverse();
// console.log(numReversed);

//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
//let emptyArr = [];
//for (i=0;i<=50;i+=2) {
//    if (i%2===0) {
//        emptyArr.push(i)
//    }
//    console.log(emptyArr)
//}

// 2. заповнити його 50 непарними числами за допомоги циклу.
//let emptyArr = [];
//for (i=0;i<50;i++) {
//    if (i%2!==0) {
//    emptyArr.push(i)
//        }
//    console.log(emptyArr)
//}

// используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// вывести на консоль  каждый третий елемент
//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let emptyArr = [];
// let newArr = [];
// for (i = 0; i < 20; i++) {
//     let randomArr = Math.random() * (732 - 8) + 8;
//     let randomArrRound = Math.floor(randomArr)
//     newArr.push(randomArrRound)
//     console.log(newArr)
// }
// for (i=0;i<newArr.length;i++) {
//     if (newArr[i]%2===0) {
//         console.log(newArr[i-1])
//     }
// }

// масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

