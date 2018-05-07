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


// open modal
var buttons = document.querySelectorAll('.my-btn');
buttons.forEach(function(btn) {
  if (btn.getAttribute('data-ref')) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.modalOverlay').forEach(function(overlay) {
        overlay.classList.add('modalHidden');
      });
      var ref = btn.getAttribute('data-ref');
      var modal = document.getElementById(ref);
      console.log(btn);
      modal.classList.remove('modalHidden');
    })
  }
});

// close modal
var closers = document.querySelectorAll('.close');
closers.forEach(function(close) {
  close.addEventListener('click', function(e) {
    e.currentTarget.parentNode.parentNode.classList.add('modalHidden');
    console.log(close);
  });
});

var title = document.getElementById('subbtn1');
var content = document.getElementById('subbtn2');

//function to get input
title.onclick = function getTitle() {
  var titleInput = document.getElementById("title");
  var titleInputVal = titleInput.value;
  var condition = /[a-zA-Z]/;
  if (!condition.test(titleInputVal)) {
    alert('Dozwolone są tylko normalne litery');
  } else {
    document.getElementById("titleOut").innerHTML = titleInputVal;
  }
  console.log(titleInput);
}

//function to get textArea
content.onclick = function getContent() {
  var contentInput = document.getElementById("content").value;
  document.getElementById("contentOut").innerHTML = contentInput;
  console.log(content);
}

document.getElementById('finalBtn').disabled = true;

var titcont = document.getElementById('subbtn1');
titcont.addEventListener('click', function(){
  var box = document.getElementById('title');
  if (box.value !== ''){
    document.getElementById('finalBtn').disabled = false;

  }
});
