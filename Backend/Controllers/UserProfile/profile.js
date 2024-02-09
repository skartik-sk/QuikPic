import UserModel from "../../Models/userModel.js";

// Controller function to get user profile
export const getUserProfile = async (req, res) => {
  try {
    // Retrieve user profile based on the authenticated user's ID
    const userProfile = await UserModel.findOne({ user: req.user._id });
    
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
    const { bio, profileImage, username, email } = req.body;
  
    try {
      let userProfile = await UserModel.findOne({ user: req.user._id });
  
      // If user profile doesn't exist, create a new one
      if (!userProfile) {
        userProfile = new UserModel({
          user: req.user.id,
          username: username || req.user.username, // Use provided username or keep the existing one
          email: email || req.user.email, // Use provided email or keep the existing one
          bio,
          profileImage
        });
      } else {
        // Update profile fields if provided
        if (bio) userProfile.bio = bio;
        if (profileImage) userProfile.profileImage = profileImage;
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