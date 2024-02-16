import UserModel from "../../Models/userModel.js";

// Save a post
export const savePost = async (req, res) => {
  try {
    const { username, post } = req.body;
    const savedPost = await UserModel.create({ username, post });
    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Retrieve saved posts for a user
export const getSavedPosts = async (req, res) => {
  try {
    const userId = req.params.id;
    const savedPosts = await UserModel.find({ user: userId }).populate('post');
    res.json(savedPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
