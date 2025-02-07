

import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../Navbar';
import Loadingimg from './components/loadingimg' 

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api/");
      if (response.data.results.length > 0) {
        setUsers(response.data.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      {loading ? ( 
        <Loadingimg />
      ) : (
        <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1000px]">
          {users.map((user, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg p-4 font-semibold flex flex-col items-center"
            >
              <img
                src={user.picture.medium}
                className="w-[100px] rounded-full mb-4"
                alt={`${user.name.first} ${user.name.last}`}
              />
              <div className="space-y-2 w-full">
                <p><b>Name:</b> {user.name.title} {user.name.first} {user.name.last}</p>
                <p><b>Gender:</b> {user.gender}</p>
                <p><b>Age:</b> {user.dob.age}</p>
                <p><b>Email:</b> {user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;














