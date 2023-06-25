import { IUser } from "./user.interface";
import UserModel from "./user.model";

// Create a User -> Service
export const createUserService = async (data: IUser): Promise<IUser> => {
  const user = await UserModel.create(data);
  return user;

  /*
  const user = await new User(payload);
  await user.save();
  return user;
  */
};

// Get all of user from the database
export const getAllUsersService = async () => {
  const users = await UserModel.find();
  return users;
};

// Get Single user by Username/id
export const getSingleUserService = async (
  payload: string
): Promise<IUser | null> => {
  const user = await UserModel.findOne({ username: payload });
  return user;
};

// Update Single User by Username/id
export const updateSingleUserService = async (
  payload: string,
  data: IUser
): Promise<IUser | null> => {
  const user = await UserModel.updateOne({ username: payload }, data);
  return user.modifiedCount === 1 ? data : null;
};

// Delete signle User by Username/id
export const deleteSingleUserService = async (
  payload: string
): Promise<boolean> => {
  const user = await UserModel.deleteOne({ username: payload });
  return user.deletedCount === 1 ? true : false;
};
