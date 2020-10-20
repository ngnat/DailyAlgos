function threeSumClosest(nums, target){
    nums.sort((a,b) => a-b)
    let closest = null
    for(let i = 0; i< nums.length; i++){
        let j = i + 1
        let k = nums.length - 1
        while(j< k){
            let sum = nums[i] + nums[j] + nums[k]
            if (Math.abs(target - sum) < Math.abs(target - closest)){
                closest = sum
            }
            if(sum === target){
                return sum
            }
            if(sum< target){
                j++
            } else {
                k--
            }
        }
    }
    return closest
    
}