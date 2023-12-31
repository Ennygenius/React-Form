import mongoose from "mongoose";

const USchema = new mongoose.Schema(
  {
    name: {
      type: String, 
      required: [true, "Please the name fields is required"],
    },
    DOB: {
      type: Date,
      required: [true, "Please the DOB fields is required"],
    },
    Nationality: {
      type: String,
      required: [true, "Please the nationality fields is required"],
    },
    Address: {
      type: String,
      required: [true, "Please the Address fields is required"],
    },
    Country: {
      type: String,
      required: [true, "Please the Country fields is required"],
    },
    NextOfKin: {
      type: String,
      required: [true, "Please the NextOfKin fields is required"],
    },
    Image: {
      type: String,
      required: [true, "Please the Image fields is required"],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", USchema);
export default User;
