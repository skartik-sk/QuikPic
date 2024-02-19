import Post from "../../Models/postModel.js";
import UserModel from "../../Models/userModel.js";

export const follow = async (req, res) => {
  try {
    const toFollow = req.params.ids;
    const userId = res.user.id._id.toString();
    if (!toFollow || !userId) {
      return res.status(400).json({ error: "Invalid request" });
    }
    const user = await UserModel.findById(userId);
    const toFollowUser = await UserModel.findById(toFollow);

    // Check if user is already following
    if (user.following.includes(toFollow)) {
      return res.json({ message: "Already following" });
    }

    user.following.push(toFollow);
    toFollowUser.followers.push(userId);
    await user.save();
    await toFollowUser.save();
    res.json({ message: "Followed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
export const unfollow = async (req, res) => {
  try {
    const toUnfollow = req.params.ids;
    const userId = res.user.id._id.toString();
    const user = await UserModel.findById(userId);
    const toUnfollowUser = await UserModel.findById(toUnfollow);
    console.log(user);
    console.log(toUnfollowUser);
    user.following.pull(toUnfollow);
    toUnfollowUser.followers.pull(userId);
    console.log(user);
    console.log(toUnfollowUser);
    await user.save();
    await toUnfollowUser.save();
    res.json({ message: "Unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
  export const getFollowers = async (req, res) => {
    try {
      const userId = res.user.id._id.toString();
      const user = await UserModel.findById(userId);
      const followers = user.followers.filter(follower => !user.following.includes(follower));

      // Fetch data for each follower
      const followerData = await Promise.all(followers.map(async (followerId) => {
        const follower = await UserModel.findById(followerId);
        return {
          id: follower._id,
          name: follower.name,
          photo: follower.profileImage,
          // Add more properties as needed
        };
      }));

      res.json({ followers: followerData });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
