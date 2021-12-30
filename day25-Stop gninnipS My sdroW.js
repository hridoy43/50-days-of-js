//Stop gninnipS My sdroW!

function spinWords(string) {
    const reversedStr = string.split(' ').map(item => {
        if(item.length >= 5) return item.split('').reverse().join('')
        return item
    }).join(' ')
  
    return reversedStr
  }
  