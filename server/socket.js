const io = require("socket.io")(3005);
const socket = io("http://localhost:3005");

socket.on("Chat-message", data => {
  console.log(data);
});
