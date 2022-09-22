const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'stive@aol.com',
    hobbies: ['music', 'sports'],
    addres: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function () {
        return 2022 - this.age;
    }
}

let val;

val = person;

//Get spesific falue
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.addres.state;
val = person.addres['city'];
val = person.getBirthYear();

console.log(val);


const people = [
    { name: 'John', age: 30 },
    { name: 'Mike', age: 23 },
    { name: 'Nancy', age: 40 }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}