import React from 'react'

const VehicalPanel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center absolute w-[94%]  top-0' onClick={()=>{
                    props.setVehicalPanel(false)
                }}><i className="ri-arrow-down-wide-line text-3xl text-grey-200"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Choose a Vehical</h3>
            <div onClick = {()=>{
                props.setVehicalPanel(true)
            }}className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl justify-between items-center'>
                    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
                    <div className='ml-2 w-1/2 '>
                    <h4 className="font-medium text-base">Uber Go <span><i className="ri-user-3-fill">4</i></span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-normal text-xs text-grey-600 ">Affordable, compact rides</p>
                    </div>
                <h2 className="text-lg font-semibold">193.49</h2>
            </div>
            <div onClick = {()=>{
                props.setVehicalPanel(true)
            }}className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl justify-between items-center'>
                    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                    <div className='-ml-2 w-1/2 '>
                    <h4 className="font-medium text-base">Bike <span><i className="ri-user-3-fill">1</i></span></h4>
                    <h5 className="font-medium text-sm">3 mins away</h5>
                    <p className="font-normal text-xs text-grey-600 ">Affordable, bike rides</p>
                    </div>
                <h2 className="text-lg font-semibold">68.33</h2>
            </div>
            <div onClick = {()=>{
                props.setVehicalPanel(true)
            }}className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl justify-between items-center'>
                    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                    <div className='ml-2 w-1/2 '>
                    <h4 className="font-medium text-base">Uber Auto<span><i className="ri-user-3-fill">3</i></span></h4>
                    <h5 className="font-medium text-sm">3 mins away</h5>
                    <p className="font-normal text-xs text-grey-600 ">Affordable, Auto rides</p>
                    </div>
                <h2 className="text-lg font-semibold">168.83</h2>
            </div>
        </div>
    )
}

export default VehicalPanel