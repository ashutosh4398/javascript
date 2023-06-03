`<aside>
💡 **Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

</aside>`

// const addLargeNumber = digits => {
//     let carry = 1; // since we have to add 1 to the last element
//     for(let i = digits.length-1; i >= 0; i--) {
//         const temp = (digits[i] + carry);
//         carry = parseInt(temp / 10);
//         digits[i] = temp%10;
//     }
//     if (carry > 0) {
//         digits.unshift(carry);
//     }
//     return digits;
// }

const addLargeNumber = (digits, carry=1, i=digits.length-1) => {
    if(i < 0) {
        if(carry) {
            digits.unshift(carry);
        }
        return digits;
    }

    const temp = digits[i] + carry;
    digits[i] = temp%10;
    carry = parseInt(temp/10);
    return addLargeNumber(digits, carry, i-1);
}

// test cases
console.log(addLargeNumber([9,9,9]));
// console.log(addLargeNumber([1,2,3]));