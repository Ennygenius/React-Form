import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";

const Details = () => {
  const { id } = useParams();
  const URI = `https://expressglobalformuk.onrender.com/${id}`;

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(URI);
      setData(response.data.msg);
      //   setData(response.data.msg.length);
      console.log(response.data.msg);
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <Nav />
      <div className="mx-10 flex md:flex-row flex-col justify-around">
        <ul className="">
          {data.Image && <img src={data.Image} alt="image-bg" />}
        </ul>
        <div className="">
          <ul>
            <h2 className="text-xl font-bold">Name:</h2>
            <li>{data.name}</li>
          </ul>
          <ul className="my-5">
            <h2 className="text-xl font-bold">Date Of Birth</h2>
            <li>{data.DOB}</li>
          </ul>

          <ul className="my-5">
            <h2 className="text-xl font-bold">Nationality</h2>
            <li>{data.Nationality}</li>
          </ul>

          <ul className="my-5">
            <h2 className="text-xl font-bold">Country</h2>
            <li>{data.Country}</li>
          </ul>

          <ul className="my-5">
            <h2 className="text-xl font-bold">Next of Kin</h2>
            <li>{data.NextOfKin}</li>
          </ul>

          <ul className="my-5">
            <h2 className="text-xl font-bold">Date</h2>
            <li>{data.date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
