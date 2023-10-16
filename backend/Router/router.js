import express from "express";
import {
  getAllUsers as getAllUsers,
  createUser as createUser,
  singleUser as singleUser,
  deleteUser as deleteUser,
} from "../controllers/UControllers.js";

const router = express();

router
  .get("/", getAllUsers)
  .post("/", createUser)
  .get("/:id", singleUser)
  .delete("/:id", deleteUser);

export default router;
