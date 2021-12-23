let questions = [{
        "question": "wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Ameer Mohammed",
        "answer_4": "Tim Berners-Lee",
        "right_answer": 4
    },
    {
        "question": "Wie heißt Deutschland auf Englisch",
        "answer_1": "Germany",
        "answer_2": "Deutschland",
        "answer_3": "Kurdistan",
        "answer_4": "Berlin",
        "right_answer": 1
    },
    {
        "question": "Februar hat ..... Tage!",
        "answer_1": "30",
        "answer_2": "32",
        "answer_3": "28",
        "answer_4": "31",
        "right_answer": 3
    }
];

let currentQuestion = 0;
let rightQuestiond = 0;
let Audio_Success = new Audio('audio/success.mp3');
let Audio_Fail = new Audio('audio/fail.mp3');


function init() {
    console.log(currentQuestion + 1)
    document.getElementById('end').innerHTML = questions.length;
    updateProgressBar();
    if (gameIsOver()) {
        showEndScreen();
    } else {
        showQuestion();
    }
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedAnswerNumber = selection.slice(-1);
    let right_answer = question['right_answer'];

    if (selectedAnswerNumber == right_answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        Audio_Success.play();
        rightQuestiond++;

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${right_answer}`).parentNode.classList.add('bg-success');
        Audio_Fail.play();
    }

    document.getElementById('nextQuestion').disabled = false;

}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('start').innerHTML = currentQuestion + 1;
    resetButtons();
    init();
    document.getElementById('nextQuestion').disabled = true;

}

function resetButtons() {
    //first answer
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    //second answer
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    //third answer
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    //forth answer
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');


}


function showEndScreen() {
    //close question-screen
    document.getElementById('questions-screen').style = 'display:none';
    document.getElementById('pencel-image').style = 'display:none';
    document.getElementById('progress-bar').style = 'display:none';
    //Show end.screen
    document.getElementById('end-screen').style = '';
    document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('right-questions').innerHTML = rightQuestiond;
}


function updateProgressBar() {
    let percent = Math.round((currentQuestion / questions.length) * 100);
    document.getElementById('progress_bar').innerHTML = `${percent} %`;
    document.getElementById('progress_bar').style = `width: ${percent}%`;
}

function playAgain() {

    console.log('it Works!')
    currentQuestion = 0;
    rightQuestiond = 0;

    //Open-Question-Screen
    document.getElementById('questions-screen').style = '';
    document.getElementById('pencel-image').style = '';
    document.getElementById('progress-bar').style = '';

    //close end.screen
    document.getElementById('end-screen').style = 'display:none';

    showQuestion()

}