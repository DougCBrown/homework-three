//Communicating with the DOM getting and sending the 
//needed values
var answerEl = document.getElementById("answer");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("number");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var symbolEl = document.getElementById("symbol");
var clipboarddEl = document.getElementById("clipboard");
var generateEl = document.getElementById("generate");
//Here we are building the random function statement
//which uses the uppercase, lowercase, number and random symbols
const randomFunc = {
	upper : getRandomUpperCase,
	lower : getRandomLowerCase,
	number : getRandomNumber,
	symbol : getRandomSymbol
};
//generate functions - http://www.net-comber.com/charset.html
//the above URL is a breakdown of character sets with values
//get the click value when the button is pressed to start the generation of a password
generateEl.addEventListener('click', () =>{
	//const length = parseInt(lengthEl.value);
	const length = +lengthEl.value;
	const hasUpper = upperEl.checked;
	const hasLower = lowerEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymbol = symbolEl.checked;
	answerEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});
//Copy password to the clipboard
clipboarddEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = generateEl.innerText;

	if (!password){
		return;
	}
	textarea.value = answer;
	document.body.appendChild(textarea);
	textarea.select()
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
})

//Generate Password Function
function generatePassword(upper, lower, number, symbol, length){
// 1. Initialize password var
// 2. Filter out unchecked types
// 3. Loop over length call generator funtion for each type
// 4. Add final password to the password var and return

	let generatedPassword = "";
	const typesCount = upper + lower + number + symbol;
	//console.log(typesCount);
	const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
// If the check boxs are all unchecked end 
	if(typesCount === 0) {
		return '';
	}
	for(let i = 0; i < length; i += typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	const finalPassword = generatedPassword.slice(0, length);	
	return finalPassword;
}
// the following function is for uppercase
function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
// the following function is for lowercase
function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
 }
// the following function is for numbers
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
 }
// the following function is for random symbols
function getRandomSymbol(){
	var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
	return symbol[Math.floor(Math.random()*symbol.length)];
}

console.log(getRandomSymbol());
