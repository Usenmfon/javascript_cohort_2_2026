

let fullName = ["Kini", "Essien", "Tom", "Umoren"];

let [firstName,,,lastName] = fullName;

console.log(firstName)
console.log(lastName)

let students = ["Akanimo", "Kini", "Bla", "Joe"];

let [firstStudent, ...rest_of_the_students] = students

console.log(firstStudent)

console.log(rest_of_the_students)

