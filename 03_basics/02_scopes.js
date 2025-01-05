let c = 300
if(true){
  var a = 100;
  const b = 200;
  let c = 600;
  // console.log(`Inner: ${c}`)
}
// console.log(c)

// Example of closure -> Inner function can access parent variable in nested function
// function one(){
//   const username = "aditya"
//   function two(){
//     console.log(username)
//     const website = "xyz.com"
//   }
//   // console.log(website)

//   two()
// }
// one()

/// Execution context and an example of hoisting

// Runs without error, executes also
addOne(1)
function addOne(num){
  return num+1
}

addTwo(5) // throws error  
// Function expression
const addTwo = function(num){
  return num+2
}