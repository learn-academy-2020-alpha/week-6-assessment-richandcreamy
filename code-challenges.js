// ASSESSMENT 6: Coding Practical Questions  

// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy,"}, {name: "arthur dent", occupation: "radio employee"}]

// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

// const introduction = (people) => {
//     let capFirst = people.map(person => {
//     person.name =  person.name.split(' ').charAt(0).toUpperCase() + person.name.substring(1).join(' ')
//     })
//     // let occIntro = people.map(ppl => {
//     //     ppl.occupation = 'is a' + ppl.occupation + '.'
//     // } )
//     // return capFirst + ' ' + occIntro
// }

// console.log(introduction(people))


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.
var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const remainderThree = (arr) => {
    let noString = arr.filter(x => typeof x === "number")
    return noString.map(x => x % 3)
}

console.log(remainderThree(testingArray1))
console.log(remainderThree(testingArray2))



// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

