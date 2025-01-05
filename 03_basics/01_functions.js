function sayMyName(){
  console.log("HeisenBerg");
}

// sayMyName // reference
// sayMyName() // call

function addTwoNumbers(num1,num2){ // parameters
  console.log(num1+num2)
}

// addTwoNumbers(1,2) // arguments

function loginUserMessage(username = "DefaultUser"){ // setting default values
  // if(username === undefined){ Similar as below
  if(!username){
    console.log("Please enter username")
    return
  }
  console.log(`${username} just logged in`)
}

// loginUserMessage("Aditya")

// Rest Operator
function calculateCartPrice(num1,num2,...val){
  return val
}
// console.log(calculateCartPrice(100,200,230,400))


const user = {
  username: "Aditya",
  password: "Aditya@123"
}
function handleObject(anyobject){
  return `Username is ${anyobject.username} and password is ${anyobject.password}`
}

// console.log(handleObject(user))
// console.log(handleObject(
//   {
//     username: "Aditya",
//     password: "Aditya@123"
//   }
// ))


function returnSecondValueFromArray(anyArray){
  return anyArray[1]
}

array = [1,2,3,4]
// console.log(returnSecondValueFromArray(array))
console.log(returnSecondValueFromArray([1,2,3,4]))