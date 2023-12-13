import { Router } from "express";
import { ctrlCreateUser, ctrlGetAllUsers } from "../controllers/user.controller.js";
import { body } from "express-validator"

const userRouter = Router();
 
userRouter.get("/", ctrlGetAllUsers);
userRouter.post("/", ctrlCreateUser);

export { userRouter };