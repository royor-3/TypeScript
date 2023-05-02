"use strict";
let username = 'Dave';
console.log(username);
let a = 12;
// let b: string = '6';
let b = 6;
let c = 2;
/**
 * I get error from TypeScript
 * because of the type of the variable b (type string)
 * In order to fix the issue,
 * I can change the type string to number
 * and change the value
 */
console.log(a / b);
console.log(c * b);
