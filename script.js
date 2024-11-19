const questions = [
    {
        question: "O que é JavaScript?",
        options: ["Uma linguagem de programação", "Um tipo de café", "Um editor de texto"],
        answer: 0
    },
    {
        question: "O que é HTML?",
        options: ["Um protocolo de internet", "Uma linguagem de marcação", "Um software"],
        answer: 1
    },
    {
        question: "O que é CSS?",
        options: ["Um estilo de escrita", "Uma linguagem de design", "Uma linguagem para estilizar páginas web"],
        answer: 2
    },
    {
        question: "O que é Front-end?",
        options: ["A parte visível de um site", "A parte de servidores de um site", "Um banco de dados"],
        answer: 0
    },
    {
        question: "O que é Back-end?",
        options: ["A parte visual de um site", "A parte lógica/servidor de um site", "Um tipo de layout"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");
    const scoreElement = document.getElementById("score");

    nextButton.style.display = "none";
    scoreElement.textContent = "";

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const nextButton = document.getElementById("next-btn");
    const scoreElement = document.getElementById("score");

    if (selectedIndex === currentQuestion.answer) {
        score++;
        scoreElement.textContent = "Resposta correta!";
        scoreElement.style.color = "green";
    } else {
        scoreElement.textContent = "Resposta incorreta.";
        scoreElement.style.color = "red";
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");

    questionElement.textContent = "Você completou o quiz!";
    optionsContainer.innerHTML = `Sua pontuação final: ${score}/${questions.length}`;
    nextButton.style.display = "none";
}

loadQuestion();
