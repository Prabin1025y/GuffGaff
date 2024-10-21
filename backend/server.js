import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config"

import authRouter from "./routes/authRouter.js";
import messageRouter from "./routes/messageRouter.js";
import userRouter from "./routes/userRouter.js";

import connectToDatabase from "./Database/connect.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/users", userRouter);


app.get("/", (req, res) => {
    res.send("Api Working Fine");
})


app.listen(PORT, () => {
    connectToDatabase();
    console.log("listening to port ", PORT);

})