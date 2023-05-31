import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true
    },
    blogBody: {
        type: String,
        required: true
    }
  });

export default mongoose.model("Post",postSchema)