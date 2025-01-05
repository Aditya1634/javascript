const name = "Aditya"
let age = 50
// console.log("My name is" + name + "and my age is: "+ age);

console.log(`My name is ${name} and my age is ${age}`)

// Another way or how strings in javascript are defined
const gameName = new String('aditya-ad-com')
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.substr(1,4))
// console.log(gameName.substring(1,4))
// console.log(gameName.split('-'))
// console.log(gameName.fontcolor('red'))
// console.log(gameName.format(2))

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));