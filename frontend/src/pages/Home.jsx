import React from "react"
import {useGSAP} from '@gsap/react';
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const vehicalPanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicalFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)



    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [VehicalPanel, setVehicalPanel] = usestate(false) 
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)


    const [vehicalFound, setVehicalFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();
        }

    useGSAP(function(){
        if(panelOpen) {
        gsap.to(panelRef.current, {
            height:'70%',
            padding:24,
            opacity:1
        })
        gsap.to(panelCloseRef.current, {
          opacity:1,
        })
        }else {
            gsap.to(panelRef.current, {
                height:0,
                padding:0,
            })
            gsap.to(panelCloseRef.current, {
                opacity:0,
            })
        }
    },[panelOpen])
    

    useGSAP(function(){
        if(VehicalPanel){
            gsap.to(vehicalPanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehicalPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[VehicalPanel])

    useGSAP(function(){
        if(confirmRidePanel){
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRidePanel])
    useGSAP(function(){
        if(vehicalFound){
            gsap.to(vehicalFoundRef.current, {
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehicalFoundRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehicalFound])
    useGSAP(function(){
        if(waitingForDriver){
            gsap.to(waitingForDriverRef.current, {
                transform:'translateY(0)'
            })
        }else{
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[waitingForDriver])



    return (
        <div className ='h-screen relative overfllow-hidden'>
            <img className='w-16 absolute left-5 top-5'src="https://tse4.mm.bing.net/th?id=OIP.zEmVeB3nUierJmD1REuCMgHaCm&pid=Api&P=0&h=180" alt="" />
            <div className='h-screen w-screen '>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
                <div className='h-[30%] p-6 bg-white relative'>
                <h5 ref={panelCloseRef} onClick={()=>{
                    setPanelOpen(false)
                }}className='absolute opacity-0 right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-fill"></i></h5>
                <h4 className='text-2xl font-semibold '> Find a Trip</h4>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <div className="line absolute h-16 w-1 top-[45%] left-10 bg-grey-700 rou-full"></div>
                    <input
                    onClick={() => setPanelOpen(true)} 
                    value={pickup}
                    onChange={(e) => {
                        setPickup(e.target.value)}}
                    className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
                    type="text" 
                    placeholder='Add a pick-up location'
                    />
                    <input
                    onClick={() => setPanelOpen(true)}
                    value={destination}
                    onChange={(e) => {
                        setDestination(e.target.value)}} 
                    className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full '
                    type="text"
                    placeholder='Enter your Destination'
                    />
                </form>
                </div>
                <div ref={panelRef}className='bg-white h-0'>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehicalPanel={setVehicalPanel}/>
                </div>
            </div>
            <div ref={vehicalPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <VehicalPanel setConfirmRidePanel={setConfirmRidePanel} setVehicalPanel={setVehicalPanel}/>
        </div>
        <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicalFound={setVehicalFound}/>
        </div>
        <div ref={vehicalFoundRef}className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
            <LookingForDriver setVehicalFound={setVehicalFound}/>
        </div>
        <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12'>
            <WaitingForDriver waitingForDriver={waitingForDriver}/>
        </div>
    </div> 
    )
}

export default Home