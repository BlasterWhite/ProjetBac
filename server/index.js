const WebSocket = require("ws");
const dgram = require('dgram');
const {ip , port} = require("../server/config.json");

//Receive
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server Listening'));
/*
server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});*/

server.bind(port, ip);
const wss = new WebSocket.Server({ port:8882 });

wss.on("connection", ws => {
    console.log("New Client Connected!");

    ws.on("message", data => {
        console.log(`Client has send us : ${data}`);

        server.on('message', (msg, rinfo) => {
            ws.send(`${msg}`);
        });
        //ws.send(data.toUpperCase());
    });

    ws.on("close", () => {
        console.log("Client has disconnected!");
    });
});
