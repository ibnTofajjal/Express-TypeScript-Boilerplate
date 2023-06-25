import { NextFunction, Request, Response } from "express";
import {
  createUserService,
  getAllUsersService,
  getSingleUserService,
} from "./user.service";
import { IUser } from "./user.interface";

// Create a User -> Controller
export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Take the data from the request body
    const data = req.body;

    // Call Create User Service ->
    const user = await createUserService(data);

    // Send the response
    res.status(201).json({
      message: "User created successfully",
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
      data: error,
    });
  }
  // Call the next function
  next();
};

// Get All Users -> Controller
export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Call Get Users Service ->
    const users = await getAllUsersService();

    res.status(200).json({
      message: "Here is all Users",
      status: "success",
      data: users,
    });
  } catch (error) {
    res.status(504).json({
      message: "Something Went Wrong",
      status: "failed",
      data: error,
    });
  }
};

// get Single User -> Controller
export const getSingleUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get id from param -> url
    const id = req.params.id;

    // call get signle user servie
    const user = await getSingleUserService(id);

    res.status(200).json({
      message: `Here is the details of: ${user?.name.firstName}`,
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something Went Wrong",
      status: "failed",
      data: error,
    });
  }

  next();
};
