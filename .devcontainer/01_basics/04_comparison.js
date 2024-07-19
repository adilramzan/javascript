//simple comparison within same data type
// console.log(3>4);

//b/w diff datatype
console.log(6 > "5");
console.log("3" > 5);

//null
console.log(null > 0);
console.log(null >= 0); //true in this case null convert to 0
console.log(null < 0);
console.log(null == 0);
console.log(null === 0);

//undefined (all false)
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

// === (strict check will also check the datatype and will not convert)

console.log("4" == 4);
console.log("4" === 4);
console.log("5" === 4);