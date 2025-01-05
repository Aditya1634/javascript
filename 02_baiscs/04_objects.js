// Singleton

const tinderUser = new Object()
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    userfullname : {
      firstName : "Aditya",
      lastName : "Dhage"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {
  1: "a",
  2: "b"
}

const obj2 = {
  3: "a",
  4: "b"
}
// const obj3 = {
//   obj1,
//   obj2
// }
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3  = {...obj1,...obj2}
// console.log(obj3)

const users = [
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 1,
    email: "a@gmail.com"
  }
]

// console.log(users[1].email)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// Objects Destructuring and JSON API

const course = {
  courseName: "JS In Hindi",
  coursePrice: 999,
  courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor)

// React eg
// Instead of writing props.company => this destructuring syntax is used
// const navbar = navbar({company}) => {

// }
// navbar(company = "Aditya")


// JSON API

// {
//   "name": "hitesh" ,
//   "coursename": "js",
//   "price": "free"
// }