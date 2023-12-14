import { UserModel } from "../models/User.js";
import { createJWT } from "../utils/jwt.js";


export const ctrlCreateUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "couldn't create user" });
  }
};

export const ctrlLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if(!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = await createJWT({ userId: user._id });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "couldn't login user" });
  }
};

export const ctrlUserid =async (req, res) => {
  const { userId } = req.params;

  try {
    const postlist = await UserModel.findOne({
      _id: userId,
    });
    return res.status(200).json(postlist);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};