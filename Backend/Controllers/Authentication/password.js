import User from "../../Models/userModel.js";
import nodemailer from 'nodemailer';
import jwt, { decode } from 'jsonwebtoken';
import UserModel from "../../Models/userModel.js";
import bcrypt from "bcrypt";

export const forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Generate a reset token
      const token = jwt.sign({ _id: user._id }, process.env.SECREAT_KEY, { expiresIn: '2d' });
  
      // Send the reset token to the user's email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      });
  
      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: 'Password Reset Link',
        html: `<p>Please click this <a href="https://main--quikpikweb.netlify.app/resetPassword/${user._id}/${token}">link</a> to reset your password.</p>`
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ message: "Failed to send reset email" });
        } else {
          user.resetToken = token;
          user.save();
          return res.status(200).json({ message: "Reset email sent successfully" });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  export const resetPassword = async (req, res) => {
    try {
      const id = req.params.id;
      const token = req.params.token;
      const { password } = req.body;
      // Verify token
    //   const userId = await jwt.decode(token, process.env.SECRET_KEY) 
      const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
            }

        if (user.resetToken !== token) {
          return res.status(400).json({ message: 'Error with token' });
        } else {
          // Hash new password
          const hashedPassword = await bcrypt.hash(password, 10);
  
          // Update user's password in the database
          await UserModel.findByIdAndUpdate({ _id: id }, { password: hashedPassword });
  
          return res.status(200).json({ message: 'Password reset successfully' });
     
      };
    } catch (error) {
      console.error('Error resetting password:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };