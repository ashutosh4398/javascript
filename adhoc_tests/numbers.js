// BIGGEST INTEGERS => WITH NO DECIMAL PLACES
// INTERNALLY THE NUMBERS ARE STORED IN 64BITS FLOATING POINT REPRESENTATION
// | SIGN(1BIT) | EXPONENT (11BITS) | MANTISSA (53 BITS) |
// SINCE WE ARE TALKING PURELY ABOUT INTEGERS, THE EXPONENT'S VALUE IS 0
// THUS THE MAXIMUM VALUE OF INTEGER CAN BE (2^53)-1
// SAME IS THE CASE FOR NEGATIVE INTEGER IE -(2^53)-1

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// // IF WE TRY TO PERFORM CALCULATIONS BEYOUND SAFE INTEGER, IT WILL GIVE UNEXPECTED RESULTS
// const max_number = Math.pow(2,53)-1
// console.log(max_number);
// console.log(max_number + 2);


// console.log(Number.MAX_VALUE);

// STRANGE OUTPUTS
console.log(0.2 + 0.4);
console.log(0.2 + 0.4 === 0.6);
console.log(0.2.toString(2), 0.4.toString(2));

// numbers are converted to binary(64 bits), operations are performed and the results are 
// converted back to decimal
// thus this inconsistency

// force js to represent numbers in specified precision
const num = 0.2
// js is smart enough to show us 0.2 in console, 
console.log(num); 
// but the number it orignally stores after conversion is shown below
console.log(num.toFixed(20)); // 0.20000000000000001110

// generating random numbers between given numbers
function randomIntBetween(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

