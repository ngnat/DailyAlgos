// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

var numIslands = function(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === "1"){
                dfs(grid,i,j)
                count++
            }
        }
    }
    
    return count
    
};

function dfs(grid, row, col){
    if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1 || grid[row][col] === "0") return
    grid[row][col] = "0"
    dfs(grid, row, col - 1)
    dfs(grid, row, col + 1)
    dfs(grid, row - 1, col)
    dfs(grid, row + 1, col)
}