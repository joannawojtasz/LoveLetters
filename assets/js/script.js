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

document.getElementsByTagName('form')[0].addEventListener("submit", startGame);

function startGame(event) {
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
    let difficulty = getAge(event);
    let color = getColor(event);
    return [username, difficulty, color];
}

function getAge() {
    let ages = document.getElementsByClassName("age-input");
    for (let age of ages) {
        if (age.checked) {
            let value = age.value;
            return value;
            break;
        } else {}
    }
}

function getColor() {
    let colors = document.getElementsByClassName("colors");
    for (let color of colors) {
        if (color.checked) {
            let value = color.value;
            return value;
            break;
        } else {}
    }
}

let score = 0;
let questionNo = 1;
let lifes = 3;


function runGame(difficulty) {
    displayQuestion(difficulty);
    if (difficulty == 'easy') {
        runEasyGame()
    } else if (difficulty == 'medium') {
        runMediumGame()
    }
}

function displayQuestion(difficulty) {
    if (difficulty == "easy") {
        // let n = Math.floor(Math.random() * 20);
        document.getElementById("question").src = question.easy[0].image;

        let answers = document.getElementsByClassName('answer');
        let correctAnswer = question.easy[0].name.charAt(0).toUpperCase();
        for (answer of answers) {
            answer.innerHTML = ''
            let letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ];
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

function runEasyGame() {
    let answers = document.getElementsByClassName('answer');
    for (answer of answers) {
    answer.addEventListener('click', function(){
        checkAnswer(this);
    })}
    // let choosenAnswer = listenForAnswer(easy);
    //
    // let result = checkAnswer(choosenAnswer);
    // incrementScores(result);
}

function runMediumGame() {
    alert('Medium game not yet implemented')
}

// function listenForAnswer() {

// return choosenAnswer;
// }

function checkAnswer(answer) {
    let correctAnswer = question.easy[0].name.charAt(0).toUpperCase();
    if (answer.innerHTML == correctAnswer) {
        answer.style.backgroundColor = 'green';
        answer.style.color = 'white';
        score++;
        questionNo++
        runEasyGame()
    } else {
        answer.style.backgroundColor = 'red';
        answer.style.color = 'white';
        questionNo++
        runEasyGame()
        lifes -= 1;
    }  
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
        // {
        //     image: 'assets/images/,
        //     name: ,
        // },


    ]
}
