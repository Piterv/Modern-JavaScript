const firstName = "William";
const lastName = 'John';
const age = 36;
const str = 'Hello there my name is Peter';
const tags = 'web design, web development, programing';

let val;


val = firstName + lastName;

//Concationation
val = firstName + ' ' + lastName;
val = 'Hello, my name if ' + firstName + ' and i am ' + lastName;

//Append
val = 'Peter ';
val += "Zgh";

//Escaping
val = "That's awesome, I can't wait "
val = "That\'s awesome, I can\'t wait " //This ackslash escapes quote, making it just a regular character.


//Length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toLocaleLowerCase();
val = firstName.toLocaleUpperCase();

val = firstName[0] //Taking the zero index of this value.

//indexOf()
val = firstName.indexOf('l'); // it looks for the first l it finds and gives us the index.
val = firstName.lastIndexOf('l'); // it looks for the last l it finds and gives us the index.


//charAt()
val = firstName.charAt('2'); //It gives char at index 2.

//Get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);

//sllice()
val = firstName.slice(0, 4);
val = firstName.substring(-3); //it'll start from the back and it'll take the last three.

//split
val = str.split(' ');
val = tags.split(',');

//replace
val = str.replace('Peter', 'Bob'); // replace something inside the string.

//includes, gives you a true or false value based on if something is in the string.
val = str.includes("Hello"); //true 




console.log(val);