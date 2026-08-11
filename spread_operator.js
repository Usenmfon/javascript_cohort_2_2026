function rand(){
    return Math.floor(Math.random() * 5)
}

let nums = [rand(), rand(), rand(), rand()]

// Kini - 1st rand Handling user interactions (click, hover, submit)
// Joel - 2nd rand Event listeners
// Akanimo - 3rd rand Introduction to events
// Bla - 4th rand Event propagation and bubbling

console.log(nums);

let max_number = Math.max(...nums);

console.log(max_number)