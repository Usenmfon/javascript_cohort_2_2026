//! Closure keeps data/variables alive b/w calls


function counter() {
    let count = 0;

    return function(){
        count++;
        return count;
    }
}

let increment = counter()
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())