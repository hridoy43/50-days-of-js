//Vowel Count

const vowels = 'aeiou'

function getCount(str) {
  let vowelsCount = 0;
  
  str.toLowerCase().split('').forEach(char => {
      if(vowels.includes(char)) vowelsCount++;
  })

  return vowelsCount;
}

console.log(getCount("abracadabra"));