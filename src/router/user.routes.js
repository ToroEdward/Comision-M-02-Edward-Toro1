import { Router } from "express";
import { ctrlCreateUser, ctrlGetAllUsers } from "../controllers/user.controller.js";

const userRouter = Router();

app.get("/", ctrlGetAllUsers)
app.post("/", ctrlCreateUser)

export { userRouter };