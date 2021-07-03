window.onload = function () {
    console.log("nie dziala");   
    document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("formModal").style.display = "none";
}

// When the user clicks play start the forn modal
document.getElementById("start").onclick = function () {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("formModal").style.display = "block";
}
// When the user clicks play start the game
document.getElementById("play").onclick = function () {
    document.getElementById("formModal").style.display = "none";
}

let ages = document.getElementsByClassName("age");

for (let age of ages) {
    age.addEventListener("click", function () {
        // diff = this.getAttribute("value")
        let div = this.getAttribute("id");
        console.log(div)
        let div1 = document.getElementById("medium-div");
        let div2 = document.getElementById("easy-div");
        
        if (div == "medium-div") {
            div1.style.backgroundColor = '#009700';
            div1.style.color = '#FFF';
            div2.style.backgroundColor = '#fff';
            div2.style.color = 'black';
        } else if (div == "easy-div"){
            div2.style.backgroundColor = '#009700';
            div2.style.color = '#FFF';
            div1.style.backgroundColor = '#fff';
            div1.style.color = 'black';
        }
        
    })
}

