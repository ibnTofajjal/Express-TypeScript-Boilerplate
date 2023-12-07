import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema = new Schema(
  {
    videoFile: {
      type: String, // url
      required: true,
    },
    thumbnail: {
      type: String, // url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      ddefault: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User", // refers to User model
    },
  },
  {
    timestamps: true,
  }
);

VideoSchema.plugin(mongooseAggregatePaginate); // enable pagination
export const Video = mongoose.model("Video", VideoSchema);
