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

// Get Single user by Usernam/id
export const getSingleUserService = async (
  payload: string
): Promise<IUser | null> => {
  const user = await UserModel.findOne({ username: payload });
  return user;
};
