import e from "express";
import UserModel from "../../Models/userModel.js";
import Post from "../../Models/postModel.js";
import cloudinary from "../../Utils/coudney.js";

// Controller function to get user profile
export const getUserProfile = async (req, res) => {
  try {
    // if(res.statusCode === 401){
      
    //   return res.status(404).json({ msg: 'User not found' });
     
    // }
    const userProfile = await UserModel.findById( res.user.id._id );
    
    if (!userProfile) {
      return res.status(404).json({ msg: 'User profile not found' });
    } 
    
    res.status(200).json(userProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function to update user profile
export const updateUserProfile = async (req, res) => { 
    const { bio,gender, username, email } = req.body;
    
    //Cloudinary for uploading file
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    if (!result || result.error) {
      throw new Error("Failed to upload the image");
    }

    try {
      let userProfile = await UserModel.findById( res.user.id._id );
console.log(userProfile)
      // If user profile doesn't exist, create a new one
      if (!userProfile) {
        return res.status(404).json({ msg: 'User profile not found' });
      }
       else {        
        // Update profile fields if provided

        if (bio) userProfile.bio = bio;
        if (gender) userProfile.gender = gender;
        if (req.file.path) 
        {
          userProfile.profileImage = result.secure_url;
        }
        if (username) userProfile.username = username;
        if (email) userProfile.email = email;
      }
      
      await userProfile.save();
      console.log(userProfile)
      res.json(userProfile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

// Controller function to delete user profile
export const deleteUserProfile = async (req, res) => {
    try {
      const user = await UserModel.findById(res.user.id._id);
      const userId = user._id;
      const followers = user.followers;
      console.log(followers)
      const following = user.following;
      console.log(following)
      const posts = user.post;
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
     

      //deleting all posts of the user
      for (let i = 0; i < posts.length; i++) {
        const post = await Post.findById(posts[i]);
        await Post.deleteOne(post);
      }
      
      //removing user from followers following
      for (let i = 0; i < followers.length; i++) {
        const followerprofile = await UserModel.findById(followers[i]);
        const index = followerprofile.following.indexOf(userId);
        await followerprofile.following.splice(index, 1)

        await followerprofile.save();
      }

      //removing user from followers following
      for (let i = 0; i < following.length; i++) {
        const followsprofile = await UserModel.findById(following[i]);
        const index = followsprofile.followers.indexOf(userId);
        await followsprofile.followers.splice(index, 1)

        await followsprofile.save();
      }
      await user.deleteOne(user);
      res.status(200).cookie("token",null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      }).json({
        success: true,
      })
    }
    catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
};

