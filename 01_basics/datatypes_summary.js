//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    myName: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Two types of memory in JS
// Stack (Used for primitives) => we get a copy of the data => ot original data

let myName = "Aditya"
let anothermyName = myName
anothermyName = "Aryan"

console.log(myName) // no change in myName 
console.log(anothermyName)

// Heap (Non Primitives) // we get a reference to original values
let userOne = {
    email: "aditya@gmail.com",
    upi: "asd@oksbi"
}
let userTwo = userOne
userTwo.email = "asd@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)