/* Question Prompt (1 of 1)
Problem Statement
We have a two-dimensional board game involving snakes. The board has two types of squares on it: '+'’s represent impassable squares where snakes cannot go, and 0’s represent squares through which snakes can move.
​
Snakes may move in any of four directions - up, down, left, or right - one square at a time, but they will never return to a square that they’ve already visited. If a snake enters the board on an edge square, we want to catch it at a different exit square on the board’s edge.
​
The snake is familiar with the board and will take the route to the nearest reachable exit, in terms of the number of squares it has to move through to get there.
​
Write a function that takes a rectangular board with only '+'’s and 0’s, along with a starting point on the edge of the board (given row first, then column), and returns the coordinates of the nearest exit to which it can travel.
​
If multiple exits are equally close, give the one with the lowest numerical value for the row. If there is still a tie, give the one of those with the lowest numerical value for the column.
​
If there is no answer, output -1 -1
​
The board will be non-empty and rectangular. All values in the board will be either '+' or 0. All coordinates (input and output) are zero-based. All start positions will be 0, and be on the edge of the board. For example, (0,0) would be the top left corner of any size input.
​
Example Input
Consider the following board:
​
  '+'  '+'  '+'  '+'  '+'  '+'  '+'  0  0
  '+'  '+'  0  0  0  0  0  '+'  '+'
  0  0  0  0  0  '+'  '+'  0  '+'
  '+'  '+'  0  '+'  '+'  '+'  '+'  0  0
  '+'  '+'  0  0  0  0  0  0  '+'
  '+'  '+'  0  '+'  '+'  0  '+'  0  '+'
If a snake starts at the edge on the left (row 2 column 0), the snake will take the following path to another edge square (an exit)
​
         '+'  '+'  '+'  '+'  '+'  '+'  '+'  0  0
         '+'  '+'  0  0  0  0  0  '+'  '+'
start ->[0][0][0] 0  0  '+'  '+'  0  '+'
         '+'  '+' [0] '+'  '+'  '+'  '+'  0  0
         '+'  '+' [0] 0  0  0  0  0  '+'
         '+'  '+' [0] '+'  '+'  0  '+'  0  '+'
          end  ^
If the snake starts where the last one ended (row 5 column 2), the snake has two paths of length 5:
​
  '+'  '+'  '+'  '+'  '+'  '+'  '+'  0  0
  '+'  '+'  0  0  0  0  0  '+'  '+'
 [0][0][0] 0  0  '+'  '+'  0  '+'
  '+'  '+' [0] '+'  '+'  '+'  '+'  0  0
  '+'  '+' [0] 0  0  0  0  0  '+'
  '+'  '+' [0] '+'  '+'  0  '+'  0  '+'
​
  '+'  '+'  '+'  '+'  '+'  '+'  '+'  0  0
  '+'  '+'  0  0  0  0  0  '+'  '+'
  0  0  0  0  0  '+'  '+'  0  '+'
  '+'  '+'  0  '+'  '+'  '+'  '+'  0  0
  '+'  '+' [0][0][0][0] 0  0  '+'
  '+'  '+' [0] '+'  '+' [0] '+'  0  '+'
For possible exits of (2, 0) and (5, 5). Since these are the same length, we take the one with the lowest row value first, and we return (2, 0). If the row value were the same, we’d take the one with the lowest column value instead. */

function snakePath(grid, row, col){
    let startRow = row
    let startCol = col
    let rowQueue = [startRow]
    let colQueue = [startCol]

    let upOrDown = [-1, +1, 0, 0]
    let leftOrRight = [0, 0, -1, +1]

    let visited = Array(grid.length).fill([])
    for (let i = 0; i < visited.length; i++){
        visited[i] = new Array(grid[0].length).fill(false)
    }

    let nodesLeftInQueue = 1
    let nodesAddedToQueue = 0

    visited[startRow][startCol] = true

    while(rowQueue.length){
        let currRow = rowQueue.shift()
        let currCol = colQueue.shift()

        if(currRow === grid.length - 1 || currCol === 0 || currCol === grid[0].length - 1 || currRow === 0){
            if (grid[currRow][currCol] === 0 && currRow !== startRow && currCol !== startCol){
                return [currRow, currCol]
            }
        }

        checkAdjacent(grid, currRow, currCol)
        nodesLeftInQueue--
        if(nodesLeftInQueue === 0){
            nodesLeftInQueue = nodesAddedToQueue
            nodesAddedToQueue = 0
            count++
        }
    
    }

    return [-1, -1]

    function checkAdjacent(grid, row, col){
        for (let i = 0; i < upOrDown.length; i++){
            let newRow = row + upOrDown[i]
            let newCol = col + leftOrRight[i]
        }

        if(newRow < 0 || newRow > grid.length - 1 || newCol > grid[0].length - 1 || newCol < 0 || visited[newRow][newCol] || grid[newRow][newCol] === '+'){
            continue
        }

        rowQueue.push(newRow)
        colQueue.push(newCol)
        visited[rowQueue][colQueue] = true
        nodesAddedToQueue++
    }



}