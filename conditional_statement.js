// if, else if, else

let is_raining = true;
let have_umbrella = false;

if(is_raining)
{
    console.log("Go and sleep!")
}else {
    console.log("Go play outside!")
}


let student_grade = 45;

if(student_grade >= 80)
{
    console.log("Grade - A")
}else if(student_grade >= 70)
{
    console.log("Grade - B")
}else if(student_grade >= 60)
{
    console.log("Grade - C")
}else if(student_grade >= 50)
{
    console.log("Grade - D")
}else if(student_grade >= 40)
{
    console.log("Grade - E")
}else {
    console.log("Grade - F")
}


// FizzBuzz: Fizz - 3, Buzz - 5

let number = 2;

if((number % 3 == 0) && (number % 5 == 0))
{
    console.log("FizzBuzz");
}else if(number % 3 == 0)
{
    console.log("Fizz")
}else if(number % 5 == 0)
{
    console.log("Buzz")
}else{
    console.log("None")
}

