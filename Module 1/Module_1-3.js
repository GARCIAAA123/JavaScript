'use strict';
const n1 = parseFloat(prompt('Give a number'));
const n2 = parseFloat(prompt('Give a number'));
const n3 = parseFloat(prompt('Give a number'));

const sum = n1 + n2 + n3
const product = n1 * n2 * n3
const average = sum/3

document.querySelector('#sum').innerHTML = `The sum is ${sum}`;
document.querySelector('#product').innerHTML =`The product is ${product}`;
document.querySelector('#average').innerHTML = `The average is ${average}`;