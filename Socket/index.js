const socketServer = require("socket.io");

const io = new socketServer.Server(8080, {
    cors: {
        origin: "*"
    }
});

let count = 0;
let users = {};
const messages = [];

io.on("connection", (socket) => {
    socket.emit("user_login", socket.id);
    socket.on("user_login", name=>{
        console.log(name, 'logged in', ++count);
        users[socket.id] = name;
        console.log(io.client, users);
        io.emit("users_in_room", JSON.stringify(users));
        socket.emit("all_messages", JSON.stringify(messages));
    })

    socket.on("user_msg_send_success_client", data => {
        
        messages.push({data, time: new Date().toString(), author: users[socket.id]});
        io.emit("user_msg_send_success_server", JSON.stringify(messages));
    })

    socket.on("disconnectd", io => {
        console.log('disconnected', socket.id, --count);
        delete users[socket.id];
    })

    console.log( "connected", socket.id );
});