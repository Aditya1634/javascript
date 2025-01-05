// for each- higher order
const coding = ["js", "ruby", "cpp", "python"]

// callback fn dont have name
// coding.forEach( function (item) {
//   console.log(item)
// } )

// coding.forEach((item) => {
//   console.log(item)
// })

// function printMe(item){
//   console.log(item)
// }

// reference of a predeclared fn is given
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//   console.log(item, index, arr)
// })

const myCoding = [
  {
    languageName: "javascript",
    fliename: "js"
  },
  {
    languageName: "c++",
    fliename: "cpp"
  },
  {
    languageName: "python",
    fliename: "py"
  },
]

myCoding.forEach( (item)=> {
  console.log(item.languageName)
} )