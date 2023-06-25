import express from "express";
import { createUserController } from "./user.controller";
const router = express.Router();

// Add a User
router.post("/create-user", createUserController);

// Get All Users
router.get("/");

export default router;
