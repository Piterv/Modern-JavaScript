// Arrays allow us to store multiple values in one variable.
//They can be mutated and iterated through and they can be used in some really complex algorithms.

const numbers = [43, 56, 33, 23, 44, 36, 5]; //numbers
const fruits = ['Apple', 'Banana']; //String
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()]; //all data tyles

//Another way to create an array is to use the array constructor and using the array object.
const numbers2 = new Array(443, 55, 353, 236, 44, 36, 5);

let val;

//Get array length
val = numbers.length;

//Chek if is array
val = Array.isArray(numbers);

//Get single value form array by index.
val = numbers[3];

//Insert into array
numbers[2] = 100;

//Find index of value
val = numbers.indexOf(36);


// **** MUTATING ARRAYS ****


// add on to end
numbers.push(250);

//Add on to front
numbers.unshift(120);

//Take off from end
numbers.pop();

//Take of form front
numbers.shift();

//Splice values
numbers.splice(1,1) //take out value

//reverse array
numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

//Sorting arrays
val = fruits.sort(); //sort in alphabetical order.
val = numbers.sort(); // sort numbers by first number

//Use the "compare function"
val = numbers.sort(function (x, y) {
    return x - y;
});

//Reverse sorting
val = numbers.sort(function (x, y) {
    return y - x;
});

//Find the first number under 50. 
function under50(num){
    return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);