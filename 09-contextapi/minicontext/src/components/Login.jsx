import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


export default function Login() {
    const [username, setUsername] = useState('robinson')
    const [password, setPassword] = useState('')

    const {setUser } = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2>login</h2>
      <input type="text" placeholder='Username: '
      value={username}
      onChange={(e)=>setUsername(e.target.value)} />
      {""}
      <br />
      <input type="password" placeholder='Password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}
