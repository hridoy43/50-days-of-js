//Write a function which accepts two valid dates and returns the difference between them as number of days

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    const dateMill1 = +new Date(dateText1);
    const dateMill2 = +new Date(dateText2);

    const diffInMill = dateMill2 - dateMill1
    const diffInDays = diffInMill/DAY_IN_MILLISECONDS
    return diffInDays
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)