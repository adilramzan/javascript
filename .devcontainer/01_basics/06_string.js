const name = "adil"
let repoCount = 8

//outdated method
console.log(name + repoCount +"cs");

//new method (string interpolation)
console.log(`My name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

//exploring string methods

const gameName = new String("candycrush")

console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'));

const newString1 = gameName.substring(0,5)
const newString2 = gameName.substring(5,10)
console.log(newString1,"   ",newString2);


const browserName = "mozilla"
i = 0
console.log(browserName.length);
console.log(browserName[i+1]);
console.log(browserName[2]);

//retrieving the last val
console.log(browserName[browserName.length-1]);

//includes check if a substring present in a string and it takes a single parameter
if (browserName.includes("ozil")) {
    console.log("found ozil");
} else {
    console.log("ozil not found");
}

//startswith
if (browserName.startsWith("ozil")) {
    console.log("found ozil");
} else {
    console.log("ozil not found");
}

//endsWith
if (browserName.endsWith("zilla")) {
    console.log("found zilla");
} else {
    console.log("zilla not found");
}

const tagline = "MDN - Resources for developers, by developers";

console.log(tagline.indexOf("developers"));
console.log(tagline.indexOf('x')); //-1 not present in string

const firstOccurance = tagline.indexOf("developers")
const secondOccurance = tagline.indexOf("developers",firstOccurance+1)
console.log(secondOccurance);

//slice() to extract a substring from a string
console.log(browserName.slice(2,5));
console.log(browserName.slice(2));


//to lower case and uppercase
console.log(browserName.toLowerCase());
console.log(browserName.toUpperCase());

//replace
const updated = browserName.replace("moz","van")
console.log(updated);

//replaceall
let qoute = "To be or not to be"
qoute = qoute.replaceAll("be","code")
console.log(qoute);

console.log(browserName.slice(-6,5));//ozil 

//trim()

const newString = "  adil  "
console.log(newString);
console.log(newString.trim());

//cleaning string replace(/[^A-Za-z0-9]+/g,'')
function removeSpecialCharacters (inputString){
    return inputString.replace(/[^A-Za-z0-9]+/g,'')
}

let inputString = "  ad#i-l@/ "
let cleanString = removeSpecialCharacters(inputString)
console.log(cleanString)

const strToArr = "adil.ramzan.33.com"
console.log(strToArr.split("."));

console.log(`my name is ${name} and my repo count is ${repoCount} and i am using ${browserName} firefox browser.`);

/*
.split()
.replace()
.toUpperCase()
.toLowerCase()
.trim()
.charAt()
.indexOf()
.replaceAll()
.slice()
.substring()
.includes()
.startWith()
.endsWith()
.length
*/