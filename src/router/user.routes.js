import { Router } from "express";
import { ctrlCreateUser, ctrlLoginUser, ctrlUserid } from "../controllers/user.controller.js";
import { createUserValidations, loginUserValidations } from "../models/validations/user-validations.js";

const userRouter = Router();

userRouter.post("/register", createUserValidations, ctrlCreateUser);
 
userRouter.get("/login/:userId", ctrlUserid);
userRouter.post("/login", loginUserValidations, ctrlLoginUser);

export { userRouter };