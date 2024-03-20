// this displays the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
// this closes the display form
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 

  var slideIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
  }


