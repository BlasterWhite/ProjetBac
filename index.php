<!DOCTYPE html>
<html lang="FR-fr">
  <head>
    <title>Mon Poulallier</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="asset/img/logo.png" />
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/d50a18be62.js" crossorigin="anonymous"></script>
    <script src="asset/js/theme.js"></script>
  </head>
  <body>
    <header>
      <div class="setting">
        <label for="myCheck"><i class="fas fa-random"></i> Mode Clair:</label>
        <input type="checkbox" id="myCheck" onclick="switchmode()">
      </div>
      <img src="asset/img/logo.png" id="logo">
      <h1>Poulailler Autonome</h1>
    </header>
    <main class="color" id="color">
      <div class="panel normal-color">
        <h3 class="panel">Température : </h3>
        <h1>23°C</h1>
        <br><br>
        <i class="fas fa-thermometer-half" style="font-size: 140px;"></i>
      </div>
      <div class="panel normal-color">
        <h3 class="panel">Poules : </h3>
        <h1>10 / 12</h1>
        <br><br>
        <img src="asset/img/chicken.png" class="chicken"></img><br><br><br>
        <!--<input type="number" value="12" id="nombrePoule"  min="0" max="200" step="1"onkeydown="if(event.key==='.'){event.preventDefault();}"  oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"> -->
      </div>
      <div class="panel normal-color">
        <h3 class="panel">Silo Graine : </h3>
        <h1>84 %</h1>
        <br><br>
        <i class="fas fa-seedling wheat" style="font-size: 120px;"></i>
      </div>
      <div class="panel normal-color" id="water" >
        <h3 class="panel" id="water" >Réserve d'eau : </h3>
        <h1 style="color: rgb(255, 35, 101)">37 %</h1>
        <br><br>
        <i class="fas fa-tint water" style="font-size: 120px;"></i>
      </div>
      <div class="panel normal-color">
        <h3 class="panel">Porte : </h3>
        <h1>Ouvert</h1>
        <br><br>
        <i class="fas fa-dungeon door" style="font-size: 120px;"></i><br><br><br>
        <button class="open" onclick="myFunction()">Ouvrir la porte</button>
      </div>
      <div class="panel normal-color">
        <h3 class="panel">Œuf : </h3>
        <h1>2</h1>
        <br><br>
        <i class="fas fa-egg egg" style="font-size: 120px;"></i><br><br><br>
      </div>
    <main>
  </body>
</html>
