// Primitive Datatypes (call by value)

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 121212121212121212n



// Reference or Non Primitive Datatypes (call by reference)

// Array, Objects, Functions

const heros = ["ironman","loki","caption"];
let myObj = {
    name:"yash",
    age:22
}

const myFunction = function(){
    console.log("Hello Yash");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "yashdholakiya"

let anotherName = myYoutubename
anotherName = "Marvel Studio"

console.log(anotherName);
console.log(myYoutubename);

userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

userTwo = userOne

userTwo.email = "yash@google.com"

console.log(userOne.email);
console.log(userTwo.email);