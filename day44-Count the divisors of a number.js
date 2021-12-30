//Count the divisors of a number

function getDivisorsCnt(num) {
    const arr = Array.from({length:num})
    const outputCountArr = arr.map((item,index) => {
        if(num%(index+1) === 0) return true 
        return false
    }).filter(item => item)
  
    return outputCountArr.length
  }
  