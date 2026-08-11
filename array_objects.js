let items = ["gp", "go", "matrix"];
let i = [1, 4, 5, 6];

let students = [
  {
    name: "Bla",
    gender: "female",
    course: "Javascript",
    age: 12,
    complexion: "dark",
  },
  {
    name: "Akanimo",
    gender: "male",
    course: "Python",
    age: 20,
    complexion: "chocolate",
  },
  {
    name: "Kini",
    gender: "male",
    course: "Java",
    age: 20,
    complexion: "dark",
  },
  {
    name: "Joel",
    gender: "male",
    course: "Python",
    age: 20,
    complexion: "fair",
  },
];

students.forEach((student) => console.log(`Hi, I am ${student.name} and I am learning ${student.course}`))
