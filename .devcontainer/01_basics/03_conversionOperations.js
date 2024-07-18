
//let age = null //will convert 0
//let age = "null" //NaN
//let age = "23abc" //Nan
//let age = undefined  //NaN
//let age = "adil" //NaN
 //let age = false // 0
 let age = true //1

console.log(typeof age);

let ageInNumber = Number(age);
console.log(typeof ageInNumber , "is", ageInNumber);

//let isLoggedIn = 1 //true
//let isLoggedIn = 0 //false
//let isLoggedIn = "" //false
let isLoggedIn = "adil" //true

let isBooleanLoggedIn = Boolean(isLoggedIn)
console.log(isBooleanLoggedIn);


let isNumber = 23
let isNumberString = String(isNumber)
console.log(isNumberString ,"is", typeof isNumberString );

/**********operations************ */

console.log(2+3);
console.log(2**2);
console.log("1"+3+3); //treated on first preference if string then whole will be treated as string
console.log(3+3+"3");//will be treated as int

console.log(+true);
console.log(+"");
console.log(+1);
console.log(+0);

let x = 3
let y = ++x
console.log(x," ",y); //4 4

let a = 3
let b = a++
console.log(a," ",b);// 4 3
