const user = {
  username : "Aditya",
  price : 999,
  welcomeMessage: function() {
    // this keyword defines current context
    console.log(`${this.username}, welcome`)
    console.log(this)
  }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// In node env this referes to empty object
// Browser -> Global Object = Window Object
// console.log(this)

// function chai() {
//   let username = "aditya"
//   // This keyword works in object , doesnt give context in functions 
//   console.log(this.username)
// }
// chai()

// const chai = function(){
//   let username = "aditya"
//   console.log(this.username)
// }

// Normal function this returns lot of things
// Arrow function returns empty object
// Cant use this keyword in arrow function
// const chai = () => {
//   let username = "aditya"
//   console.log(this)
// }
// chai()

// Explicitly returned
// const addTwo = (num1, num2) => {
//   return num1+num2
// }

//Implicit returned 
// const addTwo = (num1, num2) => num1+num2

// Syntax used in react use parantheses to not use return keyword
// const addTwo = (num1, num2) => (num1+num2)
// to return object ,must wrap in parantheses
const addTwo = (num1, num2) => ({username: "aditya"})
console.log(addTwo(3,4))