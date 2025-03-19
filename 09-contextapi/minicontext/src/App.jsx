// import { useState } from 'react'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'


function App() {

  return (
    <>
    <UserContextProvider >
    <h1>This is a user context provider</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
