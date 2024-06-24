import React, { useState } from 'react'
import { useAuth } from '../context/Authorization-context'
import toast from 'react-hot-toast';
import Login from './Login';

function Logout() {
  
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
         setAuthUser({
            ...authUser,
            user: null,
         })
         localStorage.removeItem("Users");
         setAuthUser(null)
         toast.success("LogedOut successfully...")
    }

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
