//Function Declarations

function greet() {
    return 'Hello';
}

greet();
console.log(greet());


//functions can take parameters also called arguments.

function greet1(firstName, lastName) {
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet1('John', 'Smith'));


//If parameters are not passed. We define each parameter and it is overwritten.

function greet2(firstName = 'Bob', lastName = 'Roy') {
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet2());


//FUNCTION EXPRETIONS

const square = function (x) {
    return x * x;

};

console.log(square(8));





// **** immediately invoke able function expressions - IIFEs. ****

//it's a function that you declare and run at the same time.

(function () {
    console.log('IIFEs Ran..')
})();


//Paramethers.

(function (name) {
    console.log('IIFEs Ran.. Hello' + name)
})('Brad');




//Functions in objects

// *** when a function is put inside of an object, it's called a method ***

const todo = {

    add: function () {
        console.log('Add todo..');
    },
    eddit: function (id) {
        console.log(`Edit todo ${id}`);
    }
}


//define functions for this object outside of this.

todo.delete = function () {
    console.log('Delete todo...');
}

todo.add();
todo.eddit(22);
todo.delete();