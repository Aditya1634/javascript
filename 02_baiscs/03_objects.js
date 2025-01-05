/*
There are two types of defining objects in JS
Singleton Object => evoked/created by constructor
Object.create


Object Literals
 */

const mySym = Symbol("key1")

const JSUser = {
  name: "Aditya",
  age: 21,
  "fullName": "Aditya Dhage",
  location: "Jaipur",
  isLoggedIn: false,
  email: "aditya@google.com",
  lastLoginDays: ["Monday,Friday"],
  [mySym]: "myKey1"
}

// console.log(JSUser.email)
// console.log(JSUser["email"])
// console.log(JSUser["fullName"])
// console.log(JSUser.fullName)
// console.log(JSUser.mySym)
// console.log(JSUser[mySym])
// console.log(typeof JSUser[mySym])
// console.log(typeof JSUser[mySym])
// console.log(typeof JSUser.mySym)

JSUser.email = "adityaad.com"
// Object.freeze(JSUser)
JSUser.email = "adityaad12.com"
// console.log(JSUser)

JSUser.greeting = function () {
  console.log("Hello")
}
JSUser.greetingTwo = function () {
  console.log(`"Hello" Js User ${this.name}`)
}

console.log(JSUser.greeting)
console.log(JSUser.greeting())
console.log(JSUser.greetingTwo())
console.log(JSUser.greetingTwo)