const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template string (es5) old way.

html = '<ul> <li>Name: ' + name + '</li> <li>Age: ' + age + ' </li><li>Job:' + job + ' </li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';


function hello() {
    return 'hello';
}

//With template strings or template literals (es6) 
// ${verible}


html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <li>Expressions: ${2 + 2} </li>
        <li>functions: ${hello()} </li>
        <li>Conditions: ${ age > 30 ? 'Over 30' : 'Under 30'} </li>
    </ul>
`;


document.body.innerHTML = html;