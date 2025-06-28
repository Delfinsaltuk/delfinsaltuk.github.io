const questions = [
  "İyi uyudun mu?",
  "Dikkatini dağıtan şeyler var mı?",
  "Uzun süredir mi çalışıyorsun?",
  "Devam etmek istiyor musun?",
  "Müzikle çalışmayı mı tercih ediyorsun?"
];

const logic = (answers) => {
  if (!answers[0]) return "😴 Mola ver. Dinlenmek önemli.";
  if (answers[1]) return "🔕 Dikkatini dağıtanları azalt, sonra tekrar dene.";
  if (!answers[2]) return "🎧 Ortam sesi eşliğinde çalışmaya devam et.";
  if (!answers[3]) return "🚶 Kısa bir yürüyüş yap.";
  if (answers[4]) return "🔄 Görev değiştir, odak tazele.";
  return "🧠 Derin odaklanmayı dene.";
};

let currentQuestion = 0;
let answers = [];

const questionBox = document.getElementById("question-box");
const questionText = document.getElementById("question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const resultBox = document.getElementById("result");

const askQuestion = () => {
  if (currentQuestion < questions.length) {
    questionText.textContent = questions[currentQuestion];
  } else {
    const result = logic(answers);
    questionBox.classList.add("hidden");
    resultBox.textContent = result;
    resultBox.classList.remove("hidden");
  }
};

yesBtn.addEventListener("click", () => {
  answers.push(true);
  currentQuestion++;
  askQuestion();
});

noBtn.addEventListener("click", () => {
  answers.push(false);
  currentQuestion++;
  askQuestion();
});

askQuestion();
