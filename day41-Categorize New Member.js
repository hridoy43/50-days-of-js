//Categorize New Member

function openOrSenior(data) {
    const outputArr = data.reduce((acc,curr)=>{
        if(curr[0] >= 55 && curr[1] > 7) acc.push('Senior')
        else acc.push('Open')
        return acc
    },[])
  
    return outputArr
  }
  
  let output = openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ]);
  
  console.log(output);