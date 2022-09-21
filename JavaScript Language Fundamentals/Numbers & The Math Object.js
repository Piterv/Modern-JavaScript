const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers.
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//Math Object

val = Math.round(2.8); // Round number
val = Math.ceil(2.4); // Round up
val = Math.floor(2.8); // Round down
val = Math.sqrt(64); // to square 8 * 8 = 64
val = Math.abs(-3); // It gives absolute version of it.
val = Math.pow(2, 4); //get power
val = Math.min(2,3,5,7); //return minimun value
val = Math.max(2,3,5,7); //return max value
val = Math.random(); // random decimal numbe.

val = Math.ceil(Math.random() * 10);

console.log(val);