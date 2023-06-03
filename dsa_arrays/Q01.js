/*
<aside>
💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][

</aside>
*/

const findAddingIndices = (array, target) => {
    const numbersViewed = {}; // for faster lookup
    let index = 0
    for(const element of array) {
        const otherHalf = target - element;
        if (numbersViewed[otherHalf] !== undefined) {
            return [index, numbersViewed[otherHalf]];
        }
        numbersViewed[element] = index;
        index ++;
    }
    return [];
}


// test cases:
const nums = [2,7,11,15]
const target = 9
arr = findAddingIndices(nums, target);
console.log(arr);
