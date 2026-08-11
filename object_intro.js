// let name = 'magero'
// let color = 'magenta'
// let height = '10 inches'
// let width = '5 inches'
// let bottle = 'plastic'


let obj = {
    name: 'Magero',
    color: 'Magenta',
    height: 10,
    width: 5,
    bottle: 'plastic',
}

let person = {
    name: 'Bla',
    gender: 'female',
    course: 'Javascript',
    age: 12,
    complexion: 'dark',
    greetings: function() {
        console.log(`Hello there! I am ${this.name}`)
    }
}

person.name = "Blessing";
person.age = 17;

console.log(obj)
console.log(person)

console.log(person.name)
console.log(person.gender)

console.log(person['name'])

console.log(Object.keys(person))
console.log(Object.values(person))

person.greetings()