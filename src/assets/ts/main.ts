//  utility type
//  there are helpfull for commin type transformations

//  partial
// this type allowing to pass here in a object that just has one property of assignment

interface Assignment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => {
    return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

// Required
// Requires all of the properties in the interface
// verified was optional but now it's required too

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign;
};

// verified is missing
// console.log(
//     recordAssignment({
//         studentId: 'compsci123',
//         title: 'Final Project',
//         grade: 0
//     })
// );

console.log(
    recordAssignment({
        studentId: 'compsci123',
        title: 'Final Project',
        grade: 0,
        verified: true,
    })
);

// Readonly
// We can't overwrite any properties
const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true,
};
// assignVerified.grade = 88
// recordAssignment(assignGraded)
recordAssignment({ ...assignGraded, verified: true });

// Record

// here, keys will be string, and value will be strings too
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: 'FF0000',
};

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'B',
    // Kelly: "Z"
    // John: 'C'
    Kelly: 'D',
};

// Record with an interface
interface Grades {
    assign1: number;
    assign2: number;
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit

// Pick
// To specify properties that you want to select
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

// const score: AssignResult = {
//     studentId: 'k123',
// };
const score: AssignResult = {
    studentId: 'k123',
    grade: 85,
};

// Omit
// To discard unwanted properties
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

// const preview: AssignPreview = {
//     studentId: 'k123',
//     grade: 'Final Project',
// };
const preview: AssignPreview = {
    studentId: 'k123',
    title: 'Final Project',
};

// Exclude and Extract
// they are going to work with string literal union type
// not with interface

// Exclude
// To exclude a string literal from a union type
type AdjustedGrade = Exclude<LetterGrades, 'U'>;

// Extract
// To extract a string literal from a union type
type highGrades = Extract<LetterGrades, 'A' | 'B'>;

// NonNullable
// To exclude both null and undefined from the union type
type AllPossibleGrades = 'Dave' | 'John' | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

// type newAssign = { title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return { title, points };
};
// if we change the function createNewAssign, this type will be always goind to update the return type
// it's usefull for function we didn't create (library for exemple)
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);

// Parameters
// if we look at the params, it's a tuple
type AssignParamas = Parameters<typeof createNewAssign>;

const assignArgs: AssignParamas = ['Generics', 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise
// is used to get the return of the promise

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            if (err instanceof Error) console.log(err.message);
        });
    return data;
};
// on the hover, we can read here Promise<User[]> and not only User[]
// type FetchUsersReturnType = ReturnType<typeof fetchUsers>;
// on the hover, we can read User[] thanks to Awaited
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
