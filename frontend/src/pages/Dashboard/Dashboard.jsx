import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // const URI = "https://expressglobalformuk.onrender.com/";
  const URI = "http://127.0.0.1:2002/";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(URI);
      setLoading(false);
      setData(response.data.user);
      console.log(response.data.user);
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <Nav />

      <div className=" my-5 mx-10">
        <h2 className="text-2xl font-bold">DASHBOARD</h2>
        {loading && <p>Loading.....</p>}
        {!data ? (
          <p>No data Availabe</p>
        ) : (
          data.map((user, index) => (
            <Link to={`/details/${user._id}`} key={user._id}>
              <div className="my-10  hover:shadow-md cursor-pointer border list-none p-4 flex">
                <div className="flex justify-between items-center">
                  {" "}
                  <div>
                    <p>NAME</p>
                    <li className="font-bold">{user.name}</li>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
