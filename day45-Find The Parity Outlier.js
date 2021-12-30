//Find The Parity Outlier

function findOutlier(integers) {
    const oddArr = []
    const evenArr = []
    
   integers.forEach(item => {
        if(item%2 === 0) evenArr.push(item)
        else  oddArr.push(item)
      })
  
  if(oddArr.length > evenArr.length) return evenArr[0]
  return oddArr[0]
  }