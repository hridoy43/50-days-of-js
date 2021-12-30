//Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
    const sortedArr = numbers.sort((a,b)=> a-b)
    return sortedArr[0]+sortedArr[1]
  }