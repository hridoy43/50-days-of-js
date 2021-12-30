//WeIrD StRiNg CaSe

function toWeirdCase(string) {
    const weirdStr = string.split('').map((char,index) => {
        if(index%2 === 0) return char.toUpperCase()
        return char.toLowerCase()
    }).join('')
  
    return weirdStr;
  }
  
  console.log(
    `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
  );