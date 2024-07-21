
//numbers and maths

//Numbers
const bit = 100
console.log(bit)

const number = new Number(100);
console.log(number);

console.log(bit.toString());

console.log(number.toString().length);

const price = 200
console.log(price.toFixed(2));

const income = 235.8965
console.log(income.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(hundreds.toExponential());

//===========Maths library=========//
console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(4.6));
console.log(Math.floor(7.22));
console.log(Math.ceil(8.41));
console.log(Math.min(4,2,7,5));
console.log(Math.max(3,7,5,9));

//random (imp)
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10) + 1);

//imp formula
const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
