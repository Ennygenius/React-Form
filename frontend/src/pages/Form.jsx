import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Form = () => {
  const URI = "http://127.0.0.1:2002/";
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [Nationality, setNationality] = useState("");
  const [Address, setAddress] = useState("");
  const [DOB, setDOB] = useState("");
  const [Country, setCountry] = useState("");
  const [NextOfKin, setNextOfKin] = useState("");
  const [Image, setImage] = useState(null);
  const [date, setdate] = useState(null);

  useEffect(() => {}, []);
  const createUser = async () => {
    const req = await axios.post(URI, {
      name: name,
      Nationality: Nationality,
      Address: Address,
      Country: Country,
      DOB: DOB,
      NextOfKin: NextOfKin,
      Image: Image,
      date: date,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (createUser) {
      createUser();
      alert("User created successfully");
      navigate("/");
    }
  };
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <Nav />
      <form
        className=" w-[90%] md:w-[70%] m-auto border shadow-lg p-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center my-5 text-3xl font-bold underline">
          Application Form
        </h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Nationality
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Kenya"
              onChange={(e) => {
                setNationality(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Address
            </label>

            <textarea
              name=""
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              cols="30"
              rows="10"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Country
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              DOB
            </label>
            <div className="relative">
              <input
                required
                type="date"
                name=""
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => {
                  setDOB(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Next of Kin
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="next of kin"
              onChange={(e) => {
                setNextOfKin(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between -mx-3 mb-2 md:mt-5 pt-5">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="fileInput"
            >
              Image
            </label>

            <input
              required
              type="file"
              // accept="/image"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="fileInput"
              src=""
              alt=""
              onChange={handleFileChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Date
            </label>
            <div className="relative">
              <input
                required
                type="date"
                name=""
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
            </div>
          </div>{" "}
        </div>{" "}
        <div className="">
          <input
            type="Submit"
            value={"submit"}
            className="bg-gray-700 text-white py-3 px-10 text-md my-2 rounded cursor-pointer"
          />
        </div>
        {/* official use */}
        <div className="py-5 my-10">
          <h2 className="font-bold text-2xl text-gray-700">
            FOR OFFICIAL USE ONLY
          </h2>

          <div className="flex flex-wrap -mx-3 mb-6  my-10">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Approved By
              </label>
              <input
                disabled
                className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Checking Officer
              </label>
              <input
                disabled
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Joe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Signature
              </label>
              <input
                disabled
                type="file"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                src=""
                alt=""
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Date
              </label>
              <div className="relative">
                <input
                  disabled
                  type="date"
                  name=""
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Signature
              </label>
              <input
                disabled
                type="file"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
