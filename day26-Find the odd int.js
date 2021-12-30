//Find the odd int

function findOdd(arr) {
    let oddInt = undefined
    const uniqueElements = [...new Set([...arr])]
  
    uniqueElements.forEach(el => {
        const elCount = arr.filter(item => item === el).length
        if(elCount%2 !== 0) oddInt = el
    })
  
    return oddInt;
  }