//Longest Consecutive Sequence

/**
 *
 * @param {number[]} inputArray Array of numbers
 */

 const longestConsecutiveSequence = (inputArray) => {
    let count = 0
    const set = new Set(inputArray);
    const sortedArray = [...set].sort((a,b)=>a-b)
    
    for(const [index, el] of sortedArray.entries()){
        if(index === 0) {
            count++;
            continue;
         };
        if(sortedArray[index] === sortedArray[index-1]+1) {
                count++;
                continue;
        }
        break
    }

	return count
}
