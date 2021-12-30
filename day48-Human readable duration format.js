//Human readable duration format

const hoursInSec = 60*60
const minutesInSec = 60
const durationStrArr = ['hour','minute','second']

function formatDuration(seconds) {
    const hours = parseInt(seconds/hoursInSec)
    const remainingSeconds = seconds - (hours*hoursInSec)
    const minutes = remainingSeconds > 59 ? parseInt(remainingSeconds/minutesInSec) : 0
    const Seconds = remainingSeconds < 59 ? remainingSeconds : remainingSeconds - (minutes*minutesInSec)

    const hrdfArr = [hours,minutes,Seconds].reduce((acc,curr,index)=>{
        if(curr !== 0){
            if(curr === 1) acc.push(`${curr} ` + durationStrArr[index])
            else acc.push(`${curr} ` + durationStrArr[index] + 's')
        }
        return acc
    },[])

    if(hrdfArr.length === 3) 
        return hrdfArr[0] + ', ' + hrdfArr.slice(1).join(' and ')
    else return hrdfArr.join(' and ')
}