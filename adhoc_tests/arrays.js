const arr = [];

arr[2] = "NULL";

// for(const elem of arr) {
//     console.log(elem);
// }

// console.log(arr[100]);
// console.log(arr.length);

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

// // if we want to get index of reference values from array, we can use find/ method
// const people = [{name: "Ashutosh"}, {name: "Apurva"}];

// // returns element if found in array, else returns undefined
// const ashutosh = people.find((person, idx) => person.name === "Dhondkar");
// // returns index  of element in array, returns -1 if element is not found
// const ashutoshIndex = people.findIndex((person, idx) => person.name === "Dhondkar");
// console.log(ashutosh, ashutoshIndex);

// includes method [used in array of primitive values]
// const names = ['apurva','ashutosh', 'dhondkar'];
// console.log(names.includes('ambekar'));
// console.log(names.includes('ashutosh'));

// forEach loop
const prices = [5,10.99, 1, 30, 60];
const tax = 0.18;
// const taxAdjustedPrices = [];

// // here we dont have access to index, explicitly
// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * tax);
// // }
// // console.log(taxAdjustedPrices); // [ 1.9782, 0.18, 5.3999999999999995, 10.799999999999999 ]
 
// // alternative approach for iterating using forEach loop
// prices.forEach((price, idx, prices) => {
//     // please note that prices params will be shadowed and will be only accessible inside this callback fn
//     // but since it is a reference, if we modify it, the changes will also reflect on the original object
//     // prices.push("ashutosh")
//     taxAdjustedPrices.push({index: idx, adjustedPrice: price + (tax*price)});
// });

// console.log(taxAdjustedPrices);


// transforming array using map method
// returns a brand new array with the return values
// prices array will not be modified
// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const elem = {index: idx, adjustedPrice: price + (tax*price)};
//     return elem;
// });

// console.log(taxAdjustedPrices);

// // sorting 
// console.log(prices.sort()); // [1, 10.99, 30, 5, 60]
// // this is because .sort() by defaults converts all elements to strings and then sorts them in lexicographic order
// // sort returns reference to the same array
// prices.sort((a,b) => {
//     // possibe values =[(1,10.99), (10.99, 30), (30, 5), (5,60)]
//     // thus it will swap the values based on return type, +ve, -ve or 0
//     if(a > b){
//         return 1; // (a,b) = (1, 10.99) keep a after b => [b,a] => [10.99, 1]
//     } else if(a === b) {
//         return 0; // keep original positions of a,b
//     } else {
//         return -1; // keep a before b => [a,b] => [1, 10.99]
//     }
// });
// console.log(prices);

// // filtering array
// const people = [{name: "ashutosh"}, {name: "apurva"}, {name: "test91"}, {name: "sies"}];
// // returns a new array ie shallow copy
// // if operation result is true, then only keep them else in case of false, remove them
// // just like filter we use in list comprehension in python
// const relatedNames = people.filter((obj) => obj.name !== 'test91');
// console.log(relatedNames)
// console.log(relatedNames === people);
// console.log(relatedNames[0].name, people[0].name);
// console.log(relatedNames[0] === people[0]);


// // reduce method
// const pricesArr = [10, 20, 30, 40];
// // here 0 is the initial value ie it will be set in prevValue while currentValue is 10
// // afterwards, prevValue will be 0+10 and currentValue will be 20

// const arraySum = pricesArr.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
// console.log(arraySum);
// // please note, the original array is not modified

// splitting string to an array
const csvValue = "ashutosh dhondkar;25;karza tech";
// if we dont pass anything it returns [<original string>] => ["ashutosh dhondkar;25;karza tech"]
const userDetails = csvValue.split(";");
console.log(userDetails);

// joining back to string
// by default, if separator is not passed to join(), it considers ','
const csv = userDetails.join(';');
console.log(csv);