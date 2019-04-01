homeIcon = document.querySelector('.homeIcon');

function myFunction(x) {
    if (x.matches) { // If media query matches
        homeIcon.innerHTML = "Jonathan McWilliam";
    } else {
        homeIcon.innerHTML = "Home";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes