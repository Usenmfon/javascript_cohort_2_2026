// Logical Ops: And (&&), Or (||), Not (!)

let is_raining = true;
let have_umbrella = false;

let go_to_the_market = is_raining && have_umbrella;

// console.log(go_to_the_market);

//Truth Table - AND - &&
console.log(`True && True = ${true && true}`);
console.log(`True && False = ${true && false}`);
console.log(`False && True = ${false && true}`);
console.log(`False && False = ${false && false}`);


//Truth Table - OR - ||
console.log(`True || True = ${true || true}`);
console.log(`True || False = ${true || false}`);
console.log(`False || True = ${false || true}`);
console.log(`False || False = ${false || false}`);


// NOT !

console.log(`!True = ${!true}`)
console.log(`!False = ${!false}`)