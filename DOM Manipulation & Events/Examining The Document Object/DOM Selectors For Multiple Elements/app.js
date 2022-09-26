// documen.getElementsByClassName

const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);

items[0].style.color = 'red';
items[3].textContent = 'Hello World';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);


//document.getElementByTagName()

let lis = document.getElementsByTagName('li');

console.log(lis);
console.log(lis[0]);

lis[0].style.color = 'red';
lis[2].textContent = 'Hello';


// //Conver HTML Collection into array

lis = Array.from(lis);

lis.reverse();

lis.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index} : Hello `;
});


console.log(lis);



// *************    document.querySelectorAll()  **************

//A node list actually counts not just elements, but things like text nodes.
//It also allows us to do things like for each and do some other array methods without having to convert it.


const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (item, index) {     // I didn't have to convert it to an array since it's a node list.
    item.textContent = `${index} : Hello `;
  });


const liOd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


liOd.forEach(function (li, index) { 
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++ ){
  liEven[i].style.background = 'f4f4f4';
}


console.log(items);