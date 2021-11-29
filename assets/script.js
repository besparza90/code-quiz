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

var secondsLeft = 60;
var questionList = 0;
var reduce = 5;
var endTime = 0;
var timeLeft = document.querySelector("#countdown");
var runQuiz = document.createElement("ul");
var clock = document.querySelector("#startQuiz");
var quizQuestion = document.querySelector("#question");
 // Displays the questions and answer choices
function display(questionList) {
    quizQuestion.innerHTML = "";
    runQuiz.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var newQuestion = questions[questionList].question;
        var answerChoices = questions[questionList].choices;
        quizQuestion.textContent = newQuestion;
    }
    answerChoices.forEach(function (newItem) {
        var answerList = document.createElement("li");
        answerList.textContent = newItem;
        quizQuestion.appendChild(runQuiz);
        runQuiz.appendChild(answerList);
        answerList.addEventListener("click", (check));
    })
}
 // Checks answer from user
function check(event) {
    var element = event.target;
    if (element.matches("li")) {
        var result = document.createElement("div");
        result.setAttribute("id", "result");
        if (element.textContent == questions[questionList].answer) {
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
        display(questionList);
    }
    quizQuestion.appendChild(result);
 
}
 // Sets up timer and displays it to page
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
    display(questionList);
});
 // Displays end of quiz and final score
function endQuiz() {
    quizQuestion.innerHTML = "";
    timeLeft.innerHTML = "";
   
    var write = document.createElement("p");
    write.setAttribute("id", "write");
    quizQuestion.appendChild(write);
   
    if (secondsLeft >= 0) {
        var score = secondsLeft;
        var final = document.createElement("p");
        clearInterval(endTime);
        write.textContent = "Final score: " + score;
        quizQuestion.appendChild(final);
    }
   // Allows user to enter intials
    var submitName = document.createElement("label");
    submitName.setAttribute("id", "submitName");
    submitName.textContent = "Enter your initials: ";
    quizQuestion.appendChild(submitName);
   
    var writeName = document.createElement("input");
    writeName.setAttribute("type", "text");
    writeName.setAttribute("id", "initials");
    writeName.textContent = "";
    quizQuestion.appendChild(writeName);
   
    var enterName = document.createElement("button");
    enterName.setAttribute("type", "submit");
    enterName.setAttribute("id", "Submit");
    enterName.textContent = "Submit";
    quizQuestion.appendChild(enterName);
 
    // Stores names and score for storage
    enterName.addEventListener("click", function () {
        var initials = writeName.value;
        
 
        if (initials.trim () === "") {
 
            return;
 
        } else {
            var finalScore = {
                initials: initials,
                score: score
            }
            var allScores = localStorage.getItem("totalScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("totalScores", newScore);
            window.location.replace("./score.html");
        }
    });
 
}

 

