console.log("Script logs.js chargé !");

const ws = new WebSocket("ws://localhost:8882");

ws.addEventListener("open", () => {
    console.log("We are connected!");

    ws.send("Hey !");
});

ws.addEventListener("message", ({ data }) => {
    console.log(data);
    value = data.split(" ");
    // var lineStart = document.createElement('tr');

    // var timeValue = document.createElement('td');
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1);
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time+' | '+date;
    // timeValue.innerText = dateTime;


    document.getElementById('tableau').innerHTML += `<tr><td>${dateTime}</td><td>${value[0]}</td><td>${value[1]}</td><td>${value[2]}</td><td>${value[3]}</td><td>${value[4]}</td></tr>`;


    // document.body.appendChild(lineStart);
    // document.getElementById("tableau").appendChild(lineStart);
    // document.body.appendChild(timeValue);
    // document.getElementById("tableau").appendChild(timeValue);

});