// 1. Tab-funksjonen (Denne må ligge utenfor for å kunne kalles fra HTML)
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// 2. Modal-logikken (Vi venter til hele siden er lastet)
document.addEventListener("DOMContentLoaded", function() {
    
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Sjekk om elementene faktisk finnes før vi legger til funksjoner
    if (img && modal) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    var span = document.getElementsByClassName("close")[0];
    if (span) {
        span.onclick = function() { 
            modal.style.display = "none";
        }
    }

    // Lukker modalen hvis man klikker på det svarte området utenfor bildet
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});