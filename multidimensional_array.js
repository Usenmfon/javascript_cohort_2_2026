let single_array = [1, 2, 3];

// console.log(single_array[0]);
// console.log(single_array[1]);
// console.log(single_array[2]);

let multi_array = [
  [1, 2, 3, 0],
  [4, 5, 6, 1],
  [7, 8, 9, 2],
];

multi_array.forEach(arr => {
    arr.forEach(number => console.log(number));
})

// console.table(multi_array)
// console.log(multi_array[1][0])
// console.log(multi_array[2][2])
// console.log(multi_array[2][0])
// console.log(multi_array[0][3])