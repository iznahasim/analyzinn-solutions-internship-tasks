// Find the index of an element in an array.
function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1; 
  }
  console.log(findIndex([3, 1, 4, 1, 5, 9], 9));  
  console.log(findIndex([3, 1, 4, 1, 5, 9], 2));  
  