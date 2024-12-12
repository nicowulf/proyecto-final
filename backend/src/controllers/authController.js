import authModel from "../models/authModel.js";
import jwt from "jsonwebtoken";

process.loadEnvFile();

const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({ error: "Bad request, missing data" });
    }

    const newUser = await authModel.register({ username, password, email });
    if (newUser === null) {
      return res.status(400).json({ error: "User already exists, take another" });
    }

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Both fields required" });
    }

    const user = await authModel.login({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    ); 

    return res.status(200).json({
      message: "Login successfully",
      user: { id: user._id, username: user.username },
      token,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export { register, login };
