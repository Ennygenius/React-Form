import asynchandler from "express-async-handler";
import User from "../models/uModels.js";

const getAllUsers = asynchandler(async (req, res) => {
  const user = await User.find({});
  res.json({ user: user });
});

const createUser = asynchandler(async (req, res) => {
  const { name, DOB, Nationality, Address, Country, date, Image } = req.body;
  console.log(req.body);
  const user = await User.create({
    name,
    DOB,
    Nationality,
    Address,
    Country,
    Image,
    date,
  });

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
