//Convert given seconds to space age on all planets of our solar system

const spaceAge = (seconds) => {
    const secondsInDays = (((seconds/60)/60)/24)
	const earthYearInDyas = 365.25
    const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	}

    const earthYearInDays = {
		Mercury: earthYearInDyas*0.2408467,
		Venus: earthYearInDyas*0.61519726,
		Earth: earthYearInDyas,
		Mars: earthYearInDyas*1.8808158,
		Jupiter: earthYearInDyas*11.862615,
		Saturn: earthYearInDyas*29.447498,
		Uranus: earthYearInDyas*84.016846,
		Neptune: earthYearInDyas*164.79132,
	}

    Object.keys(yearsInAllPlanets).forEach(planet => {
        yearsInAllPlanets[planet] = Number((secondsInDays/earthYearInDays[planet]).toFixed(2))
    })

	return yearsInAllPlanets
}

console.log(spaceAge(Math.round(Math.random() * 99999999)))