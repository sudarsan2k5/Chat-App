import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port: 8080});

let count = 0;
wss.on("connection", (socket) => {
    count = count + 1;
    console.log("User Connected:) ");
    console.log("User Connected #: ", count);

    socket.on("message", (message) => {
        console.log("Message Received: " + message.toString());

    socket.send(message.toString() + " : Send form the server ");
    })
})