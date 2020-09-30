function searchInRotatedSortedArray(array, target){
        let left = 0
        let right = array.length - 1
      
        while (left < right){
            let midPoint = Math.floor((left + right)/2)
            if(array[midPoint] > array[right]){
              left = midPoint + 1
            } else {
              right = midPoint
            }
        }
        
        let startPointer = left
        left = 0
        right = array.length - 1
      
        if(array[startPointer]<= target && target<= array[right]) {
          left = startPointer
        } else {
          right = startPointer
        }
      
        while (left <= right){
          let midPoint = Math.floor((left + right)/2)
          if(array[midPoint] === target){
            return midPoint
          } else if (array[midPoint] < target) {
            left = midPoint + 1
          } else {
            right = midPoint - 1
          }
        }
        return-1
}








// console.log(searchInRotatedSortedArray([3,4,5,1,2], 5))