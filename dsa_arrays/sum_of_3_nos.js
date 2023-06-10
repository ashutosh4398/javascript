`Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. If there is such a triplet present in array, then print the triplet and return true. Else return false.

Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
Output: 12, 3, 9 
Explanation: There is a triplet (12, 3 and 9) present 
in the array whose sum is 24. 
Input: array = {1, 2, 3, 4, 5}, sum = 9 
Output: 5, 3, 1 
Explanation: There is a triplet (5, 3 and 1) present 
in the array whose sum is 9.

`
target = 12;
const sumOfTwo = (array, target) => {
    visitedNums = {};
    for(const i in array) {
        const otherHalf = Math.abs(array[i] - target);
        if(visitedNums[otherHalf] !== undefined) {
            return [array[i], otherHalf];
        } else {
            visitedNums[array[i]] = i;
        }
    }
    return []
}

const sumOfThreeNumbers = (array, target, triplet=[], n=3) => {
    visitedNums = {}

    for(const i in array) {
        
        const otherHalf = Math.abs(target - array[i]);        
        const sumOfTwoNo = sumOfTwo(array, otherHalf);
        if (sumOfTwoNo.length) {
            return [array[i], ...sumOfTwoNo];
        }
    }
    return false;
};


const array = [12, 3, 4, 1, 6, 9];
const sum = 8; 
console.log(sumOfThreeNumbers(array, sum));