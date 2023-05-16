// classes
// As we can see is this class, there are a redundacy
// class Coder {
//     name: string;
//     music: string;
//     age: number;
//     lang: string;

//     constructor(name: string, music: string, age: number, lang: string) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }
// }

// To avoid this, we can add what are called visibility modifiers
class Coder {
    // To avoid this redundacy, and you want add a property that you didn't want to instantiate (like a third-party library)
    // you can use an assertion (exclamation mark here)
    secondLand!: string;

    constructor(
        public readonly name: string, // can't be modify
        public music: string,
        private age: number, // only access in the class
        protected lang: string = 'TypeScript' // access to the class and any object that inherits from it
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I'm ${this.age}`;
    }
}

const Dave = new Coder('Dave', 'Rock', 42);

console.log(Dave.getAge());
// console.log(Dave.age); // error because age is private
// console.log(Dave.lang); // error because age is protected

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age); // super needs to come before we try to assign anything else
        this.computer = computer;
    }

    public getLang() {
        return `I write ${this.lang}`;
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
// console.log(Sara.age); // there are an error because age is still private

///////////////////////////////////////////////////////////////

// applying a interface to a class

interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitariste implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitariste('Jimmy', 'guitar');
console.log(Page.play('strums'));

////////////////////////////////////////////////////////////////////

class Peeps {
    // count is not apply to any instantiation of the class
    // It applies to the class directly itself
    static count: number = 0;

    // getCount will be call directly in the class as well
    static getCount(): number {
        return Peeps.count;
    }

    public id: number;
    constructor(public name: string) {
        this.name = name;
        // first id will be 1.
        // Peeps.count++ => the first id will be 0
        this.id = ++Peeps.count;
    }
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

// The count is incrementing as much as Peeps class is instantiated
console.log(Peeps.count);
console.log(`The Id of Steve is ${Steve.id}`);
console.log(`The Id of Amy is ${Amy.id}`);
console.log(`The Id of John is ${John.id}`);

////////////////////////////////////////
// getters and setters

class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if (
            Array.isArray(value) &&
            value.every((el) => typeof el === 'string')
        ) {
            // return this.dataState = value // setters can't return a value
            this.dataState = value;
            return;
        } else throw new Error('Param is not an array of strings');
    }
}

const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = 'Van Halen'; // We've got an error because it's not an array
// MyBands.data = ['Van Halen', 5150]; // We've got the error in the console because there are a number in the array
