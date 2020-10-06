// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

 



// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

var maxArea = function(height) {
    
    let i = 0
    let j = height.length - 1
    let max = Number.MIN_VALUE
    while (i < j){
        let min = Math.min(height[i], height[j])
        max = Math.max(max, (min * (j - i)))
        if (height[i] > height[j]){
            j--
        } else {
            i++
        }
    }
    return max
};