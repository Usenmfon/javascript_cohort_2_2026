function rand(){
    return Math.floor(Math.random() * 50)
}

let nums = [rand(), rand(), rand(), rand()]

console.log(nums);

let max_number = Math.max(...nums);

console.log(max_number)