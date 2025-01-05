// for

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number")
//   }
//   console.log(element)
// }

for (let i = 0; i < 3; i++) {
  console.log(`outer ${i}`)
  for (let j = 0; j < 3; j++) {
    console.log(`Inner Loop ${j} and outer${i}`) 
  }
}