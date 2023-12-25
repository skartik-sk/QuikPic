import Post from "../../Models/postModel.js";
import UserModel from "../../Models/userModel.js";

export const getPost = async (req, res) => {
  try {
   
    const userId = res.user.id._id.toString();
    const user = await UserModel.findById(userId);
    const following = user.following;
    const posts = await Post.find({ createdBy: { $in: following } });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
