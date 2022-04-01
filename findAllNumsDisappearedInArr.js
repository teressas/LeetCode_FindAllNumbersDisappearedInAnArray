// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
// Constraints:
// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    newArr = [];
    let n = nums.length;
    // length will be greater than 1 and less than 10^5
    // if(n.length >= 1 && n.length <= 100000){
    //     return nums
    // }
    // start by sorting the nums array
    sortedNums = nums.sort()
    sortedNums.forEach((e, i, sortedNums) => {
        // check if nums[i+1] is a consecutive number of nums[i]+1
        if (nums[i+1] != nums[i]+1 && nums[i+2] != nums[i]+1 && i < n-1 ) {
            console.log(sortedNums)
            console.log(nums[i])
            console.log(nums[i + 1])
            // nums[i] is not less than or equal to 1 and not greater than or equal to the array length
            if(nums[i] >= 1 && nums[i] <= n && n.length >= 1 && n.length <= 100000){
                return newArr.push(1)
            }
            // if it's not then create a new array and add nums[i]+1 into array
            newArr.push(nums[i]+1)
            // console.log(newArr)
            // if nums[i]+1 is less than or equal to nums[i+1] then push into array
            if (nums[i] + 1 <= nums[i + 1]) {
                // console.log(nums[i]+1)
                // console.log(nums[i+1])
                newArr.push(nums[i + 1] - 1)
                newArr.forEach((e, i, newArr) => {
                    if(newArr[i] === newArr[i+1]){
                        newArr.splice(i, 1)
                    }
                })
                // for(i = 0; i < newArr.length; i++) {
                    
                // }
                // console.log(newArr)
            }
        }
    });
    return newArr
};

// Example 1:
Input: nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [5,6]
// Example 2:

Input: nums2 = [1, 1]
// Output: [2]

// Example 3: 
Input: nums3 = [4, 4, 2, 7, 8, 2, 3, 1]
// Output: [5,6]

Input: nums4 = [2,2]
// Output: [1]

Input: nums5 = [2,3]
// Output: [1]

// console.log(findDisappearedNumbers(nums1));
// console.log(findDisappearedNumbers(nums2));
// console.log(findDisappearedNumbers(nums3));
console.log(findDisappearedNumbers(nums4));

