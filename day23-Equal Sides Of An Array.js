//Equal Sides Of An Array

const summationOfArr = (slicedArray) => {
    return slicedArray.reduce((a, b) => a + b, 0)
}

function findEvenIndex(arr) {
  let evenIndex = -1;
  for(const index in arr){
      const numIndex = Number(index)
      const sumFromtheStart = summationOfArr(arr.slice(0,numIndex))
      const sumFromtheEnd = summationOfArr(arr.slice(numIndex+1))
      if(sumFromtheStart === sumFromtheEnd) return numIndex
  }
  return evenIndex
}