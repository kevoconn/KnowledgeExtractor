

let questions = [
  {
      prompt: "INSIDE WHICH HTML ELEMENT DO WE PUT THE JAVASCRIPT?",
      options: ["<javascript>", "<js>", "<script>", "<scripting>"],
      answer: "<script>"
  },

  {
      prompt: "HOW DO YOU CALL A FUNCTION NAMED myFunction?",
      options: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction"],
      answer: "myFunction()"
  },

  {
      prompt: "WHERE IS THE CORRECT PLACE TO PUT JAVASCRIPT IN HTML?",
      options: ["BODY", "HEADER", "FOOTER", "WHEREVER'S CLEVER",],
      answer: "BODY"
  },

  {
      prompt: "WHICH OF THE FOLOWING REPRESENTS LOOPS IN JAVASCRIPT?",
      options: ["LOOP", "FOR", "HENCE", "ELSA",],
      answer: "FOR" 
  },

  {
      prompt: "WHICH METHOD IS USED TO INSERT A NEW ELEMENT AT THE END OF AN ARRAY?",
      options: ["PUSH", "PULL", "TOW", "NONE OF THE ABOVE"],
      answer: "PUSH"
  }];



let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#restart");



let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;



function quizStart() {
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  let landingScreenEl = document.getElementById("start-screen");
  landingScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();
}


function getQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
let promptEl = document.getElementById("question-words")
  promptEl.textContent = currentQuestion.prompt;
  choicesEl.innerHTML = "";
  currentQuestion.options.forEach(function(choice, i) {
      let choiceBtn = document.createElement("button");
      choiceBtn.setAttribute("value", choice);
      choiceBtn.textContent = i + 1 + ". " + choice;
      choiceBtn.onclick = questionClick;
      choicesEl.appendChild(choiceBtn);
  });
}


function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
    feedbackEl.style.color = "red";
  } else {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 2000);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}


function quizEnd() {
  clearInterval(timerId);
  let endScreenEl = document.getElementById("quiz-end");
  endScreenEl.removeAttribute("class");
  let finalScoreEl = document.getElementById("score-final");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}


function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}


function saveHighscore() {
  let name = nameEl.value.trim();
  if (name !== "") {
    let highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    let newScore = {
      score: time,
      name: name
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
  }
}


function checkForEnter(event) {
  if (event.key === "Enter") {
      saveHighscore();
  }
}
nameEl.onkeyup = checkForEnter;


submitBtn.onclick = saveHighscore;


startBtn.onclick = quizStart;


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
