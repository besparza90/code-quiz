var bestScore = document.querySelector("#bestScore");
var back = document.querySelector("#back");
var clear = document.querySelector("#clear");


// This allows user to clear scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// This retrieves initials and scores 
var totalScores = localStorage.getItem("totalScores");
totalScores = JSON.parse(totalScores);
if (totalScores !== null) {
    for (var i = 0; i < totalScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = totalScores[i].initials + " " + totalScores[i].score;
        bestScore.appendChild(createLi);
    }
}
// This loads first html of quiz
back.addEventListener("click", function () {
    window.location.replace("index.html");
});