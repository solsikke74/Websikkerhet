function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  // Skjul alle faner
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Fjern "active" fra alle knapper
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Vis valgt fane og marker knappen som aktiv
  var activeTab = document.getElementById(cityName);
  activeTab.style.display = "block";
  evt.currentTarget.className += " active";
}

// MODAL LOGIKK - Pakket inn i en funksjon eller sjekk
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("myModal");
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  // Sjekk at bildet faktisk finnes før vi legger til klikk-funksjon
  if (img) {
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

  // Lukk modal hvis man klikker utenfor bildet
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});