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
    let username = document.getElementById("name").value;
    let difficulty = getAge(event);
    let color = getColor(event);
    console.log(username, difficulty, color);
    document.getElementById("form-modal").style.display = "none";
}

function getAge(event) {
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

function getColor(event) {
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
