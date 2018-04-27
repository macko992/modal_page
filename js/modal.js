var overlay = document.getElementById('overlay'); //get all from div with id overlay

//function to open modal
function openModal() {
  overlay.classList.remove("is-hidden");
}
//function to close modal after click 'cancel'
function closeModal() {
	var textNone = document.getElementById('showText');
  overlay.classList.add("is-hidden");
	textNone.innerHTML="";
}
//function to close modal and show text after click 'ok'
function applyModal() {
  var text = document.getElementById('showText');
  overlay.classList.add("is-hidden");
  text.innerHTML = "piknie Panie to żeś uczynił </br> (chyba  :| )";
}
