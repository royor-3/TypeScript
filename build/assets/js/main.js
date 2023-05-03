"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1989, true];
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
let bands = [];
bands.push(42); // we have an error
bands.push('ACDC'); // we don't have an error
// tuple
// Is used to defined a specfic position and a specific length
// here the array must have to contain 3 elements
// the first one have to by a string
// the second one have to by a number
// the last one have to by a boolean
let myTuple = ['ecole', 42, true];
// intellisens show a union type
let mixed = ['John', 1, false];
// we don't have an error
mixed = myTuple;
// We have an error because mixed can possibly have more or less than 3 elements
myTuple = mixed;
// We have an error here because myTuple can have only 3 elements
myTuple[3] = 42;
// objects
let myObj;
myObj = [];
myObj = myTuple;
myObj = {};
const exampleObj = {
    prop1: 'Ecole',
    prop2: 42,
    prop3: true,
};
// errors
exampleObj.prop1 = 42;
exampleObj.prop2 = false;
exampleObj.prop3 = 'ecole';
let evh = {
    name: 42,
    active: 'ecole',
    albums: [1989, 5150, 'OU812', false],
};
let jp = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV'],
};
// There are no error because property active is optional thanks to the question mark "?"
evh = jp;
const greetGuitarist = (guitarist) => `Hello ${guitarist.name}`;
console.log(greetGuitarist(jp));
// We have to check is the property name exist
// If we don't, we could have an error
// because the property if optional
const greetGuitaristName = (guitarist) => {
    if (guitarist.name)
        return `Hello ${guitarist.name.toUpperCase()}`;
    return 'Hello!';
};
let hp = {
    albums: ['I', 'II', 'IV'],
};
console.log(greetGuitaristName(hp));
// Enums
// "Unlike most TypeScript features, Enums are not a Type-level addition to JavaScript
// but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
