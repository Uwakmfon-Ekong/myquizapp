const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "monkey", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Shark", correct: false },
      { text: "Goat", correct: false },
    ],
  },
  {
    question: "Who is the founder of scrim?",
    answers: [
      { text: "Whakee", correct: false },
      { text: "Vickyjay", correct: false },
      { text: "Pleasant", correct: true },
      { text: "AyoPresh", correct: false },
    ],
  },
  {
    question: "When was PHP founded?",
    answers: [
      { text: "1996", correct: false },
      { text: "1995", correct: false },
      { text: "1994", correct: true },
      { text: "1993", correct: false },
    ],
  },
  {
    question: "Which is my name?",
    answers: [
      { text: "wakki", correct: false },
      { text: "whakee", correct: false },
      { text: "Whakee", correct: false },
      { text: "Uwakmfon", correct: true},
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}
function showQuestion() {
  resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
    });
}

function resetState() {
  nextButton.style.display="none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

startQuiz();