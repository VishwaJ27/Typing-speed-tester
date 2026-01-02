const quotes = [
  "Practice makes perfect.",
  "Typing fast takes time and patience.",
  "Code is like humor. When you have to explain it, it’s bad."
  
];

let startTime = null;
let quoteText = "";

function startGame() {
  const quoteEl = document.getElementById("quote");
  quoteText = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.innerHTML = "";

  quoteText.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    quoteEl.appendChild(span);
  });

  document.getElementById("input").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("timer").innerText = "Time: 0s";
  startTime = null;
}

document.getElementById("input").addEventListener("input", function () {
  const input = this.value;
  const quoteSpans = document.querySelectorAll("#quote span");

  if (!startTime) startTime = new Date();

  let correct = true;

  quoteSpans.forEach((span, index) => {
    const char = input[index];

    if (char == null) {
      span.classList.remove("correct", "wrong");
      correct = false;
    } else if (char === span.innerText) {
      span.classList.add("correct");
      span.classList.remove("wrong");
    } else {
      span.classList.add("wrong");
      span.classList.remove("correct");
      correct = false;
    }
  });

  let currentTime = new Date();
  let timeTaken = ((currentTime - startTime) / 1000).toFixed(1);
  document.getElementById("timer").innerText = `Time: ${timeTaken}s`;

  if (correct && input.length === quoteText.length) {
    let words = quoteText.split(" ").length;
    let wpm = (words / timeTaken) * 60;

    document.getElementById("result").innerText =
      `✅ Completed! Time: ${timeTaken}s | Speed: ${Math.round(wpm)} WPM`;
  }
});

startGame();

/*
  "Practice makes perfect.",
  "Typing fast takes time and patience.",
  "Code is like humor. When you have to explain it, it is bad.",
  "The best way to predict the future is to create it.",
  "Success is the sum of small efforts repeated every day.",
  "First solve the problem, then write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "Learning never exhausts the mind.",
  "Dream big and dare to fail.",
  "Simplicity is the soul of efficiency.",
  "A journey of a thousand miles begins with a single step.",
  "Stay hungry, stay foolish.",
  "Hard work beats talent when talent does not work hard.",
  "Do not watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Your only limit is your mind.",
  "Small progress is still progress.",
  "Believe you can and you are halfway there.",
  "Consistency is more important than perfection.",
  "Every expert was once a beginner."
*/