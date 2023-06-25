import express from "express";
import {
  createUserController,
  getAllUsersController,
  getSingleUserController,
  deleteSingleUserController,
  updateSingleUserController,
} from "./user.controller";
const router = express.Router();

// Add a User
router.post("/create-user", createUserController);

// Get All Users
router.get("/", getAllUsersController);

// Get Single User By Username/Id
router.get("/:id", getSingleUserController);

// Update Single User By Username/Id
router.patch("/:id", updateSingleUserController);

// Delete Single User By Username/Id
router.delete("/:id", deleteSingleUserController);

export default router;
