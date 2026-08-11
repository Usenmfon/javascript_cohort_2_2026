//* For Looop, ForEach, Map


let names = ['Akanimo', 'Kini', 'Bla', 'Joel', 'Jon', 'Tommy', 'Esther'];

// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])

// For loop
// for(let i = 0; i < names.length; i++)
// {
//     console.log(names[i]);
// }


// For Each

// names.forEach((name) => console.log(name));
let allNames2 = names.forEach((name) => console.log(name));

console.log(allNames2)


// map
// names.map((name) => console.log(name))

let allNames = names.map((name) => `Hi ${name}`)

console.log(allNames)