import React from "react"

const LookingForDriver = (props) => {
    return(
        <div>
            <h5 className='p-1 text-center absolute w-[94%]  top-0' onClick={()=>{
                    props.setVehicalFound(false)
                }}><i className="ri-arrow-down-wide-line text-3xl text-grey-200"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

                <div className="flex-col flex gap-2 justify-between items-center">
                <img className="h-20"src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
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

export default LookingForDriver