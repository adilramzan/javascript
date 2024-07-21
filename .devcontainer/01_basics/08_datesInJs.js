

let myDate = new Date()
console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof Date); //function
console.log(typeof myDate); //object 

//=== imp point for interview ===//
/*
    1.month start from 0 in javascript
    2.type of date is object in javascript
*/

let date = new Date(2023,0,14)
console.log(date.toDateString());
let date1 = new Date(2023,0,14,5,4)
console.log(date1.toLocaleString());
let date2 = new Date("12-26-2023") // in string month start from 1
console.log(date2.toLocaleString());

//to find milliseconds
let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(date2.getTime())

//Imp for interview (how to conert milliseconds into seconds)
console.log(Math.floor(Date.now()/1000)); // into seconds
console.log(Math.floor(Date.now()/60000)); //into minutes
console.log(Math.floor(Date.now()/3600000)); //into hours

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay()+1);
console.log(newDate.getMonth()+1);


let hrs = newDate.getHours()
let min = newDate.getMinutes()
let sec = newDate.getSeconds()

hrs = hrs.toString().padStart(2,'0')
min = min.toString().padStart(2,'0')
sec = sec.toString().padStart(2,'0')

console.log(`Day ${newDate.getDay() + 1} and time is ${hrs}:${min}:${sec}`)

// imp
newDate.toLocaleString('default',{
    weekday:'long'
})
