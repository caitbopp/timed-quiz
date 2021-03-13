var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var gameIndex = 0;

// This is my index/array of questions & answers
var questionsAnswers = [
    {
        q: "Which is the largest state in the United States of America?",
        choices: ["1. Alaska", "2. California", "3. Texas", "4. Washington"],
        answers: "1. Alaska"
    },
    {
        q: "How many colors are in the rainbow?",
        choices: ["1. Five", "2. Ten", "3. Nine", "4. Seven"],
        answers: "4. Seven"
    },
    {
        q: "How many sides are there to an octogon?",
        choices: ["1. Four", "2. Eight", "3. Five", "4. Ten"],
        answers: "2. Eight"
    },
    {
        q: "How many dimes are in 1 dollar?",
        choices: ["1. 20", "2. 100", "3. 10", "4. 50"],
        answers: "3. 10"
    },
    {
        q: "What is the largest country in the world?",
        choices: ["1. Russia", "2. Canada", "3. China", "4. United States"],
        answers: "1. Russia"
    }
]
//console.log (questionsAnswers[1].q)
//console.log (questionsAnswers[0].answers)



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
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
    }, 1000);
}

// Function to call questionsAnswers
function getNextQuestion() {
    if (gameIndex < questionsAnswers.length) {

        var quizQuestion = document.getElementById("quizQuestion");
        quizQuestion.innerHTML = "";
        quizQuestion.textContent = questionsAnswers[gameIndex].q;
        //for (var i = 0; i < questionsAnswers[gameIndex].choices.length;
        //i++) {
        // Create element/button
        var btn = document.createElement("button");
        // Inside button, add text content
        btn.textContent = questionsAnswers[gameIndex].choices[i];
        // then append button to front end
        document.getElementById("quizQuestion").appendChild(btn);
        // }
        gameIndex++;
    }
}

getNextQuestion();

// When user clicks on incorrect answer, show "Wrong answer" & advance to next question
// When user clicks on correct answer, show "Correct answer!" & advance to next question

var quizSection = document.getElementById("quiz");
quizSection.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("button")) {

        if (element.textContent == questionsAnswers[gameIndex].answers) {
            document.getElementById("userChoice") = "Correct Answer!";
        } else {
            document.getElementById("userChoice") = "Wrong Answer!";
        }
        // need to check for additional questions before calling nextQuestion
        getNextQuestion();
    };


//  Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
