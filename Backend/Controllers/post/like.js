import Post from "../../Models/postModel.js";

export const addLikeToPost = async (req, res) => {
  try {
    const userId = res.user.id._id.toString();
    const postId = req.params.id;

    const post = await Post.findById(postId);

    console.log(post)
    const existingLike = post.likes.find((likes) => likes == userId);
console.log(existingLike)
    if (existingLike) {
      post.likes = post.likes.filter((likes) => likes != userId);

      const updatedPost = await post.save();

      return  res.status(200).json(updatedPost);
          }

    post.likes.push( userId );
console.log(userId)
    const updatedPost = await post.save();

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to add like to post" });
  }
};

// export const unLikeToPost = async (req, res) => {
//     try {
//         const userId = res.user.id._id.toString();
//         const postId = req.params.id;

//         const post = await Post.findById(postId);

//         const existingLike = post.likes.find((likes) => likes.liker == userId);
//         if (!existingLike) {
//             return res.status(400).json({ error: "User has not liked this post" });
//         }

//         post.likes = post.likes.filter((likes) => likes.liker != userId);

//         const updatedPost = await post.save();

//         res.status(200).json(updatedPost);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to remove like from post" });
//     }
// };
