//Rna Transcription

const DTR_Obj = {
    G:'C',
    C:'G',
    T:'A',
    A:'U'
}

const transcription = (dna) => {
	const RNA = dna.split('').map(data => DTR_Obj[data]).join('')
	return RNA
}