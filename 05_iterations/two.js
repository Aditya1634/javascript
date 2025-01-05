// for of -> arrays

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//   console.log(num)
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")
// map.set('IN', "India")

// console.log(map)

for (const key of map) {
  console.log(key)
}

// Destructured Array
for (const [key, value] of map) {
  // console.log(key)
  console.log(key, ':-' ,value)
}


// Not iterable
const myObj = {
  'game1': 'NFS',
  'game2': 'Far Cry'
}
// for (const [key, value] of myObj) {
//   console.log(key, ':-' ,value)
// }