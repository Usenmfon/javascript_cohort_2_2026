//! STRINGS AND THEIR METHODS

let firstName = "Hanson";
let lastName = "Tom";

console.log(firstName[0])

console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.length)

//String Concatenation

let fullName = firstName + " " + lastName;
console.log(fullName);

//String Interpolation

let newFullName = `My name is ${firstName} ${lastName}`
console.log(newFullName);

//Escape charaters: \n \f \r \\

let message = "Call \nme \nback! \nI\'m \nin class. Gerald said \"skks\" ";

console.log(message)

let laugh = "Ha!"

console.log(laugh.repeat(3))

let firstLetter = "s"
let secondLetter = "o"

console.log(firstLetter.concat(secondLetter))


//Classwork

// 1. Define these strings into different variables and join them together using
//     string interpolation; Hello, John, welcome to Javascript class

// 2. Repeat this statement three times: Notice! to be Notice! Notice! Notice!

// 3. Introduce yourself in three lines; you can use any formatting of your choice
