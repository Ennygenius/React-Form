import express from "express";

import {
  getAllUsers,
  createUser,
  singleUser,
  deleteUser,
} from "../controllers/UControllers.js";
import storage from "../cloudinary.js";
import multer from "multer";
const upload = multer({ storage: storage });

const router = express.Router();

// Define other routes
router
  .get("/", getAllUsers)
  .post("/", upload.single("Image"), createUser)
  .get("/:id", singleUser)
  .delete("/:id", deleteUser);

export default router;
