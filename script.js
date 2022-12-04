var questions = document.querySelectorAll(".question");
var cursor = 0;

var displayQuestion = function () {
	for (var question of questions) {
		console.log(question);
		if (question.dataset.index != cursor) {
			question.style.display = "none";
		}

	}
};

var advance = function(event) {
	var element = event.target;

	if (element.matches('question')) {
		if (cursor < questions.length - 1) {
			cursor++;
		}
		displayQuestion();
	}
};

document.addEventListener('click', advance);

displayQuestion();

