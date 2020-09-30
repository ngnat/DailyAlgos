var climbStairs = function(n) {
    if (n === 0 || n === 1) return 1
    let stepsToStore = [1,1]
    for (let i = 2; i <= n; i ++){
        stepsToStore[i] = stepsToStore[i -1] + stepsToStore[i -2]
    }
    return stepsToStore[n]
}