/* on load display initial modal
with possibility to close the window or enter the game*/
window.onload = function () {
    document.getElementById("form-modal").style.display = "block";
};
document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("result-modal").style.display = "none";
};
document.getElementsByClassName("close")[1].onclick = function () {
    document.getElementById("correct-modal").style.display = "none";
};
document.getElementById("restart").onclick = function () {
    document.getElementById("result-modal").style.display = "none";
};
document.getElementById('reset').onclick = function () {
    resetScores(); 
    document.getElementById("form-modal").style.display = "block";
};

document.getElementsByTagName('form')[0].addEventListener("submit", play);
/////////////////////////////////////////////////////////////////////////////////////////////////

const QUESTION_BANK = [{
        image: 'assets/images/bee.png',
        name: 'bee',
    },
    {
        image: 'assets/images/snowman.png',
        name: 'snowman',
    },
    {
        image: 'assets/images/ball.png',
        name: 'ball',
    },
    {
        image: 'assets/images/blocks.png',
        name: 'blocks',
    },
    {
        image: 'assets/images/cat.png',
        name: 'cat',
    },
    {
        image: 'assets/images/dinosaur.png',
        name: 'dinosaur',
    },
    {
        image: 'assets/images/doll.png',
        name: 'doll',
    },
    {
        image: 'assets/images/elephant.png',
        name: 'elephant',
    },
    {
        image: 'assets/images/kangaroo.png',
        name: 'kangaroo',
    },
    {
        image: 'assets/images/lion.png',
        name: 'lion',
    },
    {
        image: 'assets/images/shark.png',
        name: 'shark',
    },
    {
        image: 'assets/images/lemon.jpg',
        name: 'lemon',
    },
    {
        image: 'assets/images/pear.jpg',
        name: 'pear',
    },
    {
        image: 'assets/images/pencil.png',
        name: 'pencil',
    },
    {
        image: 'assets/images/orange.png',
        name: 'orange',
    },
    {
        image: 'assets/images/car.png',
        name: 'car',
    },
    {
        image: 'assets/images/apple.jpg',
        name: 'apple',
    }
];
const TOTAL_LIFES = 3;
const TOTAL_QUESTIONS = 10;

/////////////////////////////////

function play(event) {
    event.preventDefault();
    let {
        username,
        difficulty,
        color
    } = getFormData();
    document.getElementById("form-modal").style.display = "none";
    let displayname = document.getElementById('username');
    displayname.innerHTML = username.toUpperCase();
    displayname.style.color = color;
    startGame(difficulty);
}

function getFormData() {
    let username = document.getElementById("name").value;
    let difficulty = getAge(Event);
    let color = getColor(Event);
    return {
        username,
        difficulty,
        color
    };
}

function getAge() {
    let ages = document.getElementsByClassName('age-input');
    return getCheckedValueFromRadioButtons(ages);
}

function getColor() {
    let colors = document.getElementsByClassName('colors');
    return getCheckedValueFromRadioButtons(colors);
}

function getCheckedValueFromRadioButtons(buttons) {
    for (let button of buttons) {
        if (button.checked) {
            return button.value;
        }
    }
}
///////////////////////////
let score = 0;
let currentQuestionNo = 1;
let lifesRemaining = TOTAL_LIFES;
let correctAnswer = '';
let answers = document.getElementsByClassName('answer');
let questions = [];
///////////////////////////////


/**
 * Starts the game: draws questions from question bank, 
 * sets listeners for users answers and calls for
 * displayQuestion function passing chosen level
 */
function startGame(difficulty) {
    questions = QUESTION_BANK.sort(() => 0.5 - Math.random()).slice(0, TOTAL_QUESTIONS); // Akshat Garg
    if (difficulty == 'easy') {
        answers[0].addEventListener('click', function () {
            checkAnswer('easy', this);
        });
        answers[1].addEventListener('click', function () {
            checkAnswer('easy', this);
        });
        answers[2].addEventListener('click', function () {
            checkAnswer('easy', this);
        });
        displayQuestion(difficulty);
    } else if (difficulty == 'medium') {
        displayQuestion(difficulty);
    }
}

/**
 * Displays the task, random question and answer boxes 
 * according to chosen level
 */
function displayQuestion(difficulty) {
    const currentQuestionData = questions[currentQuestionNo - 1]; // wrote by Akshat Garg
    document.getElementById("question").src = currentQuestionData.image;
    let task = document.getElementById('task');

    if (difficulty == 'easy') {
        task.innerHTML = 'Name the item on the picture. <br> What letter does the name start with?';
        document.getElementById('answer-div-easy').style.display = 'flex;';
        document.getElementById('answer-div-medium').style.display = 'none';
        correctAnswer = currentQuestionData.name.charAt(0).toUpperCase();
        //get 3 random letters in answer boxes
        for (let answer of answers) {
            answer.style.backgroundColor = '#fff';
            answer.style.color = '#000';
            let letter = getRandomAlphabet();
            while (letter == correctAnswer) {
                letter = getRandomAlphabet();
            }
            answer.innerHTML = letter;
        }
        // Replace any of the 3 with correct answer
        answers[Math.floor(Math.random() * 3)].innerHTML = correctAnswer;
    } else if (difficulty == "medium") {
        resetInputField();
        task.innerHTML = 'Name the item on the picture.';
        document.getElementById('answer-div-easy').style.display = 'none';
        document.getElementById('answer-div-medium').style.display = 'block';
        correctAnswer = currentQuestionData.name;
        let useranswer = document.getElementById('useranswer');
        useranswer.focus();
        useranswer.onkeyup = function () {
            checkAnswer('medium', useranswer);
        };
        let fail = 0;
    }
}

