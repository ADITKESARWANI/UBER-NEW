import React from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});


    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName:{
                firstName: FirstName,
                lastName: LastName
            },
            email: email,
            password: password
        })


        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
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
            <button 
              clasasName='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '
            >Login</button>
        
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