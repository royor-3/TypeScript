let stringArr: string[] = ['one', 'hey', 'Dave'];
let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150];
let mixedData: (string | number | boolean)[] = ['EVH', 1989, true];

// We'll get error
stringArr[0] = 42;
stringArr.push(42);
stringArr = guitars;

guitars[0] = false;
guitars.unshift(['fender']);
guitars = mixedData;

mixedData[0] = { name: 'Dave' };
mixedData.unshift([false]);

// empty array is defined as a any type array
let test = [];
test = [...guitars, ...stringArr, ...mixedData];

// We can defined in advance the type of an empty array
let bands: string[] = [];
bands.push(42); // we have an error
bands.push('ACDC'); // we don't have an error

// tuple
// Is used to defined a specfic position and a specific length
// here the array must have to contain 3 elements
// the first one have to by a string
// the second one have to by a number
// the last one have to by a boolean
let myTuple: [string, number, boolean] = ['ecole', 42, true];

// intellisens show a union type
let mixed = ['John', 1, false];
// we don't have an error
mixed = myTuple;
// We have an error because mixed can possibly have more or less than 3 elements
myTuple = mixed;
// We have an error here because myTuple can have only 3 elements
myTuple[3] = 42;

// objects
let myObj: object;
myObj = [];
myObj = myTuple;
myObj = {};

type MyTypedObj = {
    prop1: string;
    prop2: number;
    prop3: boolean;
};

const exampleObj: MyTypedObj = {
    prop1: 'Ecole',
    prop2: 42,
    prop3: true,
};
// errors
exampleObj.prop1 = 42;
exampleObj.prop2 = false;
exampleObj.prop3 = 'ecole';

// an interface work as a type
// but and interface :
//  - will not work for primary types
//  - is always extendable
//      while a type cannot be re-opened to add new properties
interface Guitarist {
    name?: string;
    active?: boolean;
    albums: (string | number)[];
}

let evh: Guitarist = {
    name: 42,
    active: 'ecole',
    albums: [1989, 5150, 'OU812', false],
};
let jp: Guitarist = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV'],
};
// There are no error because property active is optional thanks to the question mark "?"
evh = jp;

const greetGuitarist = (guitarist: Guitarist) => `Hello ${guitarist.name}`;
console.log(greetGuitarist(jp));
// We have to check is the property name exist
// If we don't, we could have an error
// because the property if optional
const greetGuitaristName = (guitarist: Guitarist) => {
    if (guitarist.name) return `Hello ${guitarist.name.toUpperCase()}`;
    return 'Hello!';
};
let hp: Guitarist = {
    albums: ['I', 'II', 'IV'],
};
console.log(greetGuitaristName(hp));

// Enums
// "Unlike most TypeScript features, Enums are not a Type-level addition to JavaScript
// but something added to the language and runtime"

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.B);
