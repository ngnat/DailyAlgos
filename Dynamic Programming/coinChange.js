// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin.
var coinChange = function(coins, amount) {
    
    let arr = []
    for (let i = 1; i <= amount; i++){
        arr[i] = amount + 1
    }
    arr[0] = 0
    
    for (let i = 1; i <= amount; i++){
        for (let j = 0; j < coins.length; j++){
            if (coins[j] <= i) {
                arr[i] = Math.min(arr[i], (arr[i - coins[j]] + 1))
            }
        }
    }

    return arr[amount] > amount ? -1 : arr[amount]
}