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

let form = document.getElementsByTagName('form')[0];

form.addEventListener("submit", startGame);

function startGame(event) {
    event.preventDefault();
    let data = getFormData();
    // data = [username, difficulty, color]
    document.getElementById("form-modal").style.display = "none";
    let username =  document.getElementById("username");
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
        } else {
        }
    }
}

function getColor() {
    let colors = document.getElementsByClassName("colors");
    for (let color of colors) {
        if (color.checked) {
            let value = color.value;
            return value;
            break;
        } else {
        }
    }
}

function runGame(difficulty) {
    if (difficulty == 'easy') {
        runEasyGame()
    } else if (difficulty == 'medium') {
        runMediumGame()
    } 
}

function runEasyGame() {
    alert('Easy game not yet implemented')
}

function runMediumGame() {
    alert('Medium game not yet implemented')
}