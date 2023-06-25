import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userSchema = new Schema<IUser>({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },

  username: { type: String, required: true, unique: true },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    match: [
      passwordRegex,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character and minimum length of 8 characters",
    ],
  },

  role: { type: String },

  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },

  dateOfBirth: {
    type: String,
    required: false,
  },

  contact: {
    type: Number,
    required: true,
  },
});

const User = model<IUser>("User", userSchema);

export default User;
