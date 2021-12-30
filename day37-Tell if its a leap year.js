//Tell if its a leap year

const isLeap = (year) => {
	if(year%100 === 0)  return false
    else if (year%4 === 0 || year%400 === 0) return true
	return false
}