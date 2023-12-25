import cloudinary from "../../Utils/coudney.js";
import postModel from "../../Models/postModel.js";
import UserModel from "../../Models/userModel.js";


export const posting = async (req, res) => {
    try {
        const { caption } = req.body;
        const result = await cloudinary.v2.uploader.upload(req.file.path);

        if (!result || result.error) {
            throw new Error('Failed to upload the image');
        }
        console.log(res.user.id._id)
        const newPost = new postModel({
            image: result.secure_url,
            caption: caption,
            createdBy: res.user.id._id,
        });

        // Save the new post to the database
        const savedPost = await newPost.save();
        if (savedPost) {
            await UserModel.findByIdAndUpdate(res.user.id._id, {
                $push: { post: savedPost._id }
            }, { new: true, useFindAndModify: false });
        
            res.status(200).json(savedPost);
        } else {
            throw new Error('Failed to save the post');
        }
    } catch (error) {
        res.status(500).json({ error: error.message || 'Failed to save the post' });
    }
}




