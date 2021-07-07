document.getElementsByClassName("pulse-button")[0].onclick = function () {
    document.getElementById("form-modal").style.display = "block";
};
let closeButtons = document.getElementsByClassName("close");
for (closeButton of closeButtons) {
    closeButton.onclick = function () {
    closeButton.parentNode.style.display = "none";
};
}
document.getElementById("rules").onclick = function () {
    document.getElementById("rules-modal").style.display = "block";
};

document.getElementById("about").onclick = function () {
    document.getElementById("about-modal").style.display = "block";
};



