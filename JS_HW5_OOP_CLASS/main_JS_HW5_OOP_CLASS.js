// ============================================= Task ==============
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

class BasicComputer {
    constructor(name = 'BPC', memory, power) {
        this.name = name;
        this.memory = 250;
        this.power = 300;
    }

    switchOn() {
        console.log('Switch on this computer');
    }

}

let basicComp1 = new BasicComputer(undefined, 250, 3);
console.log(basicComp1);
// ============================================= Task ==============
//Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends BasicComputer {
    constructor(name = 'LP', memory, power, display) {
        super(name, memory, power);
        this.display = display;
        this.battery = this.power / (this.display * this.memory);
    }
}


let Laptop1 = new Laptop('laptop1', 500, 3, 19);
console.log(Laptop1);

// ============================================= Task ==============
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
//

class MiniLaptop extends Laptop {
    constructor(name = 'MLP', memory, power, display, weight) {
        super(name, memory, power, display);
        this.weight = weight;
    }

    switchOn() {
        if (this.weight > 2 && this.battery < 4) {
            console.warn('Something is wrong');
        }
    }
}

let MiniLaptop1 = new MiniLaptop('ML1', 100, 3, 20, 1);
console.log(MiniLaptop1);
MiniLaptop1.switchOn();
console.log(MiniLaptop1);

// ============================================= Task ==============
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class PC extends BasicComputer {
    constructor(name = 'PC', memory, power, FPC) {
        super(name, memory, power);
        this.FPC = this.power / this.memory;
    }

    startGame() {
        console.log(`You are playing GAME with ${this.FPC} FPC`)
    }

    upgradeMemory() {
        let upgratedMemory = +prompt('How much memory are you adjusting?');
        if (upgratedMemory > this.memory) {
            alert(`Sorry.. You can not adjust that much. You can adjust at most ${this.memory}`);
            console.error(`Sorry.. You can not adjust that much. You can adjust at most ${this.memory}`);
        } else if (upgratedMemory < 0) {
            console.error(`Sorry.. You can not decrease the memory`);

        } else {
            upgratedMemory += this.memory;
            this.memory = upgratedMemory;
            console.log(`Great! Your ${this.name} has been upgrated to ${upgratedMemory}`);

        }
    }

    upgradePower() {
        let upgratedPower = +prompt('How much power are you adjusting?');
        if (upgratedPower > this.power * 0.1) {
            alert(`Sorry.. You can not adjust that much. You can adjust at most ${this.power * 0.1}`);
            console.error(`Sorry.. You can not adjust that much. You can adjust at most ${this.power * 0.1}`);
        } else if (upgratedPower < 0) {
            console.error(`Sorry.. You can not decrease the power`);

        } else {
            upgratedPower += this.power;
            this.power = upgratedPower;
            console.log(`Great! Your ${this.name} power has been upgrated to ${upgratedPower}`);
        }
    }
}

let comp1 = new PC();
comp1.startGame();
comp1.switchOn()
comp1.upgradeMemory();
comp1.upgradePower();
console.log(comp1);

// ============================================= Task ==============
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class GamingPC extends PC {
    constructor(name = 'GPC', memory, power, FPC) {
        super(name, memory, power, FPC);
        this.FPC = (this.FPC * 2);

    }
if (startGame) {
    this.power = this.power*0.0001;
}
}

let gamingPC1 = new GamingPC();
gamingPC1.startGame();
console.log(gamingPC1);
