import cloudinary from "../../Utils/coudney.js";
import postModel from "../../Models/postModel.js";
import UserModel from "../../Models/userModel.js";
import Post from "../../Models/postModel.js";
import e from "express";

export const posting = async (req, res) => {
  try {
    const { caption } = req.body;
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    if (!result || result.error) {
      throw new Error("Failed to upload the image");
    }
    const newPost = new postModel({ 
      image: result.secure_url,
      caption: caption,
      createdBy: res.user.id._id,
    });

    // Save the new post to the database
    const savedPost = await newPost.save();
    if (savedPost) {
      await UserModel.findByIdAndUpdate(
        res.user.id._id,
        {
          $push: { post: savedPost._id },
        },
        { new: true, useFindAndModify: false }
      );

      res.status(200).json(savedPost);
    } else {
      throw new Error("Failed to save the post");
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to save the post" });
  }
};
export const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    // Code to fetch a post with the specified ID
  const post = await Post.findById(postId)
    .populate('createdBy', 'username profileImage bio followers following')
    .populate({
      path: 'comments',
      populate: {
        path: 'commenter',
        select: 'username profileImage bio followers following',
      },
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getAllPosts = async (req, res) => {
  try {
    // Code to fetch all posts
  
    const populatedPosts = await Post.find().populate('createdBy', 'username profileImage bio followers following');
    
    res.json(populatedPosts);

  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const  caption  = req.body;
    const postId = req.params.id;

    const postData = await Post.findById(postId);
    
    if (res.user.id._id.toString() !== postData.createdBy._id.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $set: { caption: caption },
      },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const postData = await Post.findById(postId);
        if (res.user.id._id.toString() !== postData.createdBy._id.toString()) {
            return res.status(403).json({ error: "Unauthorized" });
        }

        const deletedPost = await Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        
        await UserModel.findByIdAndUpdate(
            res.user.id._id,
            {
                $pull: { post: postId },
            },
            { new: true, useFindAndModify: false }
        );
        
        await UserModel.updateMany(
          {},
          {
              $pull: { savedPosts: postId },
          },
          { new: true, useFindAndModify: false }
      );

        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal server error"});
    }
};
export const getUserPost = async (req, res) => {
  try {
    const userId = res.user.id._id;
    const user = await UserModel.findById(userId)
      .populate({
        path: 'post',
        populate: {
          path: 'createdBy',
          select: 'username profileImage bio followers following',
        },
      })
      .populate({
        path: 'savedPosts',
        populate: {
          path: 'createdBy',
          select: 'username profileImage bio followers following',
        },
      });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    
    }
    res.json(user);
  }
    catch (error) {
      res.status(500).json({ error: error.message || "Internal server error" });
    }
};
