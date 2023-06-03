`
<aside>
💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

</aside>
`

const findPosition = (nums, target, start=0, end=nums.length-1) => {
    const mid = parseInt((start+end)/2);
    let pos;
    if (nums[mid] === target) {
        return mid;
    } else if(start === end) {
        // element not found but reached base condition
        return -1;
    } else if(target < nums[mid]) {
        pos = findPosition(nums, target, start, mid-1);
    } else if(target > nums[mid]) {
        pos = findPosition(nums, target, mid+1, end);
    }
    if (pos === -1) {
        if(target > nums[start]){
            return start + 1
        } else {
            return start;
        }
    }
    return pos;
}

// test case
// console.log(findPosition([1,3,5,6], 5)); // op => 2
// console.log(findPosition([1,3,5,6], 2)); // op => 1
console.log(findPosition([1,3,5,6], 0)); // op => 0