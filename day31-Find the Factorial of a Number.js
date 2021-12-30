//Write a Program to Find the Factorial of a Number

function factorial(n) {
	let factorial = 1;
    if(n===0) return factorial;
    else if(n<0) return undefined;
	return Array.from({length:n}).reduce((acc,curr,index)=>acc*(index+1),factorial)
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));