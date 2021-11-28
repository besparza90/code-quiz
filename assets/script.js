var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts","numbers"],
        answer: "alerts"
    },
{
    question: "The condition of an if/else statement is enclosed with ___",
    choices: ["quotes", "curly brackets","parenthesis", "square brackets"],
    answer: "parenthesis"
},
{
    question: "Arrays in JavaScript can be used to store___",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
},
{
    question: "String values must be enclosed within ___ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
},
]
var score = 0;
var secondsLeft = 60;
var questionList = 0;
var reduce = 5;
var endTime = 0;
var timeLeft = document.querySelector("#countdown");
var runQuiz = document.createElement("ul");
var clock = document.querySelector("#startQuiz");
var quizQuestion = document.querySelector("#question");

clock.addEventListener("click", function () {
    if (endTime === 0) {
        endTime = setInterval(function () {
            secondsLeft--;
            timeLeft.textContent = "Time left: " + secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(endTime);
                endQuiz();
                timeLeft.textContent = "Time is up";
            }
        }, 1000);
    }
    render(questionList);
});

function render(questionList) {
    quizQuestion.innerHTML = "";
    runQuiz.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var newQuestion = questions[questionList].question;
        var userChoices = questions[questionList].choices;
        quizQuestion.textContent = newQuestion;
    }
    userChoices.forEach(function (newItem) {
        var answerList = document.createElement("li");
        answerList.textContent = newItem;
        quizQuestion.appendChild(runQuiz);
        runQuiz.appendChild(answerList);
        answerList.addEventListener("click", (check));
    })
}

function check(event) {
    var element = event.target;
    if (element.matches("li")) {
        var result = document.createElement("div");
        result.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionList].answer) {
            score++;
            result.textContent = "Correct" 
        } else {
            secondsLeft = secondsLeft - reduce;
            result.textContent = "Incorrect"
        }

    }
    
    questionList++;
    if (questionList >= questions.length) {
        endQuiz();
        
    } else {
        render(questionList);
    }
    quizQuestion.appendChild(result);

}