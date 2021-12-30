//Function which returns a random number in the given range

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	const randomNumber = Math.floor(Math.random()*(rangeEnd-rangeStart))

	return rangeStart + randomNumber
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)