import React, { useState } from 'react'
import Usercard from './Components/atoms/UserCard';
import UserForm from './Components/UserForm';



const Blog = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [description, setDescription] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    }

    return (
    <div className='flex p-8 items-center justify-center h-screen w-full'>
        <div className='w-full sm:w-[70%] md:w-[65%] lg:w-[50%] xl:w-[45%] zxl:w-[40%]'>
        {formSubmitted === false ? 
        <UserForm handleSubmit={handleSubmit} name={name} setName={setName} age={age} setAge={setAge} description={description} setDescription={setDescription} />
        :
        <Usercard userName={name} userAge={age} userDescrption={description}/>
        }
        </div>
        
    </div>
  )
}

export default Blog





