const arr = [];

arr[2] = "NULL";

for(const elem of arr) {
    console.log(elem);
}

console.log(arr[100]);
console.log(arr.length);

// // splice
// const hobbies = ['Coding','Playing', 'Cooking', 'Swimming'];
// // replace element from index 1, with deleteCount of 1 and replace it with the element provided
// const deletedElement = hobbies.splice(1, 1, 'Ashutosh');
// console.log(deletedElement);
// console.log(hobbies);

// const deleted = hobbies.splice(1, 1);
// console.log(deleted);
// console.log(typeof deleted);
// console.log(hobbies);

// // if the start is greater than array length, then it will add the element at last
// hobbies.splice(20, 1, "ashutosh");
// console.log(hobbies);
// console.log(hobbies.length);


// range and creating copies
// const testResults = [1, 5.3, 1.4, 10.99, -5, 10];
// // if we dont pass start and end value in splice, it returns the entire array
// const storedResults = testResults.splice();
// console.log(testResults === storedResults);

// // splice returns a brand new array, ie new copy
// console.log(testResults.slice())
// // similar to list slicing in python
// console.log(testResults.slice(1, 5));

// // array concat
// // works similar to extends method in python,
// // returns a brand new array
// const testResults = [1,2,3,4];
// const storedResults = testResults.concat([10, 9, 8, 7]);
// testResults.push(-1, -2);
// console.log(testResults) // [1,2,3,4, -1, -2]
// console.log(storedResults); // [1,2,3,4,10,9,8,7]

// // get index using indexOf and lastIndexOf
// const testResults = ["ashutosh", "dhondkar", "apurva", "ambekar"];
// const resultIndex = testResults.indexOf("test");
// console.log(resultIndex); // -1 => element not found

// console.log(testResults.indexOf("apurva"));
// // indexOf => returns index of first matching element from left
// // lastIndexOf => returns index of matching elemrnt from right
// // works fine only for primitive values and not for reference values

// if we want to get index of reference values from array, we can use find/ method
const people = [{name: "Ashutosh"}, {name: "Apurva"}];

// returns element if found in array, else returns undefined
const ashutosh = people.find((person, idx) => person.name === "Dhondkar");
// returns index  of element in array, returns -1 if element is not found
const ashutoshIndex = people.findIndex((person, idx) => person.name === "Dhondkar");
console.log(ashutosh, ashutoshIndex);