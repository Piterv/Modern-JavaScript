let val;

//Number to string

// String() 
val = 5; // Length only works on strings because it's a string method. It's a string property. It gives you the number of characters in a string.
val = String(5);
val = String(4 + 4);

//Bool to string
val = String(true); //we get true as a string and we get four from the length.

//Data to string.
val = String(new Date());

//Array to string.
val = String([1, 2, 3, 4]);

//toString()
val = (5).toString();
val = (true).toString();



// String to number

val = '5';
val = Number('5');
val = Number(true); //If we if we pass a true value as a number, it gives us one.
val = Number(false);//If we if we pass a false value as a number, it gives us zero.
val = Number(null); //also gives us zero.
val = Number('hello'); // NaN Not a number.
val = Number([1, 2, 3, 4]); // NaN Not a number.

val = parseInt('100.30'); //100
val = parseFloat('100.30'); // 100.3   For decimals
val = parseFloat('100.31'); // 100.31  For decimals

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length);  //Property that works only on strings.
console.log(val.toFixed()); //decimal number after point.


//coercion

const val1 = String(5); //string
const val2 = 6; // changed the six to a string and then basically concatenated it, put one in front of theother.
const sum = val1 + val2; //56    concatenation

console.log(sum);
console.log(typeof sum);