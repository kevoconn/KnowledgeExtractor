let startQuizbtn = document.querySelector("#startQuiz");
let divQuest = document.querySelector("#questions");
let questions = [
  { title: "INSIDE WHAT HTML ELEMENT DO WE PUT JAVASCRIPT?", choices: ["SCRIPT", "JAVA", "BODY", "DIV"], answer: "SCRIPT" },
  { title: "WHERE IS THE CORRECT PLACE TO PUT JAVASCRIPT IN HTML?", choices: ["FOOTER", "HEADER", "BODY", "WHEREVER'S CLEVER"], answer: "BODY" },
  { title: "WHICH OF THE FOLOWING REPRESENTS LOOPS IN JAVASCRIPT?", choices: ["FOR", "LOOP", "HENCE", "ELSA"], answer: "FOR" },
  { title: "WHICH METHOD IS USED TO INSERT A NEW ELEMENT AT THE END OF AN ARRAY?", choices: ["PULL", "PUSH", "TOW", "NONE OF THE ABOVE"], answer: "PUSH" },
];
let questionsIndex = 1;

let timeLeft = 30
let elem = document.getElementById('timer');
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        alert("Time's Up");
    } else {
        elem.innerHTML = timeLeft + 'seconds remaining';
        timeLeft--;
    }
}

function startQuiz() {
  // divResults.innerHTML = "";

  createBtns(0);



  //make clickable
  // function startTimer() {
  //     timer = setInterval(function() {
  //         countDown --;
  //         timerElement.textContent = countDown;
  //         if (countDown <= 45) {
  //             timerElement.style.color = "black";
  //             timerElement.style.fontSize = "5rem";
  //         }
  //         if (countDown === 0) {
  //             clearInterval(timer);
  //             gameOver();
  //         }
  //     }, 1000);
  // }
}
function createBtns(index) {
  //   divQuest.innerHTML = "";

  let title = document.createElement("h2");
  title.textContent = questions[index].title;
  divQuest.appendChild(title);

  let btnOne = document.createElement("button");
  btnOne.textContent = questions[index].choices[0];
  btnOne.dataset.answer = questions[index].answer;
  divQuest.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.textContent = questions[index].choices[1];
  btnTwo.dataset.answer = questions[index].answer;
  divQuest.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.textContent = questions[index].choices[2];
  btnThree.dataset.answer = questions[index].answer;
  divQuest.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.textContent = questions[index].choices[3];
  btnFour.dataset.answer = questions[index].answer;
  divQuest.appendChild(btnFour);
}
startQuizbtn.addEventListener("click", startQuiz);

divQuest.addEventListener("click", function (event) {
  // console.log(event);
  // console.log(event.target);
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;

  if (choice === answer) {
    createBtns(questionsIndex);
    // if (questionsIndex < quest)
    questionsIndex++;
  }

  //if (choices === answer) {
});

//  This is the same as above
/*
divQuest.addEventListener('click', check);

function check() {
    console.log(event);
     let choice = event.target.innerHTML;
     let answer = event.target.dataset.answer;
     if (choice === answer) {
         alert('correct');
     }
    //if (choices === answer) {

}
*/

// When a user clicks the start button
// the game starts
// the timer starts  --> kicks off a timer() function
// the questions are shown  --> kicks off from startQuiz() function
// the start button and instruction are hidden

// We have question 1
// User makes selection (button click)
// We need to know what the user selected (Event bubbling/Event Capture --> event.target)
// pull out User Choice and compare with question answer (checkAnswer() function)

// Show them question 2 (this could be call startQuiz() again, or another function)
// Clear the DOM/Div container

// Q) How do I keep track of what question I am on(?)
// maybe we use some kind of ITERATOR
// maybe we use a 'for loop'
//

// Q) How does the game end(?)

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
