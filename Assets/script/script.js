/*jshint esversion: 6 */
/*from here down we are constructing the variables to be used in the construction of the random passwords */
const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById ('characterAmountNumber');
const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
/*here is the construction of the arrays for the lowercase, uppercase, numbers and symbols. 
the concats are used to catch all of the verios symbols */
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126)
);
/*Here the slider bar and the input container are tied together so that if the user
only uses the slider we will still get how many characters the user wants */
characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);
/*Here were are setting up the event listner to see construct the variables to see what the slider value is
and all of the checked or unchecked boxes are */
form.addEventListener('submit', e => {
	e.preventDefault();
	const characterAmount = characterAmountNumber.value;
	const includeUppercase = includeUppercaseElement.checked;
	const includeNumbers = includeNumbersElement.checked;
	const includeSymbols = includeSymbolsElement.checked;			
	const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
	passwordDisplay.innerText = password;
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
	let charCodes = LOWERCASE_CHAR_CODES;
	if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
	if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
	if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
	const passwordCharacters = [];
	for (let i = 0; i < characterAmount; i++) {
		const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
		passwordCharacters.push(String.fromCharCode(characterCode));
	}
	return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high){
	const array = [];
	for (let i = low; i <= high; i++) {
		array.push(i);
	}
	return array;
}

function syncCharacterAmount(e) {

	const value = e.target.value;
	characterAmountNumber.value = value;
	characterAmountRange.value = value;	
}
