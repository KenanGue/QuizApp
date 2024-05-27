let questions = [
    {
        "number": 1,
        "question": "Was ist eine Variable in der Programmierung?",
        "answer_1": "Ein fester Wert",
        "answer_2": "Eine Speicheradresse, die einen veränderbaren Wert enthält",
        "answer_3": "Ein Teil des Betriebssystems",
        "answer_4": "Ein externer Speicher",
        "right_answer": 2
    },
    {
        "number": 2,
        "question": "Welche Programmiersprache wird hauptsächlich für Webentwicklung verwendet?",
        "answer_1": "C++",
        "answer_2": "Python",
        "answer_3": "JavaScript",
        "answer_4": "Java",
        "right_answer": 3
    },
    {
        "number": 3,
        "question": "Was bedeutet Syntax in der Programmierung?",
        "answer_1": "Die Geschwindigkeit eines Programms",
        "answer_2": "Die richtige Reihenfolge der Programmbefehle",
        "answer_3": "Die Grammatikregeln einer Programmiersprache",
        "answer_4": "Die Benutzeroberfläche eines Programms",
        "right_answer": 3
    },
    {
        "number": 4,
        "question": "Welche Schleifenart gibt es in den meisten Programmiersprachen?",
        "answer_1": "do-next",
        "answer_2": "for",
        "answer_3": "during",
        "answer_4": "over",
        "right_answer": 2
    },
    {
        "number": 5,
        "question": "Was ist ein Array?",
        "answer_1": "Eine Art von Funktion",
        "answer_2": "Eine Sammlung von Variablen, die durch Indizes organisiert sind",
        "answer_3": "Ein Debugging-Tool",
        "answer_4": "Ein Dateiformat",
        "right_answer": 2
    },
    {
        "number": 6,
        "question": "Was ist ein Algorithmus in der Programmierung?",
        "answer_1": "Ein Datenbankmanagementsystem",
        "answer_2": "Ein Schritt-für-Schritt-Verfahren zur Lösung eines Problems",
        "answer_3": "Eine Programmiersprache",
        "answer_4": "Ein Hardwaregerät",
        "right_answer": 2
    }
];

let rightquestions = 0;
let currentQuestion = 0;
let sounds_success = new Audio('sounds/success.mp3');
let sounds_fail = new Audio('sounds/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-bar1').innerHTML = `${percent} %`;
    document.getElementById('progress-bar1').style.width = `${percent}%`;
    console.log('Fortschritt:', percent);
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightquestions;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let SelectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(SelectedQuestionNumber)) {
        document.getElementById(selection).classList.add('bg-success');
        sounds_success.play();
        rightquestions++;
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        sounds_fail.play();
    }
    document.getElementById('next-button').disabled = false;
}

function SelectedQuestionNumber(SelectedQuestionNumber) {
    return SelectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
}

function restartGame() {
    rightquestions = 0;
    currentQuestion = 0;
    document.getElementById('end-screen').style = 'display: none';
    document.getElementById('question-body').style = '';
    init();
}