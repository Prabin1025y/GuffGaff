import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getUsers } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get("/", isAuthenticated, getUsers);

export default userRouter;