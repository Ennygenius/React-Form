import React from "react";
import bg from "../../assets/feature.jpg";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="shadow-lg w-[80%] md:w-50%] text-center h-[50vh] m-auto flex flex-col justify-evenly items-center p-5">
      <img src={bg} className=" w-24" alt="" />
      <h2 className="text-3xl font-bold">Thank you for Registering </h2>
      <Link to={"/"}> 👈 Go Back</Link>
    </div>
  );
};

export default Thanks;
