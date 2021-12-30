//Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = 'XeroX';

function getTheGapX(str) {
    const firstIndex = str.indexOf('X')
    const lastIndex = str.lastIndexOf('X')
    if(firstIndex === -1) return -1
    
    const gapBeetweenX =  lastIndex - firstIndex
    return gapBeetweenX
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)