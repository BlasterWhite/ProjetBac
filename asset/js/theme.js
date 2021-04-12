console.log("[INFORAMTION] \"theme.js\" chargé.")

var x = 0;
function switchmode() {
  if(x == 0) {
      x++;
      console.log("On");
      selec = document.getElementsByClassName("panel");
      var i;
      for (i = 0; i < selec.length; i++) {
      selec[i].classList.add("blind-color");
      selec[i].classList.remove("normal-color");
      }
  }
  else {
      x= 0;
      console.log("Off");
      selec = document.getElementsByClassName("panel");
      var i;
      console.log(selec.length);
      for (i = 0; i < selec.length; i++) {
      selec[i].classList.add("normal-color");
      selec[i].classList.remove("blind-color");        
      }
  }
}