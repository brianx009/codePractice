/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
//uncomment which method you want to test.

  */
//double for loop solution, time complexity o(n)^2
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++){  //for loop that cycles through the array index i to get a number
//         for (let j = i + 1; j< nums.length; j++){ // second for loop that cyckes through the array index[i+1] in order to not use the same number twice
//             if (nums[i] + nums[j] === target){ // if number [i] + num[j] = target value then
//                 return [i,j]; // return the index of [i] and [j]
//             }
//         }
//     }
// };

// const test1 = twoSum([1,2,3,4,5], 7);
// console.log(test1); //outputs [1,4], correct because index[1] = 2, and index[4] = 5, added is the target 7.

//optimized solution, time complexity o(n)
//key to solving this problem is to use a Hashtable.
var twoSum = function(nums, target) {
    const hashtable = {};  //creating a hashtable to store our keys and their values

    for(let i = 0; i < nums.length; i++){ //for loop that will cycle throught the keys in our hashtable
        let complement = target - nums[i]; // setting our key "complememnt" = the target - a number in the index

        if (hashtable.hasOwnProperty(complement)){ // if the key exists in the hashtable
            return [hashtable[complement], i]; //then we will return the index of the key by accessing hashtable, and returning the index of the value i
        }
        hashtable[nums[i]] = i; // else if the number doesn't exist in our hashtable we are going to add it to our hashtable in the format "key:i" or "complement: i"
    }
};
const test1 = twoSum([1,2,3,4,5], 7);
console.log(test1); //outputs [2,3]. correct because index[2] = 3, and index[3] = 4, added is the target 7.