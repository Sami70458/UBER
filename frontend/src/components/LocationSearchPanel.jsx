import React from 'react'

const LocationSearchPanel = (props) => {



  // sample array for location
  const locations = [
    "12A,TechnoCity,Panchpota,Garia, PolicePara,Kolkata",
    "13C,TechnoCity,Panchpota,Garia, PolicePara,Kolkata",
    "32B,TechnoCity,Panchpota,Garia, PolicePara,Kolkata",
    "18D,TechnoCity,Panchpota,Garia, PolicePara,Kolkata",
    "31/A,TechnoCity,Panchpota,Garia, PolicePara,Kolkata",
  ];

  return (


    <div>

      {
        locations.map(function(elem,idx){
          return   <div key={idx} onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} className=' flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl  my-2 items-center justify-start'>
        <h2 className=' bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-line"></i></h2>
        <h4 className=' font-medium'>{elem}</h4>
        </div>
        })
      }

    </div>
  )
}

export default LocationSearchPanel
