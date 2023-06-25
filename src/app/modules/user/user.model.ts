import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userSchema = new Schema<IUser>(
  {
    name: {
      firstName: { type: String, required: [true, "Fisrt Name is required"] },
      lastName: { type: String, required: [true, "last Name is required"] },
    },

    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      match: [
        passwordRegex,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character and minimum length of 8 characters",
      ],
    },

    role: { type: String },

    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["male", "female"],
    },

    dateOfBirth: {
      type: String,
      required: false,
    },

    contact: {
      type: Number,
      required: [true, "Contact Number is required"],
    },
  },
  { timestamps: true }
);

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
