
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
var productExceptSelf = function(nums) {
    let result = []
    for (let i = 0; i< nums.length; i++){
        let product = 1
        let j= 0
        while (j < nums.length){
            if (j === i){
                j++
            } else {
                product *= nums[j]
                j++
            }
        }
        result.push(product)
    }
        return result
    }