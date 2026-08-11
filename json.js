//! JavaScript Object Notation (JSON)

//* Object
let person1 = {
    name: "Akan",
    age: 40,
    gender: 'male'
}


//* Json
let person2 = {
    "name": "Akan",
    "age": "40",
    "gender": "male"
}

console.log(person1)
console.log(person2)


let car = {
    brand: 'Toyota',
    model: 'Matrix',
    year: 2024
}

let json = JSON.stringify(car)

console.log(json)

let object = JSON.parse(json)

console.log(object)