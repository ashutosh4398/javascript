while (true) {
  const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
  const secondNum = Math.random();
  if (
    (randomNumber >= 0.7 && secondNum >= 0.7) ||
    randomNumber < 0.2 ||
    secondNum < 0.2
  ) {
    alert(`${randomNumber}, ${secondNum}`);
    break;
  }
}

const arr = [10, 7, 18, 45];
// using for-of loop for iterating over array
console.log("ITERATING ARRAY USING FOR-OF LOOP");
for (const num of arr) {
  console.log(num);
}

console.log("ITERAINT ARRAY USING CONVENTIONAL FOR LOOP");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("REVERSING AN ARRAY");
for (let j = arr.length - 1; j >= 0; j--) {
  console.log(arr[j]);
}
