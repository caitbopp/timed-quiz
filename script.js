var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var gameIndex = 0;

// How to make an array of questions & correct answers?
// this is our index
var questionsAnswers = [
    {
        q: "What color is my hair?", 
        choices: ["choice a", "choice b", "choice c", "choice d"],
        answers: "choice a"
    },
    {
        q: "What is my favorite color?", 
        choices: ["choice a", "choice b", "choice c", "choice d"],
        answers: "choice a"
    }
]
console.log (questionsAnswers[1].q)
console.log (questionsAnswers[0].answers)



// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 75;
    startButton.disabled = true;
    var welcome = document.getElementById("welcome");
    welcome.classList.add("display");
    var quiz = document.getElementById("quiz");
    quiz.classList.remove("display");
    startTimer()
};


function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >=0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
    }, 1000);
}

// Function to call questionsAnswers
function getNextQuestion() {
    var quizQuestion = document.getElementById("quizQuestion");
    quizQuestion.textContent = questionsAnswers[gameIndex].q;
    for (var i=0; i < questionsAnswers[gameIndex].choices.length;
        i++) {
// Create element - creating a button dynamically in javascript
// Inside button, add text content textContent.choices i
// then append button to front end (sention quiz in html)
        }

}


//  Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);