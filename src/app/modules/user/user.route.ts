import express from "express";
import {
  createUserController,
  getAllUsersController,
  getSingleUserController,
} from "./user.controller";
const router = express.Router();

// Add a User
router.post("/create-user", createUserController);

// Get All Users
router.get("/", getAllUsersController);

// Get Single User By Username/Id
router.get("/:id", getSingleUserController);

export default router;
