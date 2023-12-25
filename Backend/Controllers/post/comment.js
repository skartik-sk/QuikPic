// Import the Post model
import Post from "../../Models/postModel.js";

// Define the comment function
export const addComment = async (req, res) => {
  const { comment } = req.body;
  const postId = req.params.id;
  const userId = res.user.id._id.toString();

  try {
    const post = await Post.findById(postId);
    post.comments.push({ comment: comment, commenter: userId });

    await post.save();

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add comment" });
  }
};
export const deleteComment = async (req, res) => {
  const commentId = req.params.commentId;
  const userId = res.user.id._id.toString();

  try {
    const post = await Post.findById(req.params.id);
    if (commentId) {
      post.comments.pull({ _id: commentId });
      await post.save();
      res.status(200).json({ message: "Comment deleted successfully" });
    } else {
      res
        .status(404)
        .json({
          error: "Comment not found or you are not authorized to delete it",
        });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete comment" });
  }
};
