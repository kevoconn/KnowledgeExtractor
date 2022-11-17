let startQuizbtn = document.querySelector("#startQuiz");
let divQuest = document.querySelector("#questions");
let questions = [
  { title: "question1", choices: ["a", "b", "c", "d"], answer: "a" },
  { title: "question2", choices: ["a", "b", "c", "d"], answer: "a" },
  { title: "question3", choices: ["a", "b", "c", "d"], answer: "a" },
  { title: "question4", choices: ["a", "b", "c", "d"], answer: "a" },
];

function startQuiz() {
    alert('Start Quiz?');
    
  let title = document.createElement("h2");
  title.textContent = questions[0].title;
  divQuest.appendChild(title);

  let btnOne = document.createElement("button");
  btnOne.textContent = questions[0].choices[0];
  btnOne.dataset.answer = questions[0].answer;
  divQuest.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.textContent = questions[0].choices[1];
  btnTwo.dataset.answer = questions[0].answer;
  divQuest.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.textContent = questions[0].choices[2];
  btnThree.dataset.answer = questions[0].answer;
  divQuest.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.textContent = questions[0].choices[3];
  btnFour.dataset.answer = questions[0].answer;
  divQuest.appendChild(btnFour);

  //make clickable
}

startQuizbtn.addEventListener("click", startQuiz);

divQuest.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.target);
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;
  if (choice === answer) {
    alert("correct");
  } else {
    alert("incorrect");
  }
  //if (choices === answer) {
});

// This is the same as above
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
