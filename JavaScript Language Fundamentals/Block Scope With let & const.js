// var Clobal scope
//let and const = block level scope


//GLOBAL Scope

var a = 1;
let b = 2;
const c = 3;



//Function scope

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope ', a, b, c);
}


//Block Scope

if (true) {
    var a = 7;  //Changed
    let b = 8;
    const c = 9;
    console.log('Block scope ', a, b, c);
}


for (var a = 0; a < 10; a++) {   // var is changing because of global scope.
    console.log(`Loop: ${a}`);
}

for (let a = 0; a < 10; a++) {   // let has block level scope.
    console.log(`Loop: ${a}`);
}




test();

console.log('Global scope ', a, b, c);

