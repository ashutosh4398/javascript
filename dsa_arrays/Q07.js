`<aside>
💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

</aside>`


/*

nums = [0,1,0,3,0]
nums = [1,0,3,0, | 0] i=0
nums = [1,0,3,0, | 0] i=1
nums = [1,3,0, | 0,0] i=2

*/

const ShiftZeroToRight = (array, index, elem = 0) => {
    // returns index where the current zero is placed
    for(let i=index; i<array.length; i++) {
        array[i] = array[i+1];
    }
    array[array.length-1] = elem;
    return array.length - 1;
};

const solution = (array) => {
    let firstReplacedZeroIndex = null;
    let i = 0;
    let index;
    while(true) {
        if(array[i] === 0) {
            index = ShiftZeroToRight(array, i);
            if(firstReplacedZeroIndex === null) {
                firstReplacedZeroIndex = index;
            } else {
                // since we shift elements to left, first re-positioned 0 will also move to left
                // hence --;
                firstReplacedZeroIndex --;
            }
        } else {
            i++;
        }
        if(i === firstReplacedZeroIndex || i > array.length) {
            break;
        }
    }
    return array;
}

// test case
// const n = [0,1,0,3,12]
const n = [0,1,0,0,3,12]
solution(n);
console.log(n)