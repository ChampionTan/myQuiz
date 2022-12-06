var questions = document.querySelectorAll(".question");
var gameOver = document.querySelector(".gameover");
var timer = document.querySelector(".timer");
var start = document.querySelector(".start");
var cursor = 0;
var secondsLeft = 60;

function displayTimer() {
	//display a timer with 60 secs
	timer.textContent = "Time Left: " + secondsLeft;
	//have timer start on the click of start button

	//timer starts counting down
	//when time hits 0 stop game
	//calculate score
}

var answers = ["b", "c", "d", "a", "c"];

var hideStart = function() {
	console.log(start);
	if (start.dataset.index != cursor) {
	start.style.display = "none";
	}
	else{
		start.style.display = "flex";
	}
};

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

var startTimer = function() {
	setInterval(decrementTime(), 1000);
	
}
var decrementTime = function() {
	secondsLeft--;
	displayTimer();
}	


var advance = function(event) {
	var element = event.target;
	if (element.matches('.start button')){
		cursor++;
		startTimer();
		hideStart();
		
	}
	// if they clicked on a buttton in the question class
	if (element.matches('.question button')) {
		checkAnswer(element);
		//the cursor advances once 
		cursor++;
		}
	
	displayNextQuestion();
	displayGameOver();
};

var checkAnswer = function(element) {
	//get user selected answer
	var selectedAnswer = element.value;
	//get the correct answer
	var correctAnswer = answers[cursor - 1];
	//compare them
	if (selectedAnswer != correctAnswer) {
		//if wrong alert and time penalty
		alert("INCORRECT! Penalty applied");
	}
	//if correct do nothing
}

document.addEventListener('click', advance);

hideStart();
displayNextQuestion();
displayGameOver();
displayTimer();


