
document.querySelector('.clear-tasks').addEventListener('click', function (e) {
    console.log('Hello World');

    e.preventDefault(); //prevent defaul behavior.
});


document.querySelector('.clear-tasks').addEventListener('click', function onClick(e) {

    // console.log('Clicked');

    let val;

    val = e;


    // Event target element

    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello';

    val = e.type;  // shows type of event


    // Timestamp

    val = e.timeStamp;



    //Coords event relative to the window.
    val = e.clientY;
    val = e.clientX;

    //Coords event relative to the element.
    val = e.offsetY;
    val = e.offsetX;


    console.log(val);


});
