/*  
    Imp points for InterView:

    how data is stored in memory and how can we access it there are two types
    1.primitive 
        call by value (whenever you copy them from one place to another their reference is not provided from memory but their copy you will get and the changes are aslo made in copy)
    7 types: String,Number, Boolean, null(not zero it's empty),undefined,symbol,BigInt

    2.Non Primitive/Reference type
        you get allocate directly reference from memory
    Array,objects,function(return type object function)
    
    Note: java objects, browser events/web events master grip on these two if you wanna master JS   
    
    Static Languages:
    Definition: In static programming languages, type checking is done at compile-time.
    Examples: C, C++, Java
    Characteristics:
    Variables need to be declared with a type before use.
    Type errors are caught during compilation.

    Dynamic Languages:
    Definition: In dynamic programming languages, type checking is done at runtime.
    Examples: Python, Ruby, JavaScript
    Characteristics:
    Variables do not need to be declared with a type; types are inferred at runtime.
    Type errors are caught during execution.

    null => return type is object 

*/

//primitive
let score = 90
let number = 103.55

let isLoggedIn = true
let outsideRaining = null;
let email = undefined //undefined
let emailAcc; //undefined

let bigNumber = 234567890987654321021n //by putting n at end bigNumber will become bigInt
console.log(typeof bigNumber); //bigInt

let id = Symbol('222') //every symbol will give a unique or diff id
let accountId = Symbol('222')
console.log( id === accountId ); //false

//Non primitive
let myHeros = ["Thor","Iron Man","Black Widow","Wanda"]; //array
let myObj = {
    name:"adil",
    age:23,
    heart:false,
}; //object

let isAlive = function(){
    console.log("No");
}
