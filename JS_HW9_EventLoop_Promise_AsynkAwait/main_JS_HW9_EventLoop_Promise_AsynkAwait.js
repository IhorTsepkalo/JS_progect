// Реалізовуємо робочий день.

// CallBackFunction

// function wakeUp(done, cb) {
//     setTimeout(() => {
//         if (done) {
//             cb(null, 'Now you can have breackfast')
//             return;
//         }
//         cb('Morning procedures first')
//     }, 500)
// }
//
// function haveBreakfast(isDone, cb) {
//     setTimeout(() => {
//         if (isDone) {
//             cb(null, 'Now you can go to work')
//             return;
//         }
//         cb('Breakfast first')
//     }, 0)
//
// }
//
// function goWork(isJobeDone, cb) {
//     setTimeout(() => {
//         if (isJobeDone) {
//             cb(null, 900)
//             return
//         }
//         cb('Make money first')
//     }, 2000)
// }
//
// function byLunch(money, cb) {
//     setTimeout(() => {
//         if (money > 300) {
//             cb(null, 'Enjoy your lunch')
//             cb(null, money - 300)
//             return;
//         }
//         cb('Not enough money to by lunch')
//     }, 2000)
// }
//
// function goCinema(money, cb) {
//     setTimeout(() => {
//         if (money > 200) {
//             cb(null, 'Enjoy your movie')
//             cb(null, money - 200)
//             return;
//         }
//         cb('Not enough money to watch movie')
//     }, 0)
// }
//
//
// wakeUp(true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         haveBreakfast(true, (err, data) => {
//             if (!err) {
//                 console.log(data);
//                 goWork(true, (err, money) => {
//                     if (!err) {
//                         console.log(money);
//                         byLunch(money, (err, money) => {
//                             if (!err) {
//                                 console.log(money);
//                                 goCinema(money, (err, data) => {
//                                     if (!err) {
//                                         console.log(data);
//                                     }
//                                     console.log(err);
//                                 })
//                             }
//                             console.warn(err);
//                         })
//
//                     }
//                     console.warn(err);
//                 })
//             }
//             console.warn(err);
//         })
//     }
//     console.warn(err);
// })


// Promise

// function wakeUp(done) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (done) {
//                 resolve('Now you can have breackfast')
//             }
//             reject('Morning procedures first')
//         }, 500)
//     })
// }
//
// function haveBreakfast(isDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDone) {
//                 resolve('Now you can go to work')
//             }
//             reject('Breakfast first')
//         }, 0)
//     })
// }
//
// function goWork(isJobeDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isJobeDone) {
//                 resolve(900)
//             }
//             reject('Make money first')
//         }, 2000)
//     })
// }
//
// function byLunch(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 300) {
//                 resolve('Enjoy your lunch')
//                 resolve(money - 300)
//             }
//             reject('Not enough money to by lunch')
//         }, 2000)
//     })
// }
//
// function goCinema(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 200) {
//                 resolve('Enjoy your movie')
//             }
//             reject('Not enough money to watch movie')
//         }, 0)
//     })
// }
//
// wakeUp(true)
//     .then(value => {
//         console.log(value)
//         return haveBreakfast(true)
//     })
//     .then(value => {
//         console.log(value)
//         return goWork(true)
//     })
//     .then(value => {
//         console.log(value)
//         return byLunch(value)
//     })
//     .then(value => {
//         console.log(value)
//         return goCinema(10000)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log(reason);
//     })

// GET & SET
// function user() {
//     let age = 20;
//     let name = 'Ol';
//
//     function getAgeName () {
//         return {age, name}
//     }
//
//     function setAgeName(newAge=age, newName=name) {
//         age = newAge;
//         name = newName;
//         return {age, name}
//     }
//
//     return {setAgeName, getAgeName};
// }
//
// let newUser = user();
// console.log(newUser.setAgeName());
//
// counter closures
//
// function counter () {
//     let x =0;
//     return () => {
//         x++
//         console.log(x);
//     }
// }
//
// let count1 = counter();
// count1();
// count1();
//
// let count2 = counter();
// count2()
// count2()
// count2()
// count2()
// count2()










