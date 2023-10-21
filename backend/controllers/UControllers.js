import asynchandler from "express-async-handler";
import User from "../models/uModels.js";
import { v2 as cloudinary } from "cloudinary";

const getAllUsers = asynchandler(async (req, res) => {
  const user = await User.find({});
  res.json({ user: user });
});

const createUser = asynchandler(async (req, res) => {
  const { name, DOB, Nationality, Address, Country, date } = req.body;

  // Upload the image to Cloudinary

  const result = await cloudinary.uploader.upload(req.file.path);

  const user = await User.create({
    name,
    DOB,
    Nationality,
    Address,
    Country,
    Image: result.secure_url, // Use the Image variable here
    date,
  });

  console.log(req.file, req.body);
  res.json({ user: user });
});

const singleUser = asynchandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ msg: user });
});

const deleteUser = asynchandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "successfully deleted" });
});

export {
  getAllUsers as getAllUsers,
  createUser as createUser,
  singleUser as singleUser,
  deleteUser as deleteUser,
};
