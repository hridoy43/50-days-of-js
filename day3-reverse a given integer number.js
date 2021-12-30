//Write a program to reverse a given integer number

const num = 3849;

function reverseGivenInteger(num) {
    const reversedNum = num.toString().split('').reverse().join('')

    return Number(reversedNum)
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)