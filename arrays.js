let fruits = ['apple', 'mango'];

console.table(fruits);

console.log(fruits[0])

console.log(fruits[1])

//! Add items
fruits.push('orange')
fruits.push('pineapple', 'grape')


//! Remove Item from the back
fruits.pop()
fruits.pop()

//! Remove first item
fruits.shift();

//! Add item to the front
fruits.unshift('carrot')

console.table(fruits);
console.log(fruits);