/**
 * Starts new round of the game
 * checks if score allows continuing the game and
 * calls for updateScores and displayQuestion */
function startNewRound(difficulty) {
    updateScores();
    if (lifesRemaining == 0) {
        gameOver(difficulty);
        setTimeout(resetScores, 2000);
    } else if (currentQuestionNo <= 10) {
            correctAnswer = '';
            displayQuestion(difficulty);
    } else {
        gameOver(difficulty);
        setTimeout(resetScores, 2000);
    }
}

/**
 * Checks if given answer is correct, updates scores accordingly
 * starts new round
 */
function checkAnswer(difficulty, useranswer) {

    if (difficulty == 'easy') {
        if (useranswer.innerHTML == correctAnswer) {
            useranswer.style.backgroundColor = '#009700';
            useranswer.style.color = '#fff';
            score++;
        } else {
            useranswer.style.backgroundColor = '#c20000';
            useranswer.style.color = '#fff';
            lifesRemaining -= 1;
            setTimeout(showcorrectanswer, 100);
        }
        setTimeout(continueEasyGame, 500);

    } else if (difficulty == 'medium') {
        if (useranswer.value == correctAnswer) {
            score++;
            document.getElementById("message-correct").innerHTML = `Correct!`;
            document.getElementById("correct-modal").style.display = "block";
            setTimeout(continueMediumGame, 1000);
        } else if (correctAnswer.startsWith(useranswer.value)) {
            useranswer.style.border = 'solid 10px #009700';
        } else if (useranswer.value != "Type here") {
            if (fail == 0) {
                lifesRemaining -= 1;
                fail += 1;
                updateLifesCount();
            } else if (fail < 5) {
                fail += 1;
            } else {
                useranswer.onkeyup = function() {};
                showcorrectanswer('medium');
                setTimeout(continueMediumGame, 1500);
            }
            useranswer.style.border = 'solid 10px #c20000';
        }
    }
}

/**
 * shows user the correct answer
 */
function showcorrectanswer(difficulty) {
    if (difficulty == 'medium') {
        document.getElementById("message-correct").innerHTML = `The correct sepelling is <span style="color:#c20000; font-size:2rem">${correctAnswer.toUpperCase()}</span>`;
        document.getElementById("correct-modal").style.display = "block";
    } else {
        for (let answer of answers) {
            if (answer.innerHTML == correctAnswer) {
                answer.style.backgroundColor = '#009700';
                answer.style.color = '#fff';
            }
        }
    }
}

/**
 * closes the result modal and calls new round 
 * setting the difficulty to easy
 */
function continueEasyGame() {
    document.getElementById("correct-modal").style.display = "none";
    startNewRound('easy');
}
/**
 * closes the result modal and calls new round 
 * setting the difficulty to medium
 */
function continueMediumGame() {
    document.getElementById("correct-modal").style.display = "none";
    fail = 0;
    startNewRound('medium');
}

/**
 * reset input field
 */
function resetInputField() {
    document.getElementById('useranswer').value = '';
    document.getElementById('useranswer').style.border = 'solid 10px  #fff';
}

/**
 * Returns random letter
 */
function getRandomAlphabet() {
    let letters = [
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
    ];
    return letters[Math.floor(Math.random() * 26)];
}


/**
 * Displays game over modal with score information
 * and calls for resetting score 
 */
function gameOver(difficulty) {
    document.getElementById("message").innerHTML = `Game over. Your score: <span style="color:#c20000; font-size:2rem">${score}</span>. <br> Try again!`;
    document.getElementById("result-modal").style.display = "block";
    
    startGame(difficulty);
}
/**
 * Resets the scores
 * to use before new game
 */
function resetScores() {
    document.getElementById("result-modal").style.display = "none";
    score = 0;
    currentQuestionNo = 0;
    lifesRemaining = TOTAL_LIFES;
    updateScores()
}

/**
 * increments the currentQuestionNo 
 * and call for updating score information displayed
 */
function updateScores() {
    currentQuestionNo++;
    updateQuestionCount();
    updateLifesCount();
}

/**
 * update the current question number displayed
 */
function updateQuestionCount() {
    let questionCount = document.getElementsByClassName('qcount');
    let questionLabel = document.getElementById('qcount');
    for (let i = 0; i < 10; i++) {
        questionCount[i].style.backgroundColor = '#fff';
    }
    for (let i = 0; i < currentQuestionNo; i++) {
        questionCount[i].style.backgroundColor = '#009700';
    }
    questionLabel.innerHTML = `Question: ${currentQuestionNo} / 10`;
}

/**
 * update the remaining lifes displayed
 */
function updateLifesCount() {
    let lifesCount = document.getElementsByClassName('lcount');
    let lifesLabel = document.getElementById('lcount');
    for (let i = 0; i < 3; i++) {
        lifesCount[i].style.backgroundColor = '#fff';
    }
    for (let i = 0; i < lifesRemaining; i++) {
        lifesCount[i].style.backgroundColor = '#c20000';
    }
    lifesLabel.innerHTML = `Lifes left: ${lifesRemaining}/ 3`;
}