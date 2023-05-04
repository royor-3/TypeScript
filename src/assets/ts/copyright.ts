// Base code
// const year = document.querySelector('#year');
// const thisYear = new Date().getFullYear();
// year.setAttribute('datetime', thisYear);
// year.textContent = thisYear;

// 1st variation
// let year: HTMLElement | null;
// year = document.querySelector('#year');
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//     year.setAttribute('datetime', thisYear);
//     year.textContent = thisYear;
// }

// 2nd variation
const year = document.querySelector('#year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
