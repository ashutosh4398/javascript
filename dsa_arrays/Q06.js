`<aside>
💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

</aside>`

const isDuplicatePresent = nums => {
    const isVisited = {};
    for(const num of nums) {
        if (isVisited[num]) {
            return true;
        } else {
            isVisited[num] = true;
        }
    }
    return false
};

// test cases
console.log(isDuplicatePresent([1,2,3,1])) // true
console.log(isDuplicatePresent([1,2,3,4])) // false
console.log(isDuplicatePresent([])) // false
console.log(isDuplicatePresent([1,2,-1])) // false
