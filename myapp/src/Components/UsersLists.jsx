import React from 'react'

const UsersLists = ({users}) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-w ">
          {users.map((user, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg p-4 font-semibold flex flex-col items-center grid-cols-auto"
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
  )
}

export default UsersLists