// QUESTION 1
const arr = [10, 20, 30, 11, 1, 2, 4, -1, -2];
const filteredShallowCopy = arr.filter((elem) => elem > 5);
console.log(filteredShallowCopy);

const mappedArray = arr.map((elem) => ({ num: elem }));
console.log(mappedArray);

const multiplicationResult = arr.reduce(
  (previousValue, currentValue) => previousValue * currentValue,
  1
);
console.log(multiplicationResult);

// QUESTION 2
const findMax = (...numbers) => {
  // REST OPERATOR
  let max;
  numbers.forEach((num, _) => {
    max = !max ? num : num > max ? num : max;
  });
  return max;
};

const maxVal = findMax(...arr);
console.log(maxVal);

// QUESTION 3
const findMaxAndMix = (...numbers) => {
  let max, min;
  numbers.forEach((num, _) => {
    max = !max ? num : num > max ? num : max;
    min = !min ? num : num < min ? num : min;
  });
  return [max, min];
};

const [maxVal1, minVal1] = findMaxAndMix(...arr); // ... used as spread operator
console.log(maxVal1, minVal1);

// QUESTION 4
const myNums = new Set();

const storeUniqueValues = (num) => {
  if (myNums.has(num)) {
    console.log(`SORRY, THE NUMBER ${num} IS ALREADY ADDED`);
    return;
  }
  myNums.add(num);
  console.log(Array.from(myNums));
};

storeUniqueValues(1);
storeUniqueValues(1);
storeUniqueValues(2);
storeUniqueValues(2);
storeUniqueValues(2);
storeUniqueValues(5);
