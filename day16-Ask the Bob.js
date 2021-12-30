//Ask the Bob

const questionRegx = new RegExp(/[\w\s,:;]*[?]/);
const capitalYellRegx = new RegExp(/[A-Z\s,:;]/);
const yellQuestionRegx = new RegExp(/[A-Z\s,:;]*[?]/);
const addressRegx = new RegExp(/[bob]/gi)

function hey(message) {
	if(questionRegx.test(message)) return 'Sure.'
    else if(capitalYellRegx.test(message)) return 'Whoa, chill out!'
    else if(yellQuestionRegx.test(message)) return 'Calm down, I know what I\'m doing!'
    else if(addressRegx.test(message)) return 'Fine. Be that way!'

	return 'Whatever.'
}
