var wins = 0;
var wordOptions = ['NO PROBLEM', 'RESORTS', 'BOB MARLEY', 'CARIBBEAN', 'MONTEGO BAY', 'JERK CHICKEN', 'BEACHES'];
var imageOptions = ['assets/images/no_problem.jpg', 'assets/images/resorts.jpg', 'assets/images/bobmarley.jpg', 'assets/images/caribbean.jpg', 'assets/images/montegobay.jpg', 'assets/images/food.jpg', 'assets/images/beaches.jpg'];
var randomNumber = Math.floor(Math.random() * wordOptions.length);
var randomWord = wordOptions[randomNumber];
var guesses = 10;
var wrongLetters = [];
var currentWord = [];

for (var i = 0; i < randomWord.length; i++) {
	if (randomWord[i] === " ") {
		currentWord.push("&nbsp;");
	}
	else  {
		currentWord.push("_");
	}
}

console.log("randomWord: " + randomWord);
console.log("currentWord: " + currentWord);

currentWordHTML = currentWord.join(" ");
document.querySelector("#currentword").innerHTML = currentWordHTML;

document.querySelector("#numberofguessesremaining").innerHTML = guesses;

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	console.log("userGuess: " + userGuess);
	console.log("randomWord: " + randomWord);

	if (randomWord.indexOf(userGuess) >= 0) {
		console.log("Correct");

		for (var i = 0; i < randomWord.length; i++) {
			if (randomWord[i] === userGuess) {
				currentWord[i] = userGuess;
			}
		}

		console.log(currentWord);

		currentWordHTML = currentWord.join(" ");
		document.querySelector("#currentword").innerHTML = currentWordHTML;		
	}

	else if (wrongLetters.indexOf(userGuess) < 0) {
		console.log("Wrong");

		guesses--;
		document.querySelector("#numberofguessesremaining").innerHTML = guesses;

		wrongLetters.push(userGuess);
		wrongLettersHTML = wrongLetters.join(", ");
		document.querySelector("#lettersalreadyguessed").innerHTML = wrongLettersHTML;

		console.log(wrongLetters);
	}
	if (currentWord.indexOf("_") < 0) {
		console.log("You win!");
		document.querySelector("#headerThree").innerHTML = randomWord;
		document.querySelector("#gameImage").src = imageOptions[randomNumber];
		wins++;
		randomNumber = Math.floor(Math.random() * wordOptions.length);
		randomWord = wordOptions[randomNumber];
		guesses = 10;
		wrongLetters = [];
		currentWord = [];

		for (var i = 0; i < randomWord.length; i++) {
			if (randomWord[i] === " ") {
				currentWord.push("&nbsp;");
			}
			else  {
				currentWord.push("_");
			}
		}

		console.log(randomWord);
		console.log(currentWord);

		document.querySelector("#numberofwins").innerHTML = wins;

		currentWordHTML = currentWord.join(" ");
		document.querySelector("#currentword").innerHTML = currentWordHTML;
		document.querySelector("#numberofguessesremaining").innerHTML = guesses;
		document.querySelector("#lettersalreadyguessed").innerHTML = wrongLetters;
	}
	else if (guesses === 0) {
		console.log("You lose!");
		document.querySelector("#headerThree").innerHTML = "";
		document.querySelector("#gameImage").src = "assets/images/.jpg";
		
		randomNumber = Math.floor(Math.random() * wordOptions.length);
		randomWord = wordOptions[randomNumber];
		guesses = 10;
		wrongLetters = [];
		currentWord = [];

		for (var i = 0; i < randomWord.length; i++) {
			if (randomWord[i] === " ") {
				currentWord.push("&nbsp;");
			}
			else  {
				currentWord.push("_");
			}
		}
		console.log(randomWord);
		console.log(currentWord);

		currentWordHTML = currentWord.join(" ");
		document.querySelector("#currentword").innerHTML = currentWordHTML;
		document.querySelector("#numberofguessesremaining").innerHTML = guesses;
		document.querySelector("#lettersalreadyguessed").innerHTML = wrongLetters;		
	}
}