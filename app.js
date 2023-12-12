import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { userRouter } from "./src/router/user.routes.js";

const app = express();

// Midlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.use("/users", userRouter);

const port = 3001;

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port} `)
});