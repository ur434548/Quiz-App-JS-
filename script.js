const questions = [
  {
    ques: "What is the capital of France?",
    ans: [
      { text: "Paris", correct: "true" },
      { text: "London", correct: "false" },
      { text: "Berlin", correct: "false" },
      { text: "Madrid", correct: "false" },
    ],
  },
  {
    ques: "Which planet is known as the Red Planet?",
    ans: [
      { text: "Earth", correct: "false" },
      { text: "Mars", correct: "true" },
      { text: "Jupiter", correct: "false" },
      { text: "Saturn", correct: "false" },
    ],
  },
  {
    ques: "What is the capital of India",
    ans: [
      { text: "Dehli", correct: "true" },
      { text: "Mumbai", correct: "false" },
      { text: "Punjab", correct: "false" },
      { text: "Amratsar", correct: "false" },
    ],
  },
  {
    ques: "What is the capital of Pakistan",
    ans: [
      { text: "Lahore", correct: "false" },
      { text: "Karachi", correct: "false" },
      { text: "Islamabad", correct: "true" },
      { text: "Multan", correct: "false" },
    ],
  },
  {
    ques: "What is the capital of China",
    ans: [
      { text: "Luoyang", correct: "false" },
      { text: "Nanjing", correct: "false" },
      { text: "Beijing", correct: "true" },
      { text: "Xian", correct: "false" },
    ],
  },
];

let startindex = 0;
let score = 0;
let answerSelected = false;
questions.forEach((question, startindex) => {
  if (startindex == 0) {
    const questionsList = document.getElementById("ul");
    questionsList.innerText = question.ques;

    question.ans.forEach((question) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list");
      listItem.innerText = question.text;
      listItem.style.cursor = "pointer";
      questionsList.appendChild(listItem);
      listItem.addEventListener("click", () => {
        answerSelected = true;

        const correctAnswer = question.correct === "true";

        if (correctAnswer) {
          score++;

          listItem.style.backgroundColor = "green";
          listItem.style.cursor = "not-allowed";
        } else {
          listItem.style.cursor = "not allowed";
          listItem.style.backgroundColor = "red";
        }
      });
    });
  }
});

let btn = document.getElementById("nextbtn");

btn.addEventListener("click", () => {
  if (answerSelected && startindex < questions.length) {
    answerSelected = false;
    startindex++;

    const questionsList = document.getElementById("ul");
    questionsList.innerText = questions[startindex].ques;

    questions[startindex].ans.forEach((q) => {
      const listItem = document.createElement("li");

      answerSelected = true;
      listItem.classList.add("list");
      listItem.innerText = q.text;
      listItem.style.cursor = "pointer";
      questionsList.appendChild(listItem);

      listItem.addEventListener("click", () => {
        const correctAnswer = q.correct === "true";
        if (correctAnswer) {
       
          score++;
          listItem.style.backgroundColor = "green";
          listItem.style.cursor = "not-allowed";
        } else {
          listItem.style.cursor = "not allowed";
          listItem.style.backgroundColor = "red";
        }
      });
    });
  }

  if (startindex === questions.length) {
    const questionsList = document.getElementById("ul");
    btn.innerText = "Get Score";
    btn.style.width = "120px";
    btn.style.marginLeft = "370px";
    let scoreDisplay = document.createElement("li");
    scoreDisplay.classList.add("display");
    scoreDisplay.textContent = `You Got ${score}`;
    questionsList.appendChild(scoreDisplay);
    btn.style.display = "none";
   
  }

  // this function ends here
});
