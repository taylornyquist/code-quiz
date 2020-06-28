// Pseudocode:

// click start button: starts a timer, presents a question

// when question is answered: presented another question

// incorrect answer subtracts time from the clock

// when all questions are answered OR timer reaches 0: game over

// when game is over: save my initials and score

// Layout:

// top left header with link to view high scores

// top right header with the timer

// center container with questions and answer that is dynamic

// Array of quiz questions:
var quizQuestions = [{
    question: "In JavaScript, what element is used to store multiple values in a single variable?",
    choices: ["Strings", "Arrays", "Variables", "Functions"],
    answer: "Arrays"
},
{
    question: "NaN stands for:",
    choices: ["Numbers-aNonymous", "Not-any-Nannies", "Not-a-Number", "No-absolutely-Not"],
    answer: "Not-a-Number"
},
{
    question: "In JavaScript, what element is used to store and manipulate text?",
    choices: ["Strings", "Variables", "Arrays", "Function"],
    answer: "Strings"
},
{
    question: "Where is the JavaScript placed inside an HTML document or page?",
    choices: ["Body & Head", "Meta", "Title", "Footer"],
    answer: "Body & Head"
},
{
    question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
    choices: ["Conditional Loop", "For Loop", "Else Loop", "While Loop"],
    answer: "While Loop"
},
{
    question: "What is considered to be the most popular programming lanugage in the world?",
    choices: ["JavaScript", "Swift", "HTML", "Ruby"],
    answer: "JavaScript"
},

]

// Defining global variables:
var timerEl = document.getElementById("timer");

var questionEl = document.querySelector("#quiz-question");

// Section id's (used for hidden/shown)
var startSecEl = document.getElementById("start-sec");
var quizSecEl = document.getElementById("quiz-sec")

var startBtnEl = document.querySelector("#start-btn");

var quizBtnEl = document.querySelectorAll("quiz-btn");

var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");

var resultEl = document.querySelector("result");

var currentIndex = 0;
var score = 0;

// Start Quiz Function
function startQuiz() {
    startSecEl.classList.add("hidden");
    quizSecEl.classList.remove("hidden");
    setNextQuestion()
}

// Function Next Question
function setNextQuestion() {

    // Start Timer
    countdown();

    // Loop over each question in the array
    for (var i = 0; i < quizQuestions.length; i++) {

        questionEl.textContent = quizQuestions[i].question;
        choice1El.textContent = quizQuestions[i].choices[0];
        choice2El.textContent = quizQuestions[i].choices[1];
        choice3El.textContent = quizQuestions[i].choices[2];
        choice4El.textContent = quizQuestions[i].choices[3];





        // listen for clicks on the button to determine user's answer




    }


};


// Timer Function
function countdown() {

    var timeLeft = 30;

    // Use the setInterval() method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent =timeLeft;
            timeLeft--;

        } else {
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
        }
    }, 1000);
}











// Event listeners
startBtnEl.addEventListener("click", startQuiz);

// choice1El.addEventListener("click", compareFunction);
// choice2El.addEventListener("click", compareFunction);
// choice3El.addEventListener("click", compareFunction);
// choice4El.addEventListener("click", compareFunction);