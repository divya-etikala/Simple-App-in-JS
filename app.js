function populate(){
	if(quiz.isEnded()) {
			showScores();
	}

	else {
		//show question
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;
	
	   //show options
	   var choices = quiz.getQuestionIndex().choices;

	   for (var i = 0; i< choices.length; i++) {
	   	  var  element = document.getElementById('choice' + i);
	   	  element.innerHTML = choices[i];
	   	guess("btn" + i, choices[i]);
	   }

	   showProgress();
    }
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores() {
	var gameOverHtml = "<h1>Results</h1>";
	gameOverHtml += "<h2 id='score'> YOUR SCORE: " + quiz.score + " </h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}


var questions = [
	new Question("AngularJS directives are used in ? ", ["Model", "View", "Controller", "Module"], "View"),
	new Question("Which of the following directive bootstraps AngularJS framework? ", ["ng-init", "ng-app", "ng-controller", "ng-bootstrap"], "ng-app"),
	new Question("AngularJS directives can be written in HTML element as: ", ["Tag", "Attribute", "Class name", "All the above"], "All the above"),
	new Question("The ng-change directive must be used with ng-model directives ", ["True", "Flase", "Sometimes", "None"], "True"),
	new Question("Which of the following directive allows us to use form? ", ["ng-include", "ng-form", "ng-bind", "ng-attach"], "ng-form")

];

var quiz = new Quiz(questions);

populate();

