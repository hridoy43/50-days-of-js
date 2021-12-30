//Write a JavaScript function to get nth largest element from an unsorted array.

function nthlargest(arr, highest) {
	const sortedArr = arr.sort((a,b)=> a-b)
	return sortedArr[highest]
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));