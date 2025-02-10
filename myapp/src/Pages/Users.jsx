

import React, { useEffect, useState } from 'react';
import axios from "axios";
import LoadingImages from '../Components/LoadingImages';
import Navbar from '../Components/Navbar';
import UsersLists from '../Components/UsersLists';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState('');
  const handleChange = (e) =>{setGender(e.target.value)}
  const GITHUBTOKEN = process.env.REACT_APP_GITHUB_TOKEN
  

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users`, {headers:{Authorization:`bearer ${GITHUBTOKEN}`}});
      //https://randomuser.me/api/?results=10${gender === 'all' ? "" : `&gender=${gender}`}
      console.log(response.data)
      if (response.data.length > 0) {
        console.log(response.data)
        setUsers(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [gender]);

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar/>
      <select onChange={handleChange} className='w-fit my-5 border p-3 rounded-lg'>
        <option value='all'>All Users</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>
      {loading ? ( 
        <LoadingImages/>
      ) : (
        
        <UsersLists users={users}/>
      )}
    </div>
  );
};

export default Users;














