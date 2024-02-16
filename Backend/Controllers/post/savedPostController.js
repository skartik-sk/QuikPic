import UserModel from "../../Models/userModel.js";

// // Save a post
// export const savePost = async (req, res) => {
//   try {
//     const { username, post } = req.body;
//     const savedPost = await UserModel.create({ username, post });
//     res.status(201).json(savedPost);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Retrieve saved posts for a user
// export const getSavedPosts = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const savedPosts = await UserModel.find({ user: userId }).populate('post');
//     res.json(savedPosts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };
export const savePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = res.user.id._id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.savedPosts.includes(postId)) {
      
      user.savedPosts = user.savedPosts.filter((savedPost) => savedPost !== postId);
    } else {
      
      user.savedPosts.push(postId);
    }
    await user.save();
    res.status(200).json({ message: "Post saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getSavedPosts = async (req, res) => {
  try {
    const userId = res.user.id._id;
    const user = await UserModel.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.savedPosts);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }

}