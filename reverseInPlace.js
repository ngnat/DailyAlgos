
function reverseInPlace(arr, left, right){
  // let left = 0
  // let right = arr.length - 1
  let swap = 0
  while (left < right){
    swap = arr[left]
    arr[left] = arr[right]
    arr[right] = swap
    left ++
    right --
  }
  console.log(arr)
  return arr
}

function reverseWords(arr){
  reverseInPlace(arr, 0, arr.length - 1)
  let currStart = 0
  for (let i = 0; i < arr.length + 1; i++){
    if (i == arr.length || arr[i] === " "){
      reverseInPlace(arr, currStart, i -1)
      currStart = i + 1
    }
  }
  console.log(typeof arr)
}

reverseWords([ 't', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ',
  'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd' ])