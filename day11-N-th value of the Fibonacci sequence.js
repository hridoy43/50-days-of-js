//Return the N-th value of the Fibonacci sequence

function getFibNum(n){
    if(n<=0) return 0
    if(n===1) return 0
    if(n===2) return 1
    else return getFibNum(n-1) + getFibNum(n-2)
}

function fibonacci(n) {
	return getFibNum(n+1)
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)