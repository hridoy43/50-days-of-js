//Luhn algorithm

const valid = (string) => {
	const newStr = string.replaceAll(' ','')
    const numberStrArr = newStr.split('').reverse()
    const validCardNumArr = numberStrArr.map((digit,index)=>{
        if((index+1)%2 === 0){
            let newDigit = digit*2
            if(newDigit>9) newDigit -= 9
            return +newDigit
        }
        return +digit
    })
    const sumOfArr = validCardNumArr.reduce((acc,curr)=>acc+curr,0)
    console.log(sumOfArr)
	return sumOfArr%10 === 0? true:false
}