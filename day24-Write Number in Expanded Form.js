//Write Number in Expanded Form

const generateZero = (n) => {
    let zeros = ''
    while(n>0){
        zeros += '0'
        n--
    }
    return zeros
}

function expandedForm(num) {
  const numToStr = String(num)
  const value = numToStr.split('').reduce((acc, curr, index)=>{
      if(index === 0) return curr + generateZero(numToStr.length - (index+1))
       return acc + '+' + curr + generateZero(numToStr.length - (index+1))
  },'')
  return value
}