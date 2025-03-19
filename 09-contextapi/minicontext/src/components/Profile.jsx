
import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
function Profile() {
    const user = useContext(UserContext)

  return (
    <div>
      <h1>This is a profile page and this is good </h1>
      <div>
        {!user?(
            <div>Please Login to Continue </div>
        ):(
            <p>Welcome User {user.username} to the page of Anirban </p>
        )}
      </div>
    </div>
  )
}

export default Profile
