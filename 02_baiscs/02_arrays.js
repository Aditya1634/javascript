const marvel_heroes = ["IronMan","Thor"]
const dc_heroes = ["BlackAdam","Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

// // Another method spread operator ; kanch ki bottle neeche giri spread adv=> 2 se jyada arrays ko spread krne ke lie
// const new_heroes =  [...marvel_heroes,...all_heroes,...dc_heroes]
// console.log(new_heroes)


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))
console.log(Array.from({name: "Aditya"})) // Interesting => returns empty array in case of objects

const num1 = 100
const num2 = 100
const num3 = 100

console.log(Array.of(num1,num2,num3,null))