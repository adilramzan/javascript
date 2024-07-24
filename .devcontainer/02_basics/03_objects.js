/*
    there are two ways to express js objects: One is Singleton and other is Literals.
    
    > Singleton :  if a object made like a constructor it will be singleton
    method to create a singleton object : Object.create

    > Literal: Singleton will not be made if we declared like a literals.
    . In object literals we have key(e.g name) and values but in array we just have index number to access
      and the type of keys in object literals are strings 

*/

// object literals : method to declare a object

const JsObject = {
    name : "Adil",
    "full name": "Adil Ramzan",
    "fullname": "Adil Ramzan",
    age : 23,
    location : "islamabad",
    email : "adil@gmail.com",
    isLoggedIn: false,

}

//two ways to access objects
//this is right but you can't acces a quoted key through this
console.log(typeof JsObject.name);
console.log(JsObject.email);
console.log(JsObject.fullname); //this can be accessed like that
//console.log(JsObject.full name); //this can't be accesssed like that

//other way
//console.log(JsObject[email]); //can't access like that
console.log(JsObject["email"]);
console.log(JsObject["full name"]);


//****Interview uestions: Take a symbol and add it to object's key and print it***//

const mySymbol = Symbol("key1")

//this way it will not act as a symbol in object though it will give the same value but that value will be string not symbol
const js_user = {
    mySymbol : "mykey1"
}
console.log(js_user.mySymbol);
console.log(typeof js_user.mySymbol); //string

//right syntax to do that 
const mySym = Symbol("key2")
const myJs = {
    [mySym] : "mykey2"
}
console.log(myJs[mySym]);
console.log(typeof myJs[mySym]); //symbol { [Symbol(key2)]: 'mykey2' }

console.log(myJs);

//freeze an object to avoid changes
JsObject.email = "adil@microsoft.com"
//Object.freeze(JsObject)
JsObject.email = "adil@ibm.com"
console.log(JsObject);

//====function in objects====//

JsObject.greeting = function(){
    console.log("Hi i'm JsObject");
}
console.log(JsObject.greeting); //[Function (anonymous)]
console.log(JsObject.greeting()); //to get the value 

JsObject.greeting2 = function(){
    console.log(`Good Evening from , ${this["full name"]}`);
}
console.log(JsObject.greeting2());