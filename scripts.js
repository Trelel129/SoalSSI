// Get the button:
let myleftbutton = document.getElementById("buttonleft");
let myrightbutton = document.getElementById("buttonright");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    myleftbutton.style.display = "block";
    myrightbutton.style.display = "block";
  } else {
    myleftbutton.style.display = "none";
    myrightbutton.style.display = "none";
  }
}

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
