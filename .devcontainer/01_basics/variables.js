//difference b/w a txt file and a javascript file is syntax difference

//types of variables
const accountId = 112233
let emailAcc = "iam@gmail.com"
var password = "i2212"
city = "dipalpur"  //also this is a method in js where you can declare a variable with just name
let accountState;

//you can't update const variable value 
//accountId = 223344

//to  print a single value
console.log(accountId);

emailAcc = "uare@gmail.com"
password = "u2233"
city = "okara"

//to print multiple values
console.table([accountId,emailAcc,password,city,accountState])

/*
Don't use var in javascript, but why? 
because of issue in block scope and functional scope

In back stage there was a scope issue with var mean if you 
define a variable with var and some other developer define it with same name and assign it different value the updated value is added and if 10 people define 10 times it had 10 different values. 

block scope: within block ,curly braces {}
"let","const"

function scope: within entire function 
"var"
*/