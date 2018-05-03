/* ********************************* */
/* ===========Task 1 ===============*/
/* ******************************* */

var overlay = document.getElementById('overlay'); //get all from div with id overlay

//function to open modal
function openModal() {
  overlay.classList.remove("is-hidden");
}
//function to close modal after click 'cancel'
function closeModal() {
  var textNone = document.getElementById('showText');
  overlay.classList.add("is-hidden");
  textNone.innerHTML = "";
}
//function to close modal and show text after click 'ok'
function applyModal() {
  var text = document.getElementById('showText');
  overlay.classList.add("is-hidden");
  text.innerHTML = "piknie Panie to żeś uczynił </br> (chyba  :| )";
}
/* ********************************* */
/* ===========Task 2 ===============*/
/* ******************************* */

//function to get input and textArea
//validation related to only lirrers
function getTitle() {
  var titleInput = document.getElementById("title");
  var titleInputVal = titleInput.value;
  var condition = /[a-zA-Z]/;
  if (!condition.test(titleInputVal)) {
    alert('Dozwolone są tylko normalne litery');
  } else {
    document.getElementById("titleOut").innerHTML = titleInputVal;
  }

}
//function to get textArea
function getContent() {
  var contentInput = document.getElementById("content").value;
  document.getElementById("contentOut").innerHTML = contentInput;
}
//Title modal
var modalInput = document.getElementById('titleModal');
var btn = document.getElementById("titleBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modalInput.style.display = "block";
}
span.onclick = function() {
  modalInput.style.display = "none";
}



// Content modal
var modalTxtAre = document.getElementById('contenteModal');
var btn = document.getElementById("contentBtn");
var span = document.getElementsByClassName("close1")[0];
btn.onclick = function() {
  modalTxtAre.style.display = "block";
}
span.onclick = function() {
  modalTxtAre.style.display = "none";
}



// Finaly modal title + content
var modalFinal = document.getElementById('finalyModal');
var btn = document.getElementById("finalyBtn");
var span = document.getElementsByClassName("close2")[0];
var titval = document.getElementById('title').value;
document.getElementById('finalyBtn').disabled = true;
btn.onclick = function() {
  modalFinal.style.display = "block";
}
span.onclick = function() {
  modalFinal.style.display = "none";
}



//Validation with active final button
function visableFinal(){
  document.getElementById('finalyBtn').disabled = false;
}


//show id by click buttons
function showBtnId(button){
  var button_name = button.getAttribute('name');
 	    console.log(button_name);
}
