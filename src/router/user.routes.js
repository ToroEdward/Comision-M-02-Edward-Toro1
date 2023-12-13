import { Router } from "express";
import { ctrlCreateUser, ctrlLoginUser } from "../controllers/user.controller.js";
import { body } from "express-validator"

const userRouter = Router();
 
userRouter.get("/", ctrlLoginUser);
userRouter.post("/", ctrlCreateUser);

export { userRouter };