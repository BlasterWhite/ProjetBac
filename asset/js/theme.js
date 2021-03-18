
console.log("[INFORAMTION] \"theme.js\" chargé.")

function test() {
  console.log("Reçu 5/5");
}

function switch_theme() {
   var element = document.body;
   element.classList.toggle("white-mode");
   var logo = document.getElementById("logo");
   logo.classList.toggle("white-logo-mode");
   var logo = document.getElementById("board");
   logo.classList.toggle("text-mode");
}
