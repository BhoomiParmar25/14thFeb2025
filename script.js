const questions = [
    "Hey daddy, I may not be perfect at something sometime, but will you always adjust with whatever I am?",
    "I can never handle you ever somewhere in some situation, but will you still choose me with you always?",
    "I would may not dance for you, but if I do something silly, then would you still want me to dance for you?",
    "I know I can never be with you, but will you still proceed with the next question?"
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-button');
const messageCard = document.getElementById('message-card');
const revealSecretButton = document.getElementById('reveal-secret');
const secretMessage = document.getElementById('secret-message');
const secretContainer = document.getElementById('secret-container');

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex];
    } else {
        showMessageCard();
    }
}

function showMessageCard() {
    questionElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    messageCard.classList.remove('hidden'); // Show the message card
    messageCard.classList.add('show'); // Add the show class to trigger animation
    secretContainer.classList.remove('hidden'); // Show the secret container
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion ();
});

revealSecretButton.addEventListener('click', () => {
    secretMessage.classList.remove('hidden'); // Show the secret message
});

showQuestion();