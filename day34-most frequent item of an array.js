//Write a program to find the most frequent item of an array

function mostFreq(arr) {
	const frqCountObj = arr.reduce((acc,curr)=>{
        if(acc[curr]) acc[curr] = acc[curr] + 1;
        else acc[curr] = 1
        return acc;
    },{})

    const mFrqKey = Object.keys(frqCountObj).reduce((accKey,currKey)=>{
        if(!accKey) return currKey
        else if((frqCountObj[accKey] < frqCountObj[currKey])) 
            return currKey
        return accKey
    },'')
	return `${mFrqKey} ${frqCountObj[mFrqKey]}`
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));