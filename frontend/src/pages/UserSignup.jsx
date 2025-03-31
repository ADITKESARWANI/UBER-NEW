import React from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { UserContext } from "../context/UserContext"


    const UserSignup = async () => {     //yaha pr async laga hua h 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();


    
    
    const [user, setUser] = React.useContext(UserContext)

    
    
      
    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname:{
            firstname: FirstName,
            lastname: LastName
        },
        email: email,
        password: password}
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if (response.status === 201) {
            const data = response.data;
            setUserData(data.user);
            localStorage.setItem('token', data.token)
            navigate('/home')
        }


        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');

        return (
            <div>
                <div className ="p-7 flex flex-col justify-between h-screen ">
                <div>
                <img className ="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />
    
    <form onSubmit={(e) => {
        submitHandler(e)
    }}>
    
    <h3 clasasName='text-lg font-medium mb-2'>What's your Name</h3>
    <div clasasName='flex gap-4 mb-6'>
    <input 
            required
            clasasName='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
            required
            clasasName='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
    </div>
    
        <h3 clasasName='text-lg font-medium mb-2'>What's your email</h3>
        <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            clasasName='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder="email@example.com"
        />
    
        <h3 clasasName='text-lg font-medium mb-2'>Enter password</h3>
    
        <input
        clasasName='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         required type="password" 
         placeholder="Password" 
        />
        <button 
          clasasName='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '
        >Create Account </button>
    
        <p clasasName='text-center'>Already have an account? <Link to='/login' clasasName='text-blue-600'>Login here</Link></p>
    </form>
                </div>
                <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span clasasName='underline'>Google Privacy Policy</span> and <span clasasName='underline'>Terms of Service</span> apply.</p>
                </div>
               </div> 
            </div>
        );
    }
   
export default UserSignup