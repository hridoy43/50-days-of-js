//Union of Two Arrays

const unionOfArrays = (arr1, arr2) => {
    const uniqueElements = new Set([...arr1, ...arr2])
  
    return [...uniqueElements];
  };
  
  console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
  