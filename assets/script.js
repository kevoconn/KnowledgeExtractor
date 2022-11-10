//global variables
let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");

//functions
function buildQuiz() {}

function showResults() {}

// display quiz right away
buildQuiz();

// on submit, show results

//function calls
let myQuestions = [
  {
    question: "Inside what HTML element do we put JavaScript?",
    answers: {
      a: "div",
      b: "body",
      c: "script",
      d: "Java",
    },
    correctAnswer: "c",
  },
  {
    question: "Where is the correct place to put JavaScript in HTML?",
    answers: {
      a: "Body",
      b: "Header",
      c: "Footer",
      d: "Wherever's clever",
    },
    correctAnswer: "a",
  },
  {
    question: "Which of the following represents loops in javascript?",
    answers: {
      a: "For",
      b: "Loop",
      c: "Hence",
      d: "Elsa",
    },
    correctAnswer: "a",
  },
  {
    question: "Which method is used to insert a new element at the end of an array",
    answers: {
      a: "Push",
      b: "Pull",
      c: "Tow",
      d: "None of the above",
    },
  },
];

submitButton.addEventListener("click", showResults);

/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */
