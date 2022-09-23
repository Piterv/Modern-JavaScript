//  the window is the global object in client side JavaScript.



//WINDOW METHODS  / OBJECTS  / PROPERTIES

console.log(123);

alert

window.alert('Hello');

alert('Hello');



//prompt



const input = prompt();

alert(inputre)



//Confirm
if (confirm('Are you sure')) {
    console.log('Yes');
}



let val;



//Outter height and width;

val = window.outerHeight;
val = window.outerWidth;



//Inner height and width;

val = window.innerHeight;
val = window.innerWidth;



//Scroll points
val = window.scrollY;
val = window.scrollX;



//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port
val = window.location.href
val = window.location.search



//Redirect
window.location.href = 'http://google.com';

// //Reload

window.location.reload();



//History Object.     get browsing history.
window.history.go();
window.history.go(-1);


val = window.history.length;


//Navigator Object

//the navigator object has to do with the actual browser, not the window or the environment, but the browser itself.


val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);
