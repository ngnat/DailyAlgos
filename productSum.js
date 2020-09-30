  
function productSum(array, multiple = 1){
    let sum = 0
    for (let ele = 0; ele < array.length; ele++){
        if (Array.isArray(array[ele])){
            sum+= productSum(array[ele], multiple + 1)
        } else {
            sum += array[ele]
        }
    }
    console.log(sum*multiple)
    return sum*multiple
}



productSum([5,7,[2,4],[6,[3,5,3]]])
