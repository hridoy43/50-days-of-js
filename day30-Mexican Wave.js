//Mexican Wave

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function wave(str) {
  const waveArr = str.split('').reduce((totalWave,currChar,index) => {
      if(currChar===' ') return totalWave;
      totalWave.push(str.replaceAt(index, currChar.toUpperCase()));
      return totalWave
  },[])

  return waveArr
}

console.log(wave("hello"));