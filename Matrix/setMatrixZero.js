// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?
 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

var setZeroes = function(matrix) {
    let rowStack = []
    let colStack = []
    for (let i = 0; i< matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                rowStack.push(i)
                colStack.push(j)  
            }
        }
    }
    
    for (let r of rowStack){
        for (let i = 0; i < matrix[0].length; i++){
            matrix[r][i] = 0
        }
    }
    
    for (let c of colStack){
        for (let i = 0; i < matrix.length; i++){
            matrix[i][c] = 0
        }
    }
    return matrix
}