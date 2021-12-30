//Write a program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(a, b) {
	while(b) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a
}

const a = 2154
const b = 458

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));