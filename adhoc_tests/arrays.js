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
