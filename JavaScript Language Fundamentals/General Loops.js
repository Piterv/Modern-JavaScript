// So a loop is an instruction that repeats until a specific condition is reached.


// FOR LOOP 

for (let i = 0; i < 10; i++) {


    if (i == 2) {
        console.log('2 is my favorite number');

        continue; //  Stops the loop here and just go to the next iteration.
    }

    if (i == 5) {
        console.log('Stop the loop')

        break; // It breaks out of the loop.
    }

    console.log(i);
}


// WHILE LOOP

// One general rule that for loop when you know, when you
// know how many times it's going to run, how many iterations it's going to have,
// and then use a while loop when you don't, when it's unclear.

let i = 0;

while (i < 10) {
    console.log('Number ' + i);
    i++;
}

// DO WHILE

//a while and a do while is that it's always going to run once no matter what.

let i = 100;

do {

    console.log('Number ' + i);
    i++;
} 

while (i < 10);



//LOOP TROUGH ARRAY

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log(element);

}


//FOREACH LOOP

cars.forEach(function (car) {  // value
    console.log(car);
});


cars.forEach(function (car, index) {   // value, index
    console.log(`${index} : ${car}`);
});


cars.forEach(function (car, index, array) {   // value, index, array
    console.log(`${index} : ${car}`);
    console.log(array);
});


//MAP

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Peter' },
    { id: 4, name: 'Steve' },
]

const ids = users.map(function (user) {
    return user.id
});

console.log(ids);


// For IN LOOP.   Uses often for objects.

const user = {
    firstName: 'Peter',
    lastName: "Doe",
    age: 40
}


for (let x in user) {                 // x = key
    console.log(`${x} : ${user[x]}`);
}
