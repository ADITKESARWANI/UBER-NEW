import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center absolute w-[94%]  top-0' onClick={()=>{
                    props.WaitingForDriver(false)
                }}><i className="ri-arrow-down-wide-line text-3xl text-grey-200"></i></h5>
                
                <div className='flex-items-center justify-between '>
                <img className="h-12"src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium '>Aditya</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP 70 BX 6589</h4>
                    <p className='text-sm text-grey-600'>Maruti Suzuki WagonR </p>

                </div>
                </div>

                <div className="flex-col flex gap-2 justify-between items-center">
                    <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                    <i className="ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-grey-600">Near Sabji Mandi, Khuldabad </p>
                    </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2">
                    <i className=" text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-grey-600">Near Sabji Mandi, Khuldabad </p>
                    </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                    <i className="ri-money-rupee-circle-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">298.76</h3>
                        <p className="text-sm -mt-1 text-grey-600">Cash Cash</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default WaitingForDriver