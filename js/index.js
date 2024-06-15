var txt = "Haide sa invatam impreuna pentru bac!";
var i = 0;

window.onload = function(){
   typeWriter();
}

function typeWriter() {
    if (i < txt.length) {
      document.getElementsByClassName("titlu")[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
    if(i == txt.length){
        document.getElementsByClassName('link')[0].style.visibility = "visible";
        document.getElementsByClassName('link')[0].style.width = "25%";
    }
}