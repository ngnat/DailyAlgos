// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

var trap = function(height) {
    let leftMax = -1, rightMax = -1, left = 0, right = height.length - 1, res = 0
    while (left <= right) {
        leftMax = height[left] > leftMax ? height[left] : leftMax
        rightMax = height[right] > rightMax? height[right] : rightMax
        if (leftMax > rightMax) {
            res += rightMax - height[right]
            right--
        }
        else {
            res += leftMax - height[left]
            left++
        }
    }
    return res
};