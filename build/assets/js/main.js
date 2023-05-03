"use strict";
let myName = 'Dave';
let meaningOfLife;
let isLoading;
let album;
let unionType;
// Value of myName can only be a string
myName = 'Roy';
// Value of meaningOfLife can only be a number
meaningOfLife = 42;
// Value of isLoading can only be a booler
isLoading = true;
// Value of album can be a string, number or boolean
album = 'Van Halen';
album = 1989;
album = true;
// Value of unionType can be a string or a number
unionType = 'Im a unionType';
unionType = 42;
// it will implicitly say that it will return a number
const sum1 = (a, b) => a + b;
// it will implicitly say that it will return a string
const sum2 = (a, b) => a + b;
// when you don't know which type you can assign a variable
// Intellisense can make a suggestion
let regularExpression = /\w+/g;
