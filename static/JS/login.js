function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// forgot password section 
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}