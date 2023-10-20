import React from "react";
import bg from "../assets/feature.jpg";
import LanguageSelector from "./LanguageSelector";

const Nav = () => {
  return (
    <nav className=" py-3 px-5 border mb-5 sticky top-0 bg-white">
      <h2 className="font-bold md:text-3xl text-2xl my-5 mx-3 uppercase md:text-left text-center">
        <img src={bg} alt="" className="md:hidden w-[20%] m-auto" />
        Express Global Delivery
      </h2>
      {/* <LanguageSelector /> */}
    </nav>
  );
};

export default Nav;
