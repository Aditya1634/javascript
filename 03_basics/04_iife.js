// Immediately Invoked Funtion Expression
// Some code like databse connection which we want to get immediately executed can be written
// to avoid from pollution from global scope

// Named IIFE
(function chai(){
  console.log("DB connected")
})();
// Semi colon required to tell where to stop context


// Syntax : ()() => 1st parantheses definiton, 2nd is call no need to write function name and call

( (name) => {
  console.log(`DB connected 2 ${name}`)
} )('aditya')