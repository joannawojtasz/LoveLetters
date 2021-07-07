document.getElementsByClassName("play")[0].onclick = function () {
    document.getElementById("form-modal").style.display = "block";
};

document.getElementsByTagName('form')[0].addEventListener("submit", saveData);

document.getElementById("rules").onclick = function () {
    document.getElementById("rules-modal").style.display = "block";
};

document.getElementById("about").onclick = function () {
    document.getElementById("about-modal").style.display = "block";
};



