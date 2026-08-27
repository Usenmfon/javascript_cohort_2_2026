let fruits = ['apple', 'orange', 'apple', 'mango']

let apples = fruits.filter((item) => item == 'apple');
let oranges = fruits.filter((item) => item == 'orange');

let mango = fruits.filter((item, index, arr) => console.log(item, index, arr));

console.log(apples);
console.log(oranges);
