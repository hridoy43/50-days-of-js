//Mumbling

function accum(s) {
    const mumbledStr = s.split('').reduce((acc,curr,currIndex) => {
        if(currIndex === 0) return curr.toUpperCase()
  
        let charArr = ''
        let n = currIndex+1;
  
        while(n>0){
            if(n===(currIndex+1)) charArr += curr.toUpperCase()
            else charArr += curr.toLowerCase();
            n--;
        }
  
        return acc + '-' + charArr
    },'')
  
    return mumbledStr
  }