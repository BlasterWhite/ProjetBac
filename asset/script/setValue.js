console.log("Script setValue.js Chargé !");

function setTemperature(value) {
    document.getElementById("temperatureValue").innerHTML = value;
}


function setGaugeValue(gauge, value) {
    if( value < 0 || value > 1) {
        return;
    }
    let gaugeElement = document.getElementById(gauge);
    //console.log(`[VALUE GAUGE]${value}`);
    gaugeElement.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
    gaugeElement.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;            
}

function setEggValue(value) {
    document.getElementById("eggValue").innerHTML = value;
}

function setChicken(value) {
    document.getElementById("chickenValue").innerHTML = value;
}

function setStatueDoor(statue) {
    if(statue == 1) document.getElementById("doorStatue").innerHTML = 'Ouverte';
    if(statue == 0) document.getElementById("doorStatue").innerHTML = 'Fermé';  
    if(statue) document.getElementById("doorStatue").innerHTML = 'Ouverte';
    if(!statue) document.getElementById("doorStatue").innerHTML = 'Fermé';   
}