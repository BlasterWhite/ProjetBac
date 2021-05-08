console.log("Script receive.js chargé !");

const ws = new WebSocket("ws://localhost:8882");
const gaugeElement = document.querySelector(".gauge");

ws.addEventListener("open", () => {
    console.log("We are connected!");

    ws.send("Hey !");
});

ws.addEventListener("message", ({ data }) => {
    console.log(data);
    value = data.split(" ");
    setGaugeValue("eau", value[0]);
    setTemperature(value[1]);
    setEggValue(value[2]);
    setChicken(value[3]);
    setStatueDoor(value[4]);
});