// scroll to top button

let button = document.getElementById('myBtn');

document.getElementById("myBtn").onclick = window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

document.getElementById("myBtn").onclick =function topFunction() {
  document.documentElement.scrollTop = 0; 
}

