import React from "react";
import { Link } from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');

    const [vehicalColor, setVehicalColor] = useState('');
    const [vehicalPlate, setVehicalPlate] = useState('');
    const [vehicalCapacity, setVehicalCapacity] = useState('');
    const [vehicalType, setVehicalType] = useState('');

   
    const [captain, setCaptain] = React.useContext(captainDataContext)

    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname:{
                firstname: FirstName,
                lastname: LastName
            },
            email: email,
            password: password,
            vehical: {
                color: vehicalColor,
                plate: vehicalPlate,
                capacity: vehicalCapacity,
                vehicaltype: vehicalType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicalColor('');
        setVehicalPlate('');
        setVehicalCapacity('');
        setVehicalType('');
    }

    return (
        <div>
                    <div className='py-5 px-5 flex flex-col justify-between h-screen '>
                    <div>
                    <img className="w-20 mb-2" src="https://play-lh.googleusercontent.com/bXVEomXNViejYGr4Je5Ed4J08q8G00FUPYCdgoiPNF-2XAqWMYAGCBrK-n0OMYI3OALZ" />
        
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
        
        <h3 clasasName='text-lg w-full font-medium mb-2'>What's Our Captain's Name</h3>
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
        
            <h3 clasasName='text-lg font-medium mb-2'>What's Our Captain's email</h3>
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

            <h3 clasasName='text-lg font-medium mb-2'>Vehical Details</h3>

            <div clasasName='flex gap-4 mb-6'>
                <input 
                    required
                    clasasName='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                    type="text"
                    placeholder="Vehical Color"
                    value={vehicalColor}
                    onChange={(e) => setVehicalColor(e.target.value)}
                />
                <input 
                    required
                    clasasName='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                    type="text"
                    placeholder="Vehical Plate"
                    value={vehicalPlate}
                    onChange={(e) => setVehicalPlate(e.target.value)}
                />
            </div>

            <div clasasName='flex gap-4 mb-6'>
                <input 
                    required
                    clasasName='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                    type="number"
                    placeholder="Vehical Capacity"
                    value={vehicalCapacity}
                    onChange={(e) => setVehicalCapacity(e.target.value)}
                />
                <select 
                    required
                    clasasName='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                    value={vehicalType}
                    onChange={(e) => setVehicalType(e.target.value)}
                >
                    <option value="" disabled>Select Vehical Type</option>
                    <option value="car">Car</option>
                    <option value="auto">Auto</option>
                    <option value="bike">Bike</option>
                </select>
            </div>

            <button 
              clasasName='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '
            >Create Captain Account</button>
        
            <p clasasName='text-center'>Already have an account? <Link to='/captain-login' clasasName='text-blue-600'>Login here</Link></p>
        </form>
                    </div>
                    <div>
                    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span clasasName='underline'>Google Privacy Policy</span> and <span clasasName='underline'>Terms of Service</span> apply.</p>
                    </div>
                </div>
        </div>
    );
}

export default CaptainSignup;