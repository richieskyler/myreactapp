// SingleUser.js
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../Components/Navbar';

const SingleUser = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams()
    const GITHUBTOKEN = process.env.REACT_APP_GITHUB_TOKEN

    

  const getUser = async () => {

    

    try {
      const response = await axios.get(
        `https://api.github.com/users/${id}`, 
        {
          headers: {
            Authorization: ` ${GITHUBTOKEN}`
          }
        }
      );
      
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id]);

  if (!user) return <div>Loading...</div>

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar/>
      <div className="p-4">
        <img
          src={user.avatar_url}
          className="w-[200px] rounded-full mb-4"
          alt={user.login}
        />
        <p><b>Username:</b> {user.login}</p>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Followers:</b> {user.followers}</p>
        <p><b>Following:</b> {user.following}</p>
        <p><b>Public Repos:</b> {user.public_repos}</p>
        <p><b>Company:</b> {user.company}</p>
        <p><b>Location:</b> {user.location}</p>
        
      </div>
    </div>
  );
}

export default SingleUser