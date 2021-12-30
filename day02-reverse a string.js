//Write a program to reverse a string

const str = "JavaScript is awesome"

function reverseAString(str) {
    const reversedStr = str.split('').reverse().join('')

    return reversedStr
}

console.log(`Reversed string is: ${reverseAString(str)}`)