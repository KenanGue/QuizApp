let questions = [
    {
        "question": "Was ist eine Variable in der Programmierung?",
        "answer_1": "Ein fester Wert",
        "answer_2": "Eine Speicheradresse, die einen veränderbaren Wert enthält",
        "answer_3": "Ein Teil des Betriebssystems",
        "answer_4": "Ein externer Speicher",
        "right_answer": 2
    },
    {
        "question": "Welche Programmiersprache wird hauptsächlich für Webentwicklung verwendet?",
        "answer_1": "C++",
        "answer_2": "Python",
        "answer_3": "JavaScript",
        "answer_4": "Java",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet Syntax in der Programmierung?",
        "answer_1": "Die Geschwindigkeit eines Programms",
        "answer_2": "Die richtige Reihenfolge der Programmbefehle",
        "answer_3": "Die Grammatikregeln einer Programmiersprache",
        "answer_4": "Die Benutzeroberfläche eines Programms",
        "right_answer": 3
    },
    {
        "question": "Welche Schleifenart gibt es in den meisten Programmiersprachen?",
        "answer_1": "do-next",
        "answer_2": "for",
        "answer_3": "during",
        "answer_4": "over",
        "right_answer": 2
    },
    {
        "question": "Was ist ein Array?",
        "answer_1": "Eine Art von Funktion",
        "answer_2": "Eine Sammlung von Variablen, die durch Indizes organisiert sind",
        "answer_3": "Ein Debugging-Tool",
        "answer_4": "Ein Dateiformat",
        "right_answer": 2
    },
    {
        "question": "Was ist ein Algorithmus in der Programmierung?",
        "answer_1": "Ein Datenbankmanagementsystem",
        "answer_2": "Ein Schritt-für-Schritt-Verfahren zur Lösung eines Problems",
        "answer_3": "Eine Programmiersprache",
        "answer_4": "Ein Hardwaregerät",
        "right_answer": 2
    }
];


let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
console.log('Selected answer is', selection);
let SelectedQuestionNumber = selection.slice(-1);
console.log('seletedQuestionNumber is', SelectedQuestionNumber);
console.log('Current question is', question['right_answer']);

let idOfRightAnswer = `answer_${question['right_answer']}`;

if(SelectedQuestionNumber == question['right_answer']) {
    document.getElementById(selection).classList.add('bg-success');
} else {
    document.getElementById(selection).classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).classList.add('bg-success');
}
}

