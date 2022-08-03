/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
//uncomment which method you want to test.

  */
//double for loop solution, time complexity o(n)^2
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j< nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     }
// };

// const test1 = twoSum([1,2,3,4,5], 7);
// console.log(test1); //outputs [1,4], correct because index[1] = 2, and index[4] = 5, added is the target 7.

//optimized solution, time complexity o(n)
var twoSum = function(nums, target) {
    const hashtable = {};

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];

        if (hashtable.hasOwnProperty(complement)){
            return [hashtable[complement], i];
        }
        hashtable[nums[i]] = i;
    }
};
const test1 = twoSum([1,2,3,4,5], 7);
console.log(test1); //outputs [2,3]. correct because index[2] = 3, and index[3] = 4, added is the target 7.