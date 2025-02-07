

import React, { useEffect, useState } from 'react';
import axios from "axios";
import LoadingImages from '../Components/LoadingImages';
import Navbar from '../Components/Navbar';
import UsersLists from '../Components/UsersLists';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
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
      <Navbar/>
      {loading ? ( 
        <LoadingImages/>
      ) : (
        <UsersLists users={users}/>
      )}
    </div>
  );
};

export default Users;














