document.getElementsByClassName("pulse-button")[0].onclick = function () {
    document.getElementById("form-modal").style.display = "block";
};

document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("form-modal").style.display = "none";
};
document.getElementsByClassName("close")[1].onclick = function () {
    document.getElementById("rules-modal").style.display = "none";
};
document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("about-modal").style.display = "none";
};
document.getElementById("rules").onclick = function () {
    document.getElementById("rules-modal").style.display = "block";
};

document.getElementById("about").onclick = function () {
    document.getElementById("about-modal").style.display = "block";
};



