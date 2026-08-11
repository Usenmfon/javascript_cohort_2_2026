
let person = {
    name: 'Bla',
    gender: 'female',
    course: 'Javascript',
    age: 12,
    complexion: 'dark',
}

let {name, age, ...rest_of_the_objs} = person;

console.log(name)
console.log(age)
console.log(rest_of_the_objs)