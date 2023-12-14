import { Router } from "express";
import { ctrlCreateUser, ctrlLoginUser, ctrlUserid } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", createLoginSchema, loginValidatorPost, ctrlCreateUser);
 
userRouter.get("/login/:userId", ctrlUserid);
userRouter.post("/login", LoginSchema, loginValidatorPost, ctrlLoginUser);

export { userRouter };