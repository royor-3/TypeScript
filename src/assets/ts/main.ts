// Index Signatures
// Is used when you create an object
// but you don't know the exact names of the objects keys
// You do know the shape of the object and you can declare the type of the keys and the types of the values
// An other use is to access an object property dynamically

// interface TransactionObj {
//     Pizza: number;
//     Books: number;
//     Job: number;
// }

// // It's an index signature
// interface TransactionObj {
//     // We declare that keys will be strings and all the values will be numbers
//     // Note that we could use union type
//     // Also, index signature parameter type must be a string, number, some symbol or tamplate literal type
//     readonly [index: string]: number; // | string | boolean
// }

// Here, Pizza, Books and Job are required
interface TransactionObj {
    readonly [index: string]: number;
    Pizza: number;
    Books: number;
    Job: number;
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40;

// it's not totally safe
// This is does open up the possibility to try to access a key on an object that does not exist
console.log(todaysTransactions['Dave']); // It's undefined

///////////////////////////////////////////////////

interface Student {
    [key: string]: string | number | number[] | undefined;
    name: string;
    GPA: number;
    classes?: number[];
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};

// We had an issue here but by adding a index signature
// we solved the issue.
// But we have a problem because TypeScript don't know if "test" exist or not
// console.log(student.test);

for (const key in student) {
    // if we comment the index signature, we will have an issue
    // to solve this problem, we could use an union type
    // and replace  ${student[key] by  ${student[key as keyof Student]
    console.log(`${key}: ${student[key]}`);
}

Object.keys(student).map((key) => {
    // if we don't know the student object what the type of it is
    // we can use 'typeof" and list the object itself "student" (and not the interface)
    console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
logStudentKey(student, 'classes');

////////////////////////////////////////////////////
// interface Incomes {
//     [key: string]: number;
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

// record utility type
type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}
