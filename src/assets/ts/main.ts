// Type assertion is made when you know more about the type that TypeScript knows
type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; // les specific
let c = a as Three; // more specific

// angle brackets can be use to define an assertion
// But it can't be use in TSX files
let d = <One>'World';
let e = <string | number>'World';

const addOrConcat = (
    a: number,
    b: number,
    c: 'add' | 'concat'
): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b; // using '' to coerce the numbers into a string
};

// using an assertion because we know that the return will be a string
let myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be careful because TS sees no problem here but a string is return
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// got an error because a number can be a string
10 as string;
// double casting or Force casting
10 as unknown as string;

// the DOM
const img = document.querySelector('img')!; // TS is more specific here and say that it's a HTMLImageElement
const myImgId = document.querySelector('#myImg') as HTMLImageElement; // TS is less specific and say that it's an Element
const nextImgId = <HTMLImageElement>document.querySelector('#myImg');

// we will have an error if we remove the exclamation mark,
// because by default, the element can be a HTML element or null
// The exclamation mark is for saying that the element can't be null
img.src;
// we will have an error if we remove the assertion
myImgId.src;
