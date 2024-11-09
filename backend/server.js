import cookieParser from "cookie-parser";
import cors from 'cors';
import express from "express"
import path from "path";
import "dotenv/config"

import authRouter from "./routes/authRouter.js";
import messageRouter from "./routes/messageRouter.js";
import userRouter from "./routes/userRouter.js";

import connectToDatabase from "./Database/connect.js";
import { app, server } from "./socket/socket.js";


const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "https://guffgaff-kpsd.onrender.com",
    credentials: true
}));

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/users", userRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})


// app.get("/", (req, res) => {
//     res.send("Api Working Fine");
// })


server.listen(PORT, () => {
    connectToDatabase();
    console.log("listening to port ", PORT);

})