alert('This is a two player number guessing game.\n\t It\'s player one\'s turn now');
var playerOneName = prompt('Please enter your name');
var secretNumber = prompt('Hi, ' + playerOneName + '. Please enter a number'),
	secretNumber = Number(secretNumber);
alert('This is the Secret Number that you have guessed.' + '\n' + playerOneName + ', Don\'t tell it to the other player');
alert('It\'s player two\'s turn now');
var playerTwoName = prompt('Please enter your name');
var guess = prompt('Hi, ' + playerTwoName + '. Guess the number ' + playerOneName + ' has given.'),
	guess = Number(guess);
if (guess === secretNumber) {
	alert('You got it right. You won ' + playerTwoName + ' :-)');
} else if (guess > secretNumber) {
	alert('Too high!, You Lost!.');
	var again = confirm('wanna Try again?');
	if (again) {
		alert('Please Reload');
	} else {
		alert('Goodbye, ' + playerTwoName + '\n\t Better luck next time ;-)');
	}
} else {
	alert('Too low!, You Lost!.');
	var again = confirm('wanna Try again?');
	if (again) {
		alert('Please Reload');
	} else {
		alert('Goodbye, ' + playerTwoName + '\n\t Better luck next time ;-)');
	}
}