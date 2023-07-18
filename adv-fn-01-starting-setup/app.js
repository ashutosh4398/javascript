// pure function without side-effects
const add = (num1, num2) => {
    return (num1 + num2);
}

console.log(add(1,4)); // 5
console.log(add(12,15)); // 27


// impure function
// as the output changes even when the inputs are same
const addRandom = (num) => {
    return num + Math.random();
}

console.log(addRandom(10));
console.log(addRandom(10));
console.log(addRandom(10));


// impure function
// causing side effects
const previousResult = 0;
const addNumbers = (num1, num2) => {
    const sum = num1 + num2;
    previousResult = sum; // modifies something outside the function => causing SIDE EFFECTS
    return sum
}

// FACTORY FUNCTIONS
const createTaxCalculator = (tax) => {
    return (amount) => {
        return tax * amount;
    }
};

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100))
console.log(calculateVatAmount(200))

console.log(calculateIncomeAmount(100))
console.log(calculateIncomeAmount(200))