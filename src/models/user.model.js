import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 20,
      unique: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
    },
    refreshToken: {
      type: String,
    },
    avatar: {
      type: String, // url
      required: true,
    },
    coverImage: {
      type: String, // url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video", // refers to Video model
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      },
    },
  }
);

// We are encrypting the password before saving it to the database.
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcryptjs.hash(this.password, 10);
  }
  next();
});

// Checking is the password is correct or not.
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcryptjs.compare(password, this.password);
  return result;
};

// Generate access toke
UserSchema.methods.generateAccessToken = function () {
  const accessToken = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
  return accessToken;
};

// Generate refresh token
UserSchema.methods.generateRefreshToken = function () {
  const refreshToken = jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
  return refreshToken;
};

export const User = mongoose.model("User", UserSchema);
