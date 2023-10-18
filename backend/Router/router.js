import express from "express";

import {
  getAllUsers,
  createUser,
  singleUser,
  deleteUser,
} from "../controllers/UControllers.js";

const router = express.Router();

// Define other routes
router
  .get("/", getAllUsers)
  .post("/", createUser)
  .get("/:id", singleUser)
  .delete("/:id", deleteUser);

export default router;
