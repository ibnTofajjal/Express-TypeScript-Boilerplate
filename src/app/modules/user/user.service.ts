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
