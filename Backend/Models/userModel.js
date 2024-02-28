import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import bcript from "bcrypt";
import jwt from "jsonwebtoken";
configDotenv();
const userSchema = new mongoose.Schema({
  profileImage: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    default: "",
  },
  gender:{
    type:String,
    default:"",
  },
  password: {
    type: String,
    required: true,
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  savedPosts: [
{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
}
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetToken:{
    type:String,
    default: "",
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcript.hash(this.password, 12);
  }
  next();
});

userSchema.methods.Match_Password = async function (password) {
  return bcript.compare(password, this.password);
};

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECREAT_KEY);
    return token;
  } catch (err) {
    console.log(err);
  }
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
