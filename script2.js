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
questions.forEach((questions) => {
  let quizQuestion = document.getElementById("ul");
  quizQuestion.innerText = questions.ques;
  const listItem = document.createElement("li");
  listItem.innerText = questions.ques;
  quizQuestion.appendChild(listItem);
  console.log(listItem)
});
