// Type Aliases
type StringOrNumber = string | number;

type StringOrNumberArray = (string | number)[];

// We can use a type in an other type
type Guitarist = {
    name?: string;
    active?: boolean;
    albums: StringOrNumberArray;
};
type UserId = StringOrNumber;

// But we can't use a type in an interface
// interfaces think about those more as object or classes
// interface PostId = StringOrNumber

// literal types
// it's a literal assignment
let myName: 'Dave'; // it's not reassignable

let userName: 'Dave' | 'John' | 'Amy'; // now more than one value can be assigned
userName = 'Rachel'; // but not this one :P
userName = 'Amy';

// function
// we can type the return
const add = (a: number, b: number): number => {
    return a + b;
};
// here the return is void because we don't have a return
// So this is a side effect
const logMsg = (message: any): void => {
    console.log(message);
};

logMsg('hello');
logMsg(add(26, 16));

const subtract = function (c: number, d: number): number {
    return c - d;
};

type mathFunction = (a: number, b: number) => number;
// it's not pertinent here to use an interface because it's using basic types
// interface mathFunction {
//     (a: number, b: number): number;
// }
let multiply: mathFunction = function (e, f) {
    return e * f;
};

// optional parameters
// if we have an optional parameter, it needs to be the last in the list
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') return a + b + c;
    return a + b;
};

// default param value
const sumAll = (a: number = 7, b: number, c: number = 23): number => {
    return a + b + c;
};

logMsg(addAll(12, 7, 23));
logMsg(addAll(12, 7));
logMsg(sumAll(12, 7));
// like a have a default value, we have to skip the value by using undefined
logMsg(sumAll(undefined, 12));

// Rest Parameters
// as the optional parameter, rest operator chould come at the end
// and have the required parameters at the beginning
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// we are not putting an array here but it's represented in the function as an array
// because of the rest operator
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 6));

// never type is essentially for function that explicitly thow errors
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

// But, a function that has an infinite or endless loop inside
// will have a never type as a return
// const infinite = () => {
//     let i: number = 1
//     while (true) {
//         i++
//     }
// }

// using a custom type guard to handle condition
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
};
const isString = (value: any): boolean => {
    return typeof value === 'string' ? true : false;
};

// yse if tge bever type
const numberOrString = (value: number | string): string => {
    if (isString(value)) return 'string';
    if (isNumber(value)) return 'number';
    // here we return a never type because we don't have an explicit return
    //  and we don't handling a potential undefined
    return createError('this should never happen!');
};

logMsg(numberOrString('458'));
logMsg(numberOrString(458));
