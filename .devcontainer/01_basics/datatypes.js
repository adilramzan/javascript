"use strict"; //treat all js code as newer version of javascript

//alert(3+4) we are using node.js not browser there's a difference in syntax

//datatypes

//null datatype
console.log(typeof null) //object
console.log(typeof undefined); //undefined

let value = null;
if (value===null) {
    console.log("value is null");
}

if (value != null && typeof value==="object" ) {
    console.log("value is object");
} else if(value===null) {
    console.log("value is null");
}

//number 
let x = 12
//bigInt

//string
let name = "adil"
//boolean
let isRaining = false
//undefined
let y;
//null

//symbol
let sym = Symbol("description");


//object 
let obj = {name:"adil" , age:23}
//arr
let arr = [2,3,4]

//function
function great(){console.log();}

console.log(typeof function(){});
