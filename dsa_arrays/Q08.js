`<aside>
💡 **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]

</aside>`
// s = {1 to n}

const findMissingNumber = set => {
    const isVisited = {};
    let elemSum = 0
    let duplicateNo;
    const setLength = set.length;
    for(const num of set) {
        if(isVisited[num]) {
            duplicateNo = num;
        } else {
            elemSum += num;
            isVisited[num] = true;
        }
    }
    const idealSumOfNelems = ((setLength)*(setLength+1))/2;

    return [duplicateNo, idealSumOfNelems-elemSum];
}

console.log(findMissingNumber([1,2,2,4]));