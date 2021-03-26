// 1. створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
//let words = ['january', 'february', 'march', 'april', 'may'];
//let numbers = [1, 2, 3, 4, 5];
//let mix = ['day', 12, true, false, 'm=night'];
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
//let monthes = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
//let i = 0;
//while (i<20) {
//    document.write(`<div><h1>${monthes[i]}</h1></div>`);
//i++
//}

// 6. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//let monthes = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
//let i = 0;
//while (i<20) {
//    i++
//    document.write(`<div><h1>${monthes[i]}</h1></div>`);
//}

// 7. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// for (let i=0;i<numbers.length;i++) {
//     console.log(numbers[i])
// }

// 8. Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let monthes = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october'];
// for (let i=0;i<monthes.length;i++){
//     console.log(monthes[i])
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
// let any = ['january', 3, 'march', true, false, 'june', 45, '50', 'september', 'october'];
// for(let i=0;i<any.length;i++) {
//     if(typeof any[i] === 'number') {
//         document.write(`<div>${any[i]}</div>`)
//     }
//}

// 12. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//let any = ['january', 3, 'march', true, false, 'june', 45, '50', 'september', 'october'];
//for(let i=0;i<any.length;i++) {
//    if (typeof any[i] === 'string') {
//        document.write(`<div>${any[i]}</div>`)
//    }
//}

// 13.  Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let empty = [];
//  empty[0] = 'january';
//  empty[1] = 'february';
//  empty[2] = 'march';
//  empty[3] =4;
//  empty[4] ='june';
//  empty[5] ='july';
//  empty[6] =true;
//  empty[7] ='september';
//  empty[8] =false;
//  empty[9] =48;
// for (let i=0;i<empty.length;i++) {
//     console.log(empty[i])
// }

// 14. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<10;i++) {
//     console.log(i+1)
//     document.write(`<div>${i+1}</div>`)
// }

// 15. Створити цикл for на 100  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i++) {
//     console.log(i+1)
//     document.write(`<div>${i+1}</div>`)
// }

// 16. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i+=2) {
//     console.log(i+1);
//     document.write(`<div>${i+1}</div>`);
// }
// 17.  Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0;i<100;i++) {
//     i++;
//     console.log(i+1);
//     document.write(`<div>${i+1}</div>`);
// }

// 18. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0;i<100;i+=2) {
//     console.log(i+1);
//     document.write(`<div>${i+1}</div>`);
// }

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