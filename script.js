var questions = document.querySelectorAll(".question");
var gameOver = document.querySelector(".gameover");
var timer = document.querySelector(".timer");
var cursor = 0;
var secondsLeft = 60;

var answers = ["b", "c", "d", "a", "c"];

var displayNextQuestion = function () {
	//for every individual question with question class
	for (var question of questions) {
		console.log(question);
		if (question.dataset.index != cursor) {
			question.style.display = "none";
		}
		else{
			question.style.display = "block";
		}

	}
};

var displayGameOver = function () {
	console.log(gameOver);
	if (gameOver.dataset.index != cursor) {
		gameOver.style.display = "none";
	}
	else{
		gameOver.style.display = "block";
	}

	}


var advance = function(event) {
	var element = event.target;
	// if they clicked on a buttton in the question class
	if (element.matches('.question button')) {
		checkAnswer(element);
		//the cursor advances once 
		if (cursor < questions.length) {
			cursor++;
		}
		displayNextQuestion();
		displayGameOver();
	}
};

var checkAnswer = function(element) {
	//get user selected answer
	var selectedAnswer = element.value;
	//get the correct answer
	var correctAnswer = answers[cursor];
	//compare them
	if (selectedAnswer != correctAnswer) {
		//if wrong alert and time penalty
		alert("INCORRECT! Penalty applied");
	}
	//if correct do nothing
}

document.addEventListener('click', advance);

displayNextQuestion();
displayGameOver();


