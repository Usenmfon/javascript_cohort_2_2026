//! Global Scope
let name = "Adams"; // Global Scope

function greetings()
{
    console.log(`Hello ${name}`)
}

greetings()

//! Local Scope
function sum()
{
    let num1 = 2; //local scope
    let num2 = 8; //local scope
    console.log(num1 + num2);
}

sum();
// console.log(num1);


//! Lexical Scope
function parentFunction()
{
    let name = "Jameson";
    function childFunction(){
        let greetings1 = "Hello";

        console.log(`${greetings1} ${name}`);
    }
    childFunction()
}
parentFunction()