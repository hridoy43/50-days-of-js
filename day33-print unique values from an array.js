//Write a program to print unique values from an array

function set(arrOfNum) {
	const uniqueValues = new Set(arrOfNum)
	return [...uniqueValues]
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));