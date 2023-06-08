function ativarbotao() {
  window.location.href = "#jogos";
  setTimeout(function () {
    alert(
      "Este site foi criado com o intuito de demonstração, trata-se de um protótipo para gamificação de educação financeira para a empresa CREFISA"
    );
  }, 500);
}

// Variáveis de estado
let points = 0;
let ranking = [];
let progressBarWidth = 0;

// Atualiza os pontos exibidos
function updatePoints() {
  const pointsElement = document.getElementById("points");
  pointsElement.textContent = points;
  const pointsElement2 = document.getElementById("pontos");
  pointsElement2.textContent = points;
  const pointsElement3 = document.getElementById("pontos-2");
  pointsElement3.textContent = points;
  updateProgressBar();
}

// Atualiza a barra de progresso
function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = progressBarWidth + "%";
}

// Função para lidar com o desafio de economia
function handleEconomyChallenge() {
  const challengePoints = 100; // Pontos a serem ganhos ao concluir o desafio
  points += challengePoints;
  updatePoints();
  alert(
    "Parabéns! Você ganhou " +
      challengePoints +
      " pontos pelo desafio de economia!"
  );
}

// Função para trocar pontos por prêmios e descontos
function handleRedeemPoints() {
  alert("Você trocou seus pontos por prêmios!");
}

// Perguntas do Quiz
const questions = [
  {
    questionImage: "img/ByronPergunta1.png",
    answers: [
      "Permitir o controle das finanças pessoais",
      "Aumentar a renda",
      "Investir em ações",
      "Comprar itens de luxo",
    ],
    correctAnswer: 0,
  },
  {
    questionImage: "img/ByronPergunta2.png",
    answers: [
      "Uma conta de poupança para viagens",
      "Um investimento de alto risco",
      "Um empréstimo bancário",
      "Uma reserva financeira para imprevistos",
    ],
    correctAnswer: 3,
  },
  {
    questionImage: "img/ByronPergunta3.png",
    answers: [
      "Comprar itens de forma impulsiva",
      "Definir objetivos financeiros e criar estratégias para alcançá-los",
      "Pagar as contas sem se preocupar com o saldo",
      "Economizar todo o dinheiro sem gastar",
    ],
    correctAnswer: 1,
  },
];

let currentQuestionIndex = 0;
const questionImageContainer = document.getElementById(
  "questionImageContainer"
);
const answersElement = document.getElementById("answers");
const nextButton = document.querySelector("button");

function showQuestion() {
  const question = questions[currentQuestionIndex];

  // Limpar as respostas anteriores
  answersElement.innerHTML = "";

  // Criar elemento de imagem e atribuir o caminho da imagem
  const imageElement = document.createElement("img");
  imageElement.src = question.questionImage;
  imageElement.classList.add("question");

  // Limpar o container da imagem e adicionar a nova imagem
  questionImageContainer.innerHTML = "";
  questionImageContainer.appendChild(imageElement);

  // Adicionar as respostas
  question.answers.forEach(function (answer, index) {
    const li = document.createElement("li");
    li.textContent = answer;
    li.addEventListener("click", function () {
      selectAnswer(index);
    });
    answersElement.appendChild(li);
  });
}

function selectAnswer(selectedIndex) {
  const answerElements = answersElement.getElementsByTagName("li");
  for (let i = 0; i < answerElements.length; i++) {
    if (i === selectedIndex) {
      answerElements[i].classList.add("selected");
      const isCorrect =
        selectedIndex === questions[currentQuestionIndex].correctAnswer;
      answerElements[i].classList.add(isCorrect ? "correct" : "incorrect");
      const feedbackElement = document.createElement("p");
      feedbackElement.id = "feedback";
      feedbackElement.classList.add(isCorrect ? "correct" : "incorrect");
      feedbackElement.textContent = isCorrect
        ? "Resposta correta!"
        : "Resposta incorreta!";
      answersElement.appendChild(feedbackElement);
      // Atualizar a barra de progresso se a resposta estiver correta
      if (isCorrect) {
        progressBarWidth += 33.33; // Aumenta o valor da barra de progresso em 33.33% (1/3)
        updateProgressBar(); // Atualiza a barra de progresso
        points += 50; // Adiciona 50 pontos por resposta correta
        updatePoints(); // Atualiza os pontos exibidos
      }
    } else {
      answerElements[i].classList.remove("selected");
    }
  }

  // Desativar o clique nas respostas após selecionar uma resposta
  for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].style.pointerEvents = "none";
  }

  // Ativar o botão Próxima Pergunta
  nextButton.disabled = false;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    // Exibir mensagem de fim do quiz ou tomar a ação adequada
    alert("Quiz concluído!");
  }
}

showQuestion();

// Função para jogar e ganhar pontos na educação financeira
function playEducationGame() {
  const gamePoints = 50; // Pontos a serem ganhos ao atingir o objetivo educacional

  const quizContainer = document.getElementById("quizContainer");
  quizContainer.style.display = "block";

  // Iniciar o quiz
  showNextQuestion();
}

// Adiciona eventos aos botões
document
  .getElementById("economyChallengeButton")
  .addEventListener("click", handleEconomyChallenge);
document
  .getElementById("redeemPointsButton")
  .addEventListener("click", handleRedeemPoints);
document
  .getElementById("educationButton")
  .addEventListener("click", playEducationGame);

// Função para adicionar o jogador ao ranking
function addPlayerToRanking() {
  const playerName = prompt("Digite seu nome:");
  ranking.push(playerName);
  updateRanking();
}

// Chamada inicial para adicionar o jogador ao ranking
addPlayerToRanking();

// Função para exibir um desafio de economia aleatório
function showRandomEconomyChallenge() {
  const challengeContainer = document.getElementById("challengeContainer");
  challengeContainer.style.display = "block";

  // Array de desafios de economia
  const economyChallenges = [
    {
      title: "Desafio do Supermercado",
      description: "Economize R$50,00 na sua próxima ida ao supermercado!",
      reward: 100,
    },
    {
      title: "Desafio do Café",
      description:
        "Prepare seu próprio café em casa e economize R$20,00 por semana!",
      reward: 50,
    },
    {
      title: "Desafio do Transporte",
      description:
        "Faça uma semana inteira utilizando transporte público e economize R$30,00!",
      reward: 75,
    },
  ];

  // Escolher um desafio aleatório
  const randomChallenge =
    economyChallenges[Math.floor(Math.random() * economyChallenges.length)];

  // Atualizar os elementos na página com as informações do desafio
  document.getElementById("challengeTitle").textContent = randomChallenge.title;
  document.getElementById("challengeDescription").textContent =
    randomChallenge.description;
  document.getElementById("challengeReward").textContent =
    randomChallenge.reward;

  // Adicionar evento de clique ao botão para concluir o desafio
  document
    .getElementById("completeChallengeButton")
    .addEventListener("click", function () {
      completeChallenge(randomChallenge.reward);
    });
}

// Função para concluir um desafio de economia
function completeChallenge(reward) {
  points += reward;
  updatePoints();
  alert("Parabéns! Você ganhou " + reward + " pontos pelo desafio!");
  hideChallenge();
}

// Função para esconder o desafio de economia
function hideChallenge() {
  const challengeContainer = document.getElementById("challengeContainer");
  challengeContainer.style.display = "none";
}
