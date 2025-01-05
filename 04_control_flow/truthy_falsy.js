// falsy value : false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values
// "0", 'false', " ", [], {}, funciton(){}

// const userEmail = []
// if (userEmail.length === 0) {
//   console.log("Empty")
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length===0) {
//   console.log("Empty Object")
// }

// console.log(false == 0) // op : true
// console.log(false == '') // op : true
// console.log('' == 0) // op : true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // op :10 but in db code 10 ki jagah complex function we can write

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary Operator if else shortand
// condtion ? true : false

const price = 100
price>=80 ? console.log("greater than 80") : console.log("less thawn 80")