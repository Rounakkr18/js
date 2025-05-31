// 1. Primitive - 7 types
//    String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const temp = null;
let userEmail;

const id = Symbol("123")
const anotherId = Symbol('123')
console.log(id==anotherId);    //false

const BigInt = 42423434242n



// 2. Reference (Non primitive)
//    Array, Objects, Fuctions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "rounak",
    age: 22,
}

const myFunction = function(){
    console.log("hello");
}


console.log(typeof myObj);         //object
console.log(typeof null);          //object
console.log(typeof myFunction);    //function

    