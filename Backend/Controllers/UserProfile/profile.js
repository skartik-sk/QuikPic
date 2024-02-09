import UserModel from "../../Models/userModel.js";
import cloudinary from "../../Utils/coudney.js";

// Controller function to get user profile
export const getUserProfile = async (req, res) => {
  try {
    // Retrieve user profile based on the authenticated user's ID
    const userProfile = await UserModel.findOne({ user: res.user._id });
    
    if (!userProfile) {
      return res.status(404).json({ msg: 'User profile not found' });
    }
    
    res.json(userProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function to update user profile
export const updateUserProfile = async (req, res) => { 
    const { bio, username, email } = req.body;
    console.log(bio, username, email, req.file.path)
  const result = await cloudinary.v2.uploader.upload(req.file.path);
    if (!result || result.error) {
      throw new Error("Failed to upload the image");
    }
    try {
      let userProfile = await UserModel.findOne({ user: res.user._id });
      // If user profile doesn't exist, create a new one
      if (!userProfile) {
        return res.status(404).json({ msg: 'User profile not found' });
      }
       else {
        
        // Update profile fields if provided
        if (bio) userProfile.bio = bio;
        if (req.file.path) 
        {

          userProfile.profileImage = result.secure_url;
        }
        if (username) userProfile.username = username;
        if (email) userProfile.email = email;
      }
  
      await userProfile.save();
      res.json(userProfile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };