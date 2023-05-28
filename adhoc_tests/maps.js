const person1 = {name: "max"};
const person2 = {name: "manuel"};

// const personData = new Map([['key', 'value'], ['key', 'value']])
// in maps, we can have key of any data type
// however in objects, it has to be either string or number
const personData = new Map([
    [person1, [{date: 'yesterday', price: 10}]],
    [person2, {date: 'today', price: 20}]
]);

console.log(personData);
/*
Map(2) {
  { name: 'max' } => [ { date: 'yesterday', price: 10 } ],
  { name: 'manuel' } => { date: 'today', price: 20 }
}
*/

console.log(personData.get(person1)); // [{date: 'yesterday', price: 10}]
console.log(personData.get(person2)); //{date: 'today', price: 20}
// maps are used to store meta data about any item, instead of directly modifying the item and make it 
// more complex as used in this case
// we could have stored extra data in person1 and person2, but since it is irrelevant, we use map
// and access respective meta data any time using the person object as key

// adding data to map
personData.set(person2, ['hello', 'there']);
console.log(personData.get(person2)); // ['hello', 'there']
console.log(person2); // { name: 'manuel' }

// we can use .keys(), .values() and .entries() methods as seen in sets
// however here, .entries will return [(key, value), (key,value)]
for(const entry of personData.entries()) {
    const [key, value] = entry;
    console.log(key, value);
}
/*
{ name: 'max' } [ { date: 'yesterday', price: 10 } ]
{ name: 'manuel' } [ 'hello', 'there' ]
*/

