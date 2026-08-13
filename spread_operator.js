function rand(){
    return Math.floor(Math.random() * 5)
}

let nums = [rand(), rand(), rand(), rand()]

// Kini - 1st rand Handling user interactions (click, hover, submit) - 3
// Joel - 2nd rand Event listeners - 2
// Akanimo - 3rd rand Introduction to events - 1
// Bla - 4th rand Event propagation and bubbling - 4

console.log(nums);

let max_number = Math.max(...nums);