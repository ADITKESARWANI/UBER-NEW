import React, { useState,useContext } from "react"
import { Link } from "react-router-dom"
import { UserDataContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const UserLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userData,setUserData] = useState({})

    const {user, setUser} = useContext(UserDataContext)
    const navigate = useNavigate()


    
    const submitHandler = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token)
        navigate('/home')
    }

        setEmail('')
        setPassword('')
}
    return (
        <div className='p-7 flex flex-col justify-between h-screen '>
            <div>
            <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />

<form onSubmit={(e) => {
    submitHandler(e)
}}>
    <h3 clasasName='text-lg font-medium mb-2'>What's your Email</h3>
    <input 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        clasasName='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email"
        placeholder="email@example.com"
    />

    <h3 clasasName='text-lg font-medium mb-2'>Enter password</h3>

    <input
    clasasName='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
     required type="password" 
     placeholder="Password" 
    />
    <button 
      clasasName='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '
    >Login</button>

    <p clasasName='text-center'>New to Uber? <Link to='/signup' clasasName='text-blue-600'>Create New Account </Link></p>
</form>
            </div>
            <div>
            <Link
            to='/captain-login'
              clasasName='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base '
            >Signin as Captain </Link>
            </div>
        </div>
    )
}

export default UserLogin;