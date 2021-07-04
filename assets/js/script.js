/* on load display initial modal
with possibility to close the window or enter the game*/
window.onload = function () {
    document.getElementById("myModal").style.display = "block";
}
document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("myModal").style.display = "none";
}
document.getElementById("start").onclick = function () {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("form-modal").style.display = "block";
}
/*starting the game open a form
for uset to add information*/
// document.getElementById("play").onclick = function () {
//     document.getElementById("form-modal").style.display = "none";
// }

document.getElementsByClassName("close")[1].onclick = function () {
    document.getElementById("form-modal").style.display = "none";
}

document.getElementsByTagName('form')[0].addEventListener("submit", play);
/////////////////////////////////////////////////////////////////////////////////////////////////

function play(event) {
    event.preventDefault();
    let data = getFormData(); // data = [username, difficulty, color]
    document.getElementById("form-modal").style.display = "none";
    let username = document.getElementById("username");
    username.innerHTML = data[0].toUpperCase();
    username.style.color = data[2];
    runGame(data[1]);
}

function getFormData() {
    let username = document.getElementById("name").value;
    let difficulty = getAge(Event);
    let color = getColor(Event);
    return [username, difficulty, color];
}

function getAge() {
    let ages = document.getElementsByClassName("age-input");
    for (let age of ages) {
        if (age.checked) {
            let value = age.value;
            return value;
        } else {}
    }
}

function getColor() {
    let colors = document.getElementsByClassName("colors");
    for (let color of colors) {
        if (color.checked) {
            let value = color.value;
            return value;
        } else {}
    }
}

let score = 0;
let questionNo = 1;
let lifes = 3;
let correctAnswer = '';

function runGame(difficulty) {
    if (difficulty == 'easy') {
        runEasyGame()
    } else if (difficulty == 'medium') {
        runMediumGame()
    }
}

function runEasyGame() {
    let answers = document.getElementsByClassName('answer');
    for (let answer of answers) {
        answer.addEventListener("click", function () {
            checkAnswer(this);
        })
    }
    PlayEasyGame()
}

function PlayEasyGame() {
    updateScores()
    if (lifes == 0) {
        alert("Game over. Try again!");
    } else {
        if (questionNo <= 10) {
            correctAnswer = '';
            questionNo++
            displayQuestion('easy');
        } else {
            alert(`Game over. Your score ${score}`)
            document.getElementById("myModal").style.display = "block";
        }
    }
}

function displayQuestion(difficulty) {
    if (difficulty == "easy") {
        let n = Math.floor(Math.random() * 3);
        document.getElementById("question").src = question.easy[n].image;
        let answers = document.getElementsByClassName('answer');
        correctAnswer = question.easy[n].name.charAt(0).toUpperCase();
        for (answer of answers) {
            answer.style.backgroundColor = 'white';
            answer.style.color = 'black';
            answer.innerHTML = '';
            let letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I',
                'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
                'Z', 'X', 'C', 'V', 'B', 'N', 'M',
            ];
            let letter = letters[Math.floor(Math.random() * 26)];
            if (letter != correctAnswer) {
                answer.innerHTML = letter;
            } else {
                continue;
            }
        }
        answers[Math.floor(Math.random() * 3)].innerHTML = correctAnswer;
    } else if (difficulty == "medium") {
        console.log('this function will display question')
    }
}





function runMediumGame() {
    alert('Medium game not yet implemented')
}

function checkAnswer(answer) {
    if (answer.innerHTML == correctAnswer) {
        answer.style.backgroundColor = 'green';
        answer.style.color = 'white';
        score++;
    } else {
        answer.style.backgroundColor = 'red';
        answer.style.color = 'white';

        lifes -= 1;
    }
    setTimeout(PlayEasyGame, 100, 'easy');
}

function incrementScores(result) {
    console.log("Increment scores started")
}

let question = {};
question = {
    easy: [{
            image: 'assets/images/question.png',
            name: 'question',
        },
        {
            image: 'assets/images/bee.png',
            name: 'bee',
        },
        {
            image: 'assets/images/snowman.png',
            name: 'snowman',
        },

    ]
}

function updateScores() {
    let questionCount = document.getElementsByClassName('qcount');
    let questionLabel = document.getElementById('qcount');
    let lifesCount = document.getElementsByClassName('lcount');
        let lifesLabel = document.getElementById('lcount');
    for (let i = 0; i < 10; i++) {
        questionCount[i].style.backgroundColor = 'white';
    }
    for (let i = 0; i < questionNo; i++) {
        questionCount[i].style.backgroundColor = 'green';
    }
    questionLabel.innerHTML = `Question: ${questionNo} / 10`;
    for (let i = 0; i < 3; i++) {
        lifesCount[i].style.backgroundColor = 'white';
    }
    for (let i = 0; i < lifes; i++) {
        lifesCount[i].style.backgroundColor = 'red';
    }
    lifesLabel.innerHTML = `Lifes left: ${lifes}/ 3`;
    console.log(lifes)
}