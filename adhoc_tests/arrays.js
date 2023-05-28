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

// array concat
// works similar to extends method in python,
// returns a brand new array
const testResults = [1,2,3,4];
const storedResults = testResults.concat([10, 9, 8, 7]);
testResults.push(-1, -2);
console.log(testResults) // [1,2,3,4, -1, -2]
console.log(storedResults); // [1,2,3,4,10,9,8,7]