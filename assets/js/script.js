
let modal = document.getElementById("myModal");

document.onload = function() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
  }