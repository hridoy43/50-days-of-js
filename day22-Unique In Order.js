//Unique In Order

let uniqueInOrder = (iterable) => {
    //iterable can be a string or an array
    const array = [...iterable]
    const uniqueOrderedArr = []
  
    for(let value of array){
          if(value !== uniqueOrderedArr[uniqueOrderedArr.length-1]){
              uniqueOrderedArr.push(value)
          }
      }
  
  return uniqueOrderedArr
  };