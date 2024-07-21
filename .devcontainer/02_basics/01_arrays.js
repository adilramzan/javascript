
// imp for interview
//array copy operation creates shallow copy
// shallow copy => share the same reference point 
//deep copy => don't share the same reference point

let array = [0,4,6,1,7,9]
let myHeros = ["thor","loki",'iron man']
let myArr = new Array(2,8,4,0,6)

console.log(myHeros[2]);
myHeros.push('wanda') //push will add the value
console.log(myHeros);
myHeros.pop() //pop will remove the last value
console.log(myHeros);

myHeros.unshift('wanda') //unshift will add the value in start 
console.log(myHeros);
myHeros.shift() //shift will remove the first/starting value
console.log(myHeros);

console.log(myHeros.includes('loki'));
console.log(myHeros.indexOf('iron man'));

let newArr = myArr.join() //join will bind the array and will convert it into string
console.log(array); //type object as array type is object
console.log(newArr); //type string

//---------imp for interview----------//

let arr = [0,1,2,3,4,5,6]
console.log("A",arr);

//In slice operation last range will not included e.g from 1,2,3 it will give 1,2 
const arr1 = arr.slice(1,3) 
console.log("B",arr);   //B [0, 1, 2, 3,4, 5, 6]
console.log(arr1);  //[ 1, 2 ]

// splice will not only include the last range but also it will manipulate the original array as it will exclude the splice values from original array
const arr2 = arr.splice(1,3)
console.log("C",arr);   //C [ 0, 4, 5, 6 ]
console.log(arr2);  //[ 1, 2, 3 ]