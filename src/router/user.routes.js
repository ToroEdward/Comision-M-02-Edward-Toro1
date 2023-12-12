import { Router } from "express";
import { ctrlCreateUser, ctrlGetAllUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", ctrlGetAllUsers);
userRouter.post("/", ctrlCreateUser);

export { userRouter };