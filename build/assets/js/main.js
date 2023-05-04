"use strict";
// But we can't use a type in an interface
// interfaces think about those more as object or classes
// interface PostId = StringOrNumber
// literal types
// it's a literal assignment
let myName; // it's not reassignable
let userName; // now more than one value can be assigned
userName = 'Rachel'; // but not this one :P
userName = 'Amy';
// function
// we can type the return
const add = (a, b) => {
    return a + b;
};
// here the return is void because we don't have a return
// So this is a side effect
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
logMsg(add(26, 16));
const subtract = function (c, d) {
    return c - d;
};
// it's not pertinent here to use an interface because it's using basic types
// interface mathFunction {
//     (a: number, b: number): number;
// }
let multiply = function (e, f) {
    return e * f;
};
// optional parameters
// if we have an optional parameter, it needs to be the last in the list
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined')
        return a + b + c;
    return a + b;
};
// default param value
const sumAll = (a = 7, b, c = 23) => {
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
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// we are not putting an array here but it's represented in the function as an array
// because of the rest operator
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 6));
// never type is essentially for function that explicitly thow errors
const createError = (errMsg) => {
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
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const isString = (value) => {
    return typeof value === 'string' ? true : false;
};
// yse if tge bever type
const numberOrString = (value) => {
    if (isString(value))
        return 'string';
    if (isNumber(value))
        return 'number';
    // here we return a never type because we don't have an explicit return
    //  and we don't handling a potential undefined
    return createError('this should never happen!');
};
logMsg(numberOrString('458'));
logMsg(numberOrString(458));
