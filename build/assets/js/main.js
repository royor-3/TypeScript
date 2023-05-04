"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // les specific
let c = a; // more specific
// angle brackets can be use to define an assertion
// But it can't be use in TSX files
let d = 'World';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b; // using '' to coerce the numbers into a string
};
// using an assertion because we know that the return will be a string
let myVal = addOrConcat(2, 2, 'concat');
// Be careful because TS sees no problem here but a string is return
let nextVal = addOrConcat(2, 2, 'concat');
10;
// double casting or Force casting
10;
// the DOM
const img = document.querySelector('img'); // TS is more specific here and say that it's a HTMLImageElement
const myImgId = document.querySelector('#myImg'); // TS is less specific and say that it's an Element
const nextImgId = document.querySelector('#myImg');
// we will have an error if we remove the exclamation mark,
// because by default, the element can be a HTML element or null
// The exclamation mark is for saying that the element can't be null
img.src;
// we will have an error if we remove the assertion
myImgId.src;
