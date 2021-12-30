//Get the Middle Character

function getMiddle(s) {
    const strLen = s.length
    let position = 0
    if(strLen%2 !== 0) {
        position = Math.floor(strLen/2)
        return s.charAt(position)
    } else {
        position = strLen/2
        return s.charAt(position-1) + s.charAt(position)
    }
  }