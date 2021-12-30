//Mixed Juices

const juiceArr=['Pure Strawberry Joy','Energizer','Green Garden','Tropical Island','All or Nothing']
const estimatedTimeArr=[0.5,1.5,1.5,3,5]
const defaultTime = 2.5


const timeToMixJuice = (name) => {
    if(juiceArr.includes(name)) return estimatedTimeArr[juiceArr.indexOf(name)]
	return defaultTime
}

const limePieces = {
        small:6,
        medium:8,
        large:10
    }

const limesToCut = (wedgesNeeded, limes) => {
    let limeNum = 0;
    let total = 0;

    for(let i=0; i<limes.length; i++){
        if(total >= wedgesNeeded) {
            break;
        }
        limeNum = i + 1;
        total += limePieces[limes[i]]
    }

	return limeNum
}


const remainingOrders = (timeLeft, orders) => {
	let totalTime = 0
    for(value in orders){
        if(totalTime >= timeLeft) break;

        if(juiceArr.includes(name)) {
            totalTime += estimatedTimeArr[juiceArr.indexOf(name)]
        }
	    totalTime += defaultTime
        orders.shift()
    }

	return orders
}