//Calculate Grains on a given square on a chessboard

const totalGrains = () => {
    const summationOfAllGrain = (2**64) - 1
	return summationOfAllGrain
}

const grainsOn = (input) => {
    const grainCount = 2**(input-1)
	return grainCount
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains on the Chess Board: ${totalGrains()}`)