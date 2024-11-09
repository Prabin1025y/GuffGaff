import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

//create an http server for socket
const server = http.createServer(app);

//configuring the server as socket server
const io = new Server(server, {
    cors: {
        origin: ["https://guffgaff-kpsd.onrender.com"],
        methods: ["GET", "POST"]
    }
});

//an object that store userid as key and socket id as value {userId : socketId}
const userSocketMap = {}

export const getUserSocketId = (userId) => userSocketMap[userId];

//listening to event when user is connected and a callback functon that accepts the connection as socket
io.on("connection", (socket) => {
    console.log("A user has been connected", socket.id);

    //get the currently authenticated user and add the record to usersocket map. this query is coming from frontend context
    const authUserId = socket.handshake.query.authUserId;
    if (authUserId != undefined)
        userSocketMap[authUserId] = socket.id;

    //send this event to all the connected users to this server. "getONlineUsers" is the event name which is identifier and next parameter is the thing we want to pass through this event
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //listening to event when this connection is disconnected. Similer to destructors
    socket.on("disconnect", () => {
        //delete the current user from onlineuser list and notify this to all connected users by sending updated onlineuserlist
        delete userSocketMap[authUserId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));

        console.log("user has been disconnected", socket.id);
    })
})

//exporting the app to use in server.js
export { app, io, server };
