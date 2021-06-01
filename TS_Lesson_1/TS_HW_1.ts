// Створити такі класи:
// 1) Депутат
//    - імя
//    - вік
//    - стать
//    - ступінь чесності (0-100)
//    - мінімальна сума хабаря
//
// 2) Партія
//    - назва
//    - голова (Депутат)
//    - члени партії (Масив депатутатів)
//
// 3) Верхрвна рада
//    - масив партій
//    - решті полів на вибір
//
// Мають бути присутні такі можливості:
// - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
// Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
//
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
// Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
// та бере хабар.
// Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!

enum EGender {
    Male = 'male',
    Female = 'female'
}

class Deputy {
    public name: string;
    public age: number;
    public gender: EGender;
    public honestyLevel: number;
    public minBribe: number;

    constructor(name: string, age: number, gender: EGender, honestyLevel: number, minBribe?: number) {
        this.name = name;
        this.age = age;
        this.honestyLevel = honestyLevel;
        this.minBribe = minBribe;
    }

    giveBribe(bribe): void {
        if (bribe < this.minBribe) {
            console.log('Do not even try!!!')
        }
        if (bribe < this.minBribe / 100 * this.honestyLevel + this.minBribe && bribe > this.minBribe) {
            console.log('I am not shure if I can help you...')
        }
        if (bribe > this.minBribe / 100 * this.honestyLevel + this.minBribe) {
            console.log('I will solve your problem!')
        }
    }

}


class Party {
    public nameOfParty: string;
    public numberOfMembers: number;
    public leader: Deputy;
    public members: Array<Deputy>

    constructor(nameOfParty: string, leader: Deputy, members: Array<Deputy>) {
        this.nameOfParty = nameOfParty;
        this.numberOfMembers = members.length + 1;
        ;
        this.leader = leader;
        this.members = members;
    }

    deleteMembers(nameOfMember: string): void {
        this.members.forEach((member, index) => {
            if (member.name === nameOfMember) {
                this.members.splice(index, 1)
                console.log(`Cureently there are ${this.numberOfMembers} members`)
                console.log(this.members)
            }
        })
    }

    addMember(deputyToAdd: Deputy): void {
        this.members.push(deputyToAdd)
        console.log(`Cureently there are ${this.numberOfMembers} members`)
        console.log(this.members)
    }

    showBribesTakers(): void {
        this.members.forEach(value => value.minBribe ? console.log(value.name) : 'there are no bribestakers')
    }

    showTheBiggestBribesTaker(): void {
        let biggestBribesTaker = '';
        let biggestBribe = 0;
        this.members.forEach(value => {
            if (value.minBribe > biggestBribe) {
                biggestBribe = value.minBribe
                biggestBribesTaker = value.name
            }

        })

        console.log(`the biggest bribetaker is ${biggestBribesTaker}. This deputy's minimum bribe level is ${biggestBribe}`)
    }


}


class Parlament {

    public partyArr: Array<Party>;

    constructor(partyArr: Array<Party>) {
        this.partyArr = partyArr;
    }

    deleteParty(nameOfPartyToDelete: string): void {
        this.partyArr.forEach((value, index) => {
            if (value.nameOfParty === nameOfPartyToDelete) {
                let deleted = this.partyArr.splice(index, 1)
                console.log('Depyties:');
                console.log(this.partyArr);
            }

        })

    }

    addParty(partyToAdd): void {
        this.partyArr.push(partyToAdd);
        console.log('Added Party:')
        console.log(partyToAdd);
    }

    showParlamentDetails(): void {
        console.log('Parlament Details:')
        console.log(this.partyArr)
    }

    showPartyDetails(nameOfPartyToShow: string): void {
        this.partyArr.forEach((value => {
            if (value.nameOfParty === nameOfPartyToShow) {
                console.log('Party Details:');
                console.log(value);
            }
        }))
    }

    showTheBiggestBribesTakerInParlament(): void {
        let biggestBribesTaker = '';
        let biggestBribe = 0;
        this.partyArr.forEach(party => {
            party.members.forEach(member => {
                if (member.minBribe > biggestBribe) {
                    biggestBribe = member.minBribe
                    biggestBribesTaker = member.name
                }

            })


        })

        console.log(`the biggest bribetaker in te Parlament is ${biggestBribesTaker}. This deputy's minimum bribe level is ${biggestBribe}`)
    }
}


const deputy1 = new Deputy('Petro', 55, EGender.Male, 90, 1000);
const deputy2 = new Deputy('Volodymyr', 45, EGender.Male, 45);
const deputy3 = new Deputy('Oleg', 45, EGender.Male, 45, 2000);
const deputy4 = new Deputy('Andry', 67, EGender.Male, 45, 2000);
const deputy5 = new Deputy('Olga', 67, EGender.Female, 70, 20000);

const party1 = new Party('Volya', deputy1, [deputy1, deputy2]);
const party2 = new Party('Opir', deputy3, [deputy3, deputy4]);
const party3 = new Party('Hroshi', deputy5, [deputy5]);

const parlament1 = new Parlament([party1, party2, party3]);

parlament1.deleteParty('Opir');
parlament1.showParlamentDetails();
parlament1.addParty(party2);
parlament1.showParlamentDetails();
parlament1.showPartyDetails('Volya');
parlament1.showTheBiggestBribesTakerInParlament();

party1.addMember(deputy5);
party1.addMember(deputy4);
party1.showBribesTakers();
party1.showTheBiggestBribesTaker();

deputy1.giveBribe(1950);







