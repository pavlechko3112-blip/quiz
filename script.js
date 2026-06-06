document.addEventListener('DOMContentLoaded', () => {

    // Завдання 2 - Створи власну базу запитань
    const questions = [
        {
            question: "Хто справжній анскілл в бравл старс?",
            answers: ["Сіріус", "Булл", "Едгар", "Даміан"],
            correct: 3 
        },
        {
            question: " На якому бравлерові було апнуто найбільше кубків?",
            answers: ["MO", "Беа", "Ріко", "Мортіс"],
            correct: 4
        },
        {
            question: "У кого найбільше кубків?",
            answers: ["Elox", "Prostislav", "Netty", "LeNain"],
            correct: 1
        },
        {
            question: "Який клуб є найліпший за кубками?",
            answers: ["LeNain", "Yeti", "Heaven", "A few good men"],
            correct: 1
        },
         {
            question: "Хто найліпший пушер?",
            answers: ["Vital Shark", "Prostislav", "Holdik", "Alekzz"],
            correct: 1
        },
         {
            question: "Яка найліпша команда по Бравл старс?",
            answers: ["HMBLE","FUT esports", "Zeta Division", "Crazy Racoons"],
            correct: 2
        },
         {
            question: "Хто найкращий кіберспорцмен по Бравл старс?",
            answers: ["Guesti","Angel Boy", "Lukii", "Tensai"],
            correct: 1
        },
    ];
    // Завдання 3 - Створи змінні для роботи
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    let questionIndex = 0;
    let score = 0;
    const quizScreen = document.querySelector("#quiz-screen")
    const resultScreen = document.querySelector("#result-screen")
    const startScreen = document.querySelector("#start-screen")
    const startBtn = document.querySelector("#start-btn")
    const restartBtn = document.querySelector("#restart-btn")
    const scoreDisplay = document.querySelector("#score-display")
    const resultText = document.querySelector("#result-text")
    let interval
    let timer = 15
    function startGame(){
        startScreen.classList.remove("show");
        startScreen.classList.add("hide");

        resultScreen.classList.remove("show");
        resultScreen.classList.add("hide");

        quizScreen.classList.remove("hide");
        quizScreen.classList.add("show");
        score = 0;
        scoreDisplay.textContent = `Бали: 0`;
        questionIndex = 0
        showQuestion(questions[0])
    }
    startBtn.onclick = startGame
    
    function goToStartScreen() {
    resultScreen.classList.remove("show");
    resultScreen.classList.add("hide");

    quizScreen.classList.remove("show");
    quizScreen.classList.add("hide");

    startScreen.classList.remove("hide");
    startScreen.classList.add("show");
}
    restartBtn.onclick = goToStartScreen
    
    function showQuestion(question) {
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            // Завдання 5 - Перевірка відповіді
            button.addEventListener('click', () => checkAnswer(button,i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);

    // Завдання 5 - Перевірка відповіді
    function checkAnswer(button,answerIndex) {
        if (answerIndex == questions[questionIndex].correct) {
            score++;
            button.classList.add("correct");
            scoreDisplay.textContent = `Бали:  ${score} `
            

        } else {
            button.classList.add("wrong");

        }
        questionIndex++;
        if (questionIndex < questions.length) {
        showQuestion(questions[questionIndex]);
    } else {
        showResult();
    }
    }
    function nextQuestion(){
        questionIndex++
        if (questionIndex < questions.length){
            showQuestion(questions[questionIndex])
        }
        else {
            showResult()
        }
    }
    function showResult(){
        quizScreen.classList.remove("show");
        quizScreen.classList.add("hide")
        resultScreen.classList.add("show")
        resultText.textContent = `Твій результат: ${score} з ${questions.length}`
        
    }
    function startTimer(){
        
    }
});
