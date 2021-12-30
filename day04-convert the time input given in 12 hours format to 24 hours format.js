//Write a function which can convert the time input given in 12 hours format to 24 hours format

const time = '12:10AM';

const getFormettedString = (string) => {
    if(string.length > 1) return string
    return `0${string}`
}

function convertTo24HrsFormat(time) {
    const isAM = time.includes('AM') ? true : false
    const timeWithoutAmPm = time.replace(/AM/gi,'').replace(/PM/gi,'')
    const timeArray = timeWithoutAmPm.split(':')
    
    const hours = isAM ? timeArray[0] == '12' ? '00': getFormettedString(timeArray[0]) : timeArray[0] == '12' ? timeArray[0] : String((Number(timeArray[0])+12))
    const minutes = getFormettedString(timeArray[1])

    const formattedTime = `${hours}:${minutes}`

    return formattedTime
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)