import React from 'react'

const UserForm = ({ 
 handleSubmit, 
 name, 
 setName, 
 age, 
 setAge, 
 description, 
 setDescription 
}) => {
 return (
  <form onSubmit={handleSubmit} className='form-group border-2 border-gray-300 rounded-lg p-6 bg-gray-50 max-w-md mx-auto shadow-md'>
  <div className='flex flex-col gap-1 mb-4'>
    <label htmlFor='name'>Name</label>
    <input 
      name='name'
      type='text'
      placeholder='Enter your name'
      value={name}
      className='border border-black rounded px-3 py-2'
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div className='flex flex-col gap-1 mb-4'>
    <label htmlFor='age'>Age</label>
    <input
      name='age'
      type='number'
      placeholder='Enter your age' 
      value={age}
      className='border border-black rounded px-3 py-2'
      onChange={(e) => setAge(e.target.value)}
    />
  </div>

  <div className='flex flex-col gap-1 mb-4'>
    <label htmlFor='description'>Description</label>
    <textarea
      name='description'
      rows={5}
      value={description}
      className='border border-black rounded px-3 py-2'
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>

  <button className='btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors' type="submit">Submit</button>
</form>
 )
}

export default UserForm