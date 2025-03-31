import React from "react"

const LocationSearchPanel = (props) => {


    // sample array for location
    const locations = [
        "Beniganj, Prayagraj Kala Danda Uttar Pradesh",
        "Himmatganj, Prayagraj Kala Danda Uttar Pradesh",
        "Chakiya, Prayagraj Uttar Pradesh",
        "Khuldabad, Prayagraj Kala Danda Uttar Pradesh",
    ]
    return (
        <div>
            {/* this is just a sample data  */}
            {
                locations.map(function(elem,idx){
                    return <div key={idx} onClick={()=>{
                        props.setVehicalPanel(true)
                        props.setPanelOpen(false)
                    }}className='flex gap-4 border-2 px-2 border-grey-50 active: border-black rounded-xl items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
                    <h1 className='font-medium'>{elem}</h1>
                </div> 
                })
            }           
        </div>
    )
}

export default LocationSearchPanel