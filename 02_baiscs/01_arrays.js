let arr = [1,2,3,4,5]
console.log(arr)
// Shallow Copy -> gives reference => changes in one leads to changes in another
// Deep Copy => contr   
// console.log(arr.slice(2,3))
// console.log(arr.splice(2,3)) // deletes from array and returns a section

arr.push(5)
arr.pop()
arr.unshift(9) // adds element to the start
arr.shift()
console.log(arr)

console.log(arr.includes(9))
console.log(arr.indexOf(9))

console.log(arr.join())