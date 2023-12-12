import { UserModel } from "../models/User.js";

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

export const ctrlCreateUser = async (req, res, next) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "couldn't create user"});
  }
};