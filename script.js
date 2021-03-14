var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var gameIndex = 0;

// This is my index/array of questions & answers
var questionsAnswers = [
    {
        q: "Commonly used data types DO NOT include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answers: "3. Alerts"
    },
    {
        q: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
        answers: "3. Quotes"
    },
    {
        q: "Arrays in JavaScript can be used to store _____.",
        choices: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
        answers: "4. All of the above"
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal/Bash", "3. For loops", "4. console.log"],
        answers: "4. console.log"
    },
    {
        q: "The condition in an if / else statement is enclosed within _____.",
        choices: ["1. Quotes", "2. Curly brackets", "3. Parentheses", "4. Square brackets"],
        answers: "2. Curly brackets"
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

    startTimer();
    getNextQuestion();
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
        // if (timerCount = 0) {
        //     stopTimer()
        //     clearInterval(timer);
        // }
    }, 1000);
}

// Function to call questionsAnswers
function getNextQuestion() {
    if (gameIndex < questionsAnswers.length) {

        var quizQuestion = document.getElementById("quizQuestion");
        //quizQuestion.innerHTML = "";
        quizQuestion.textContent = questionsAnswers[gameIndex].q;

        for (var i = 0; i < questionsAnswers[gameIndex].choices.length;
            i++) {
            // Create element/button
            var btn = document.createElement("button");
            btn.className = "answerBtn";
            // Inside button, add text content
            btn.textContent = questionsAnswers[gameIndex].choices[i];
            // then append button to front end
            document.getElementById("quizQuestion").appendChild(btn);
            // }
            //gameIndex++;
        }
    }

    //getNextQuestion();

    // When user clicks on incorrect answer, show "Wrong answer" & advance to next question
    // When user clicks on correct answer, show "Correct answer!" & advance to next question
};

var quizSection = document.getElementById("quiz");
quizSection.addEventListener("click", function (event) {
    var element = event.target;
    gameIndex++;

    if (element.matches("button")) {

        if (element.textContent == questionsAnswers[gameIndex].answers) {
            document.getElementById("userChoice") = "Correct Answer!";
        } else {
            document.getElementById("userChoice") == "Wrong Answer!";
        }
        // need to check for additional questions before calling nextQuestion
        if (gameIndex <= 4) {
            getNextQuestion();
        } else {
            scorePage();
        }
    };

});


//  Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
