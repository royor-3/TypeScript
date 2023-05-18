// generics
// sometimes we don't know what types will be passed into a function, interface, type,alias, class
// generics allow us to provide a placeholder

// this string is dedicated to a string
const stringEcho = (argument: string): string => argument;

// this is a more generic function
// By using <T>, we providing whatever that type of variable is in front
// It can be useful with utility functions where we aren't sure what type we're goint to pass in
const echo = <T>(argument: T): T => argument;

const isObject = <T>(argument: T): boolean => {
    return (
        typeof argument === 'object' &&
        !Array.isArray(argument) &&
        argument !== null
    );
};

console.log(isObject(true));
console.log(isObject('John'));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: 'John' }));
console.log(isObject(null));

const isTrue = <T>(argument: T): { argument: T; is: boolean } => {
    if (Array.isArray(argument) && !argument.length)
        return { argument, is: false };
    if (isObject(argument) && !Object.keys(argument as keyof T).length)
        return { argument, is: false };
    return { argument, is: !!argument };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// Type placeholder a generic in the interface
interface BooleanCheck<T> {
    value: T;
    is: boolean;
}

const checkBoolValue = <T>(argument: T): BooleanCheck<T> => {
    if (Array.isArray(argument) && !argument.length)
        return { value: argument, is: false };
    if (isObject(argument) && !Object.keys(argument as keyof T).length)
        return { value: argument, is: false };
    return { value: argument, is: !!argument };
};

interface HasID {
    id: number;
}

// How to use the extend keyword
// Here the type will have to have an ID property that will be required
const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here
    return user;
};

// console.log(processUser({name: 'Dave'}));
console.log(processUser({ id: 42, name: 'Dave' }));

// more example for extends keyword
// as T, K is another type of variable for generic
// Here we are building K as a key of the first type that we pass in the key of T
const getUsersProperty = <T extends HasID, K extends keyof T>(
    users: T[],
    key: K
): T[K][] => {
    return users.map((user) => user[key]);
};

const usersArray = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
];

console.log(getUsersProperty(usersArray, 'email'));
console.log(getUsersProperty(usersArray, 'username'));

// use a generic in a class
class StateObject<T> {
    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    get state(): T {
        return this.data;
    }

    set state(value: T) {
        this.data = value;
    }
}

const store = new StateObject('John');
console.log(store.state);
store.state = 'Dave';
// Here we have an error because
// TS inferred that's the type is 'string' because we assign John as the first value
// store.state = 42

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ['Dave', 42, true];
console.log(myState.state);
