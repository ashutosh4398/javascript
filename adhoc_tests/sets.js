// EXPLORING SETS
// Set(iterable);
const ids = new Set([1,2,3,4,4,4,4]);
console.log(ids);
console.log(ids[1]); // undefined -> index based access NOT allowed

// no getter to get value
// we can only check if a value is present in set or not
console.log(ids.has(45)) // false
console.log(ids.has(4)) // true

// adding new values to set
ids.add(34);
console.log(ids.has(34)) // true
console.log(ids); // {1,2,3,4,34} // order cannot be guaranteed


console.log(ids.values()); // iterator {1,2,3,4,34}
console.log(ids.entries()); //{[1,1], [2,2], [3,3], [4,4], [34,34]}
console.log(ids.keys()); // {1,2,3,4,34}

// the methods values, entries and keys are similar to what we mostly use for objects and which we will
// be using for Map as well

// deleting
ids.delete(2);
ids.delete("ashutosh"); // ignores since "ashutosh" is not present in ids -> NO ERROR RAISED
console.log(ids); //{1,3,4,34}

// converting set to arrays to take advantage of array methods
const arrayIds = Array.from(ids);
console.log(arrayIds);