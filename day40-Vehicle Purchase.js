//Vehicle Purchase

const needsLicense = (kind) => {
    const kindsArr = ['car','truck']
	return kindsArr.includes(kind)
}

const chooseVehicle = (option1, option2) => {
	return [option1,option2].sort()[0] + ' is clearly the better choice.'
}

const calculateResellPrice = (originalPrice, age) => {
	if(age > 10) return originalPrice*.5
    else if (age >= 3) return originalPrice*.7
    return originalPrice*.8
}