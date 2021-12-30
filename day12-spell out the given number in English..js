//Given a number from 0 to 999,999,999,999, spell out that number in English.

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

const getWordsOfNumber = (numberString) => {
    const n = Number(numberString).toString()
    if(n.length > 2) return getWordsOfNumber(n[0]) + 'hundred ' + getWordsOfTwoDigitNumber(n.substr(1,2))
    return a[Number(n)] || b[n[0][1]]
}

const getWordsOfTwoDigitNumber = (twoDigitNumber) => {
    const n = Number(twoDigitNumber).toString()
    return (a[Number(n)] || b[n[0]] + (a[n[1]]?`-${a[n[1]]}`:'')) + '';
}

const sayNumberInEnglish = (num /* ADD MORE PARAMETERS IF NEEDED */) => {
    if ((num = num.toString()).length > 12) return 'overflow';
    n = ('000000000000' + num).substr(-12).match(/^(\d{3})(\d{3})(\d{3})(\d{1})(\d{2})$/);
    if (!n) return; 
    var str = '';
    str += (n[1] != 0) ? getWordsOfNumber(n[1]) + 'billion ' : '';
    str += (n[2] != 0) ? getWordsOfNumber(n[2]) + 'million ' : '';
    str += (n[3] != 0) ? getWordsOfNumber(n[3]) + 'thousand ' : '';
    str += (n[4] != 0) ? getWordsOfNumber(n[4]) + 'hundred ' : '';
    str += (n[5] != 0) ? getWordsOfTwoDigitNumber(n[5]):'';
    return str.trimEnd();
}

console.log(`${sayNumberInEnglish(3942681)}`)