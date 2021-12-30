//Convert given array of digits of a base to another asked base

/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */


 const convertDigitsToAskedBase = (digits, baseA, baseB) => {
    const ArrToNum = digits.join('')
    const ArrNumToDecFromBaseA = parseInt(ArrToNum,baseA)
    const decToBaseBArr = ArrNumToDecFromBaseA.toString(baseB).split('').map(item => parseInt(item,baseB))

return decToBaseBArr
}
