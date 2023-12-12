import { UserModel } from "./models./User.js";

export const ctrlGetAllUsers = async (_req, res, next) => {
  try {
    if (users.length < 1) {
        return res.sendStatus(204);
    }

    res.status(200).json(users);
  } catch (error) {
    next("No hay users");
  }
}

export const ctrlCreateUser = (req, res, next) => {
    const { name, age } = req.body;

    const newUser = { name, age };

    users.push(newUser);

    res.sendStatus(201);
};