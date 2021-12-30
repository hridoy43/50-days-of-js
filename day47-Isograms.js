//Isograms

function isIsogram(str) {
    const newStr = str.toLowerCase()
    const uniqueArr = new Set(newStr)
    if(newStr.length === uniqueArr.size) return true
    return false
  }
  