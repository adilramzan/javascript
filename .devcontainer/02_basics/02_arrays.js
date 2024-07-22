

const marvelHeros = ["ironman","thor","spiderman"]
const dcHeros = ["batman","flash","superman"]
//push method
marvelHeros.push(dcHeros) //push will include the whole array as a single element
console.log(marvelHeros);
console.log(marvelHeros[3][2]);

//concat method
const allHeros = marvelHeros.concat(dcHeros) //concat method will merge the arrays 
console.log(allHeros)

//spread method
const all_Heros = [...marvelHeros,...dcHeros]
console.log(all_Heros); 

//flat method (spread the in depth(array into array) arrays into a single flat array)
const realArr = [1,2,3,[4,5,6],7,[8,9,[10,11,[12,13,14]]],15]
const real_Array = realArr.flat(Infinity)
console.log(real_Array);

console.log(realArr[5][2][2][2]); //14

console.log(Array.isArray("adil")); //isArray will check if it's array or not
console.log(Array.from("adilramzan")); //will convert into array

//this is interesting case for interview
//When you call Array.from() with an object that does not have array-like properties or is not iterable, such as { name: 'adilramzan' }, the method will not know how to convert it into an array. 
console.log(Array.from({name:'adilramzan'})); //[] output will be empty untill we will not mention from whic ot will create array e.g from key 

const bit1 = 100
const bit2 = 200
const bit3 = 300

console.log(Array.of(bit1,bit2,bit3));


