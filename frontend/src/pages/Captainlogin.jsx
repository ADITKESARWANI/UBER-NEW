import React,{ useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { CaptainDataContext } from "../context/CaptainContext"

const Captainlogin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

const { captain, setCaptain } = React.useContext(CaptainDataContext)
const navigate = useNavigate()
   


const submitHandler = async (e) => {
        e.preventDefault();
       const captain = {
            email: email,
            password
       }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

        if (response.status === 200) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail('')
        setPassword('')
}
    return (
        <div className='p-7 flex flex-col justify-between h-screen '>
            <div>
            <img className="w-20 mb-2" src="https://play-lh.googleusercontent.com/bXVEomXNViejYGr4Je5Ed4J08q8G00FUPYCdgoiPNF-2XAqWMYAGCBrK-n0OMYI3OALZ" />

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

    <p clasasName='text-center'>Join a Fleet? <Link to='/captain-signup' clasasName='text-blue-600'>Register asa Captain</Link></p>
</form>
            </div>
            <div>
            <Link
            to='/login'
              clasasName='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base '
            >Signin as User </Link>
            </div>
        </div>
    )
}
export default Captainlogin;