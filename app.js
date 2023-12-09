import express from "express";
import { ctrlGetAllPost, ctrlCreatePost } from "./src/controllers/user.controller.js";

const app = express();

// Midlewares

app.use(express.json());

app.get("/posts", ctrlGetAllPost)
app.post("/posts", ctrlCreatePost)

const port = 3001;

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port} `)
});