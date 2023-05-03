let myName: string = 'Dave';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let unionType: string | number;

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
const sum1 = (a: number, b: number) => a + b;
// it will implicitly say that it will return a string
const sum2 = (a: number, b: string) => a + b;

// when you don't know which type you can assign a variable
// Intellisense can make a suggestion
let regularExpression: RegExp = /\w+/g;
