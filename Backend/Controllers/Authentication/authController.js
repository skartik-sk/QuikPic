import User from "../../Models/userModel.js";
import nodemailer from 'nodemailer';
import jwt, { decode } from 'jsonwebtoken';
import UserModel from "../../Models/userModel.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password)
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await user.Match_Password(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = await user.generateAuthToken();
    res
      .status(200)
      .cookie("access_token", token,{ maxAge: 10000000 })
      .json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};



export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();

    const token = await newUser.generateAuthToken();

    res
      .status(201)
      .cookie("access_token", token)
      .json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const logout = (req, res) => {
  res.clearCookie("access_token");

  res.status(200).json({ message: "logout successful" });
};
