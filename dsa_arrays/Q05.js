`
<aside>
**Q5.** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

**Example 1:**
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

</aside>`
// nums1 = [4,5,6,7,8,0,0,0], nums2 = [2,4,5]
// nums1 = [4,5,6,7,8,0,0,0] // 4,2
// nums1[i] 
// nums1 = [4,5,6,7] nums2=[2,3,3]
// temp = [2,3]

// const merge = (nums1, nums2, m, n) => {
//     let [i,j] = [0,0]; 
//     const temp = [];
//     // i => index for nums1
//     // j => index for nums2
//     // m => length of nums1
//     // n => length of nums2

//     while(true) {
//         if (i === m || j === n) {
//             console.log(i, j);
//             // we have reached either end of nums1 or nums2
//             break;
//         } 
        
//         if(nums1[i] <= nums2[j]) {
//             temp.push(nums1[i]);
//             i++;
//         } else if(nums1[i] > nums2[j]) {
//             temp.push(nums2[j]);
//             j++;
//         }
          
//     }
//     if(i <= (m-1)) {
//         while(i < m) {
//             temp.push(nums1[i]);
//             i++;
//         }
//     } else if(j < (n-1)) {
//         while(j < n) {
//             temp.push(nums2[j]);
//             j++;
//         }
//     }
//     return temp;
// }


const insertElementAt = (array, element, index) => {
    for(let i=array.length-1; i > index; i--) {
        array[i] = array[i-1];
    }
    array[index] = element;
}

const inPlaceMerge = (nums1, nums2, m, n) => {
    let [i,j] = [0,0];
    while(true) {
        if(i === m || j === n) {
            // since we have to start inserting rest of the elements from i+1
            i++;
            break;
        }
        if(nums2[j] <= nums1[i]) {
            insertElementAt(nums1, nums2[j], i);
            i++;
            j++;
        } else {
            i++;
        }
        
    }
    while(j < n) {
        nums1[i] = nums2[j];
        i++;j++;
    }
}

const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]
inPlaceMerge(nums1,nums2, 3, 3);
console.log(nums1)