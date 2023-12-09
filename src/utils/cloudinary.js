import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    S;
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    console.log("File has been uploaded to Cloudinary" + response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(filePath); // remove the locally saved file temporary file as the upload to cloudinary failedS
    return null;
  }
};

export default uploadOnCloudinary;
