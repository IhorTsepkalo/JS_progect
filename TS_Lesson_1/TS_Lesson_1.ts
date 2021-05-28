let age: number | string = 32;
age = '23';
age = 11;

function multiply(a: number, b?: number): number//- останній знак :number означає, що ф-ція має повертати тип даних number
                                                // - знак ? у виразі:( b?:number ) означає, що ця змінна не є обовязковою для передачі в аргументах при виклику ф-ції і ф-ція нормально відпрацює.
{
    return a * b
}

let num = multiply(12, 10);
let num2 = multiply(12);
console.log(num);
console.log(num2);

function logger(a: number, b: number): void//  void щзначає, що ф-ція повна(нічого не повертає, а лише виконується)
{
    console.log(a * b);
}

let num1 = logger(2, 4);

console.log(num1); // буде undefined, бо ф-ція logger нічого не повертає. відповідно, ми не маємо що логати

//модифікатори доступу:
// private - найзахищеніший тип даних. їх видно лише в межах поточного класу. за його межами він недоступний.
// protected - тип доступу, який передбачає, що ці дані буде видно в поточному класі і його нащадках.
// public - тип приватності, який передбачає, що дані буде видно всюди

class Car {
    protected year: number;
    private producer: string;
    public power: number = 200;             // після знаку = вказано значення по замовчуванні
    constructor(year: number, producer: string) {
        this.year = year;
        this.producer = producer;
    }

    changePower(newPower: number): void {
        this.power = newPower;
    }
}

class SuperCar extends Car {
    public color: string;

    constructor(year: number, producer: string, color: string) {
        super(year, producer);
        this.color = color
    }
}

const car1 = new Car(2006, 'BMW');
const supercar1 = new SuperCar(2010, 'Volvo', 'black');

console.log(car1);
console.log(supercar1);
car1.changePower(350);
console.log(car1);
supercar1.power = 800;
console.log(supercar1.power);

let user = {
    name: 'An',
    laptop: {
        model: 'Dell',
        memory: 20
    },
    car: {
        year: 2020,
        price: 5000,
        currency: 'USD'
    }
}

console.log(user?.car) // знак ? дає можливість звертатись до обєкта з питанням: "дай мені дані, якщо вони є, а якщо нема, то не вибивай помилку". Допомагає уникати помилок призверненні до чужих обєктів, які можуть повертати не завжди однакову дані. Якщо певного ключа в обєкті не існує, то повернеться undefined

let names: string[] = ['Vova', 'Anton', 'Viktor'];
let names2: Array<string> = ['Vova', 'Anton', 'Viktor']; //Array<string> - дженерік. Array<string> = string[]. Джунеріки використовуються в промісах.
names = ['Om'];
names2 = ['33'];

// Інтерфейси: дають можливість захистити себе від помилок. Описує форму і тип даних(обєктів) які приходять
// ENUM - дають можливість обмежити вибір даних. Наприклад для вказання статі ENAM дасть можливість обмежити вибір: чоловік/жінка
// Partial - ставить біля всіх ключів Ікласу знак ?. Це означає, що ці ключі не обовязкові для заповнення при отриманні обєкта.

enum EGender {
    Male = 'male',
    Female = 'female'
}

interface Icar {
    model: string,
    year: number
}

interface IName {
    age: number,
    name: string,
    gender?: EGender,
    wife?: boolean,
    car: Icar
}

function nameslogger(names: Array<IName>): void {
    names.forEach((value) => {
        console.log(value)
    })
}

let vova: IName = {
    age: 33,
    name: 'Vova',
    gender: EGender.Male,
    wife: false,
    car: {
        model: 'bmw',
        year: 2030
    }
}

let oleg: Partial<IName> = {
    age: 33,
    name: 'Oleg',
    gender: EGender.Male,
}

nameslogger([vova]);

// keyof - дозволяє шукати і приймати значення за їхніми ключами. Вираз ( keyof IName ) означає, що я витягую ключі з інтерфейсу IName

const keys: Array<keyof IName> = ['name', 'age', 'car', 'wife'];

function getKeys(valueUnderKey: keyof IName): void {
    console.log(vova[valueUnderKey]);
}

getKeys('age');

// ABSTRACT CLASS  - неповноцінний клас. Зробити екземпляр абстрактного класу неможливо, але зробити нащадка і навішати йому додаткових властивостей - можна.

abstract class ACar {
    wheels: number;
    power: number;
    color: string;

    constructor(wheels: number, power: number, color: string) {
        this.wheels = wheels;
        this.power = power;
        this.color = color;
    }

    ride(more) {
        console.log(`ride with ${this.power * more} km/h`)
    }
}

// const car = new ACar() - цей вираз не дасть створити новий екземпляр абстрактного класу... Можна лише зробити клас-нащадок:

class ACarExtended extends ACar {
    dors: number=4;

    constructor(wheels: number, power: number, color: string, dors?: number) {
        super(wheels, power, color);
    }
}

const B = new ACarExtended(4, 300, 'black', 3);
console.log(B);
B.ride(3);



