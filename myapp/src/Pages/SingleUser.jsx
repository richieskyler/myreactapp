import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../Components/Navbar';
import UsersLists from '../Components/UsersLists';


const SingleUser = () => {
    const [users, setUsers] = useState([]);
    const {id} = useParams()
    const GITHUBTOKEN = process.env.REACT_APP_GITHUB_TOKEN

  const getUser = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${id}`, {headers:{Authorization:GITHUBTOKEN}});
      //https://randomuser.me/api/?results=10${gender === 'all' ? "" : `&gender=${gender}`}
      
      if (response.data.length > 0) {
        setUsers(response.data);
    
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id){
        getUser();
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar/>
      <p><b>Name:</b> {users.login} </p>
      {/* <p><b>Name:</b> {user.login} </p>
      <p><b>Email:</b> {user.login} </p>
      <p><b>Followers:</b> {user.login} </p>
      <p><b>Comapny:</b> {user.login} </p> */}
      <UsersLists users={users}/>
    </div>
  );
}

export default SingleUser