console.log("Hello, TypeScript with Node.js!");

import add, { subtract } from './functions';
import findMax from './function2';

console.log("Hello, TypeScript with Node.js!");

let x:number | string = 10;
x = 25;
if (typeof x === 'string') {
    console.log('x is a string');
} else if (typeof x === 'number') {
    console.log('x is a number');
} else {
    console.log('x is neither a string nor a number');
}

const result = add(1,2) + 0;
const result2 = subtract(1,2) + 0;
console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result2:', typeof result2);

console.log("max value in list [1,5,2,3] is ",findMax([1,5,2,3]));
