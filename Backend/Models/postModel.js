import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  comments: [
    {
      comment: {
        type: String,
       
      },
      commenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    
      },
    },
  ],
  caption: {
    type: String,
    required: true,
  },
  likes: [
    {
     
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
       
     
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
