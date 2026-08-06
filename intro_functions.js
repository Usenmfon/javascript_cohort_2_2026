//! Function Declaration

// function greet() {
//     console.log("Hello everyone!!!")
// }

// greet()
// greet()
// greet()
// greet()
// greet()

//! Return Statement

// function studentStatus()
// {
//     return true;
// }

// if(studentStatus())
// {
//     console.log("He is a student here!")
// }



//! Parameters and Arguements

function person(firstName, age) {
    console.log(`Hi! my name is ${firstName} and I am ${age} years old`)
}

// person("Bla", 30)

//! Default Parameters

function multiply(num1, num2 = 1)
{
    console.log(num1 * num2)
}

multiply(2);
multiply(2, 5);


function greetings(firstName = "Admas", time = "Good morning")
{
    console.log(`${time}. ${firstName}`)
}

greetings()
greetings("Akanimo", "Good afternoon")


//! function xpression and fnc declaration
fncName1()

function fncName1()
{

}



let example = function fncName2() {
    
}

example()



//Exercise - Times table: 2, 5, 9

//Write a function that prints out the following multiplication tables: 2, 5, and 9.

function multiplicationTable(table){
    for(let i = 1; i <= 12; i++)
    {
        console.log(`${table} x ${i} = ${table * i}`);
    }
    console.log("------------------------");
}

multiplicationTable(2)
multiplicationTable(5)
multiplicationTable(9)


//! Arrow funcions

let sum = (a, b) =>  a + b;

console.log(sum(10,12))

let personGreeting = (firstName) => console.log(firstName);

personGreeting("Bla")


let systemAppearance = (theme = 'system') => console.log(`Your current mode is ${theme} theme`)

systemAppearance('dark');


(function(){
    console.log("Hello there!!!!")
})()