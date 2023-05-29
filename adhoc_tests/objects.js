// OBJECT LITERAL NOTATION

const userInputKeyName = "level";

const person = { 
    'first name': 'ashutosh', //property
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() { // METHOD
        console.log("Hello There!");
    },
    1.5 : 'HELLO',
    [userInputKeyName] : 100, // setting dynamic key
};



person.greet();
// adding new property
person.isAdmin = true;
console.log(person.isAdmin);
console.log(person);

// deleting property
delete person.age;

console.log(person);

// special key names
person['full-name'] = 'Ashutosh dhondkar';
console.log(person);
console.log(person['first name']);

// PROPERTY TYPES AND ORDER
console.log(person["1.5"])
console.log(person[1.5]);
// the ordering of properties is not guaranteed

// dynamically accessing using keys
const keyName = 'first name';
console.log(person[keyName]);