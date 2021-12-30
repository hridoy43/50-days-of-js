//Write a function to truncate a string to a certain number of words

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    const truncateWord = str.split(' ').slice(0,wordLimit).join(' ')

    return truncateWord
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)