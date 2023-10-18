import React from "react";
import bg from "../assets/feature.jpg";

const Nav = () => {
  return (
    <nav className=" py-3 px-5 border mb-5 sticky top-0 bg-white">
      <h2 className="font-bold md:text-3xl text-2xl my-5 mx-3 text-red-700 uppercase md:text-left text-center">
        <img src={bg} alt="" className="md:hidden w-[20%] m-auto" />
        Express Global Delivery UK
      </h2>
    </nav>
  );
};

export default Nav;
