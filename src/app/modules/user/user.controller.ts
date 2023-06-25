import { NextFunction, Request, Response } from "express";
import { createUserService } from "./user.service";

// Create a User -> Controller
export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Take the data from the request body
    const data = req.body;

    // Create a user in the database -> Service
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
