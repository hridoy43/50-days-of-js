//Highest Scoring Word

const positionArr=['','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function high(x) {
  const arrOfWord = x.split(' ')
  const scoresOfWord = arrOfWord.map(item => {
      return item.split('').reduce((acc,curr) => 
      acc + positionArr.indexOf(curr),0)
  })

  const highestScoredIndex = scoresOfWord.reduce((accIndex,currItem,currIndex) => {
      if((currIndex > 0) && (scoresOfWord[accIndex] < currItem)) {
          return currIndex
      }
      return accIndex
  },0)

  return arrOfWord[highestScoredIndex]
}