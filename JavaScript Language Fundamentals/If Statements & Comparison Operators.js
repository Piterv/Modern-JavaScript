// If statements are used to evaluate some kind of condition and then do something based on that condition
//  or something else if that condition isn't met.

// if(something is true){
//     do something
// }else{
//     do something else
// }

const id = 100;

//EQUAL TO
if (id == 100) {
    console.log('CORRECT')
} else {
    console.log('INCORRECT')
}

//NOT EQUAL TO
if (id != 101) { // this is saying if ID is not equal to 101.
    console.log('CORRECT')
} else {
    console.log('INCORRECT')
}


//EQUAL TO VALUE AND TYPE
if (id === 100) { // ===
    console.log('CORRECT')
} else {
    console.log('INCORRECT')
}


//NOT EQUAL TO VALUE AND TYPE
if (id !== 100) { // ===
    console.log('CORRECT')
} else {
    console.log('INCORRECT')
}

//
if (typeof id !== undefined) { // to test to see if something is undefined.
    console.log(`The id is ${id}`)
} else {
    console.log('NO ID')
}

// Greater OR Less than

if (id < 200) {
    console.log('CORRECT')
} else {
    console.log('INCORRECT')
}

// IF ELSE

const color = "yellow";

if (color == 'red') {
    console.log('Color is red');
} else if (color == 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not blue nor red but yellow');
}


// Logical operators

const name = 'Steve';
const age = 25;

//AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${age} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

//OR ||
if (age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for race`)
}


//TERNARY OPERATOR ?

console.log(id === 100 ? 'Correct' : 'Incorect');

//WITHOUT BRACES.   the brackets or the curly braces are actually optional.

if (age < 16 || age > 65)
    console.log(`${name} can not run in race`);
else
    console.log(`${name} is registered for race`)
