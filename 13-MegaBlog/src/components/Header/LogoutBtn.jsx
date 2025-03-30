import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'



function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout.then(()=>{
            dispatch(logout())
        })
    }
  return (
    <div>
      <button
      onClick={logoutHandler}
      className='bg-gray-300 text-cyan-950 font-mono px-6 py-2 rounded-3xl hover:bg-orange-400 '
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutBtn
