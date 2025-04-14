import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        className=" p-1 text-center w-[93%] absolute top-0"
        onClick={function () {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className=" text-2xl font-semibold mb-5">Confirm your ride</h3>

      <div className=" flex justify-between gap-2 flex-col items-center">
        <img
          className=" h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className=" w-full mt-5">
          <div className=" flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className=" text-lg font-medium">562/11-A</h3>
              <p className=" text-sm -mt-1 text-gray-600">
                Santoshpur Lake, Kolkata
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className=" text-lg ri-map-pin-5-fill"></i>
            <div>
              <h3 className=" text-lg font-medium">562/11-A</h3>
              <p className=" text-sm -mt-1 text-gray-600">
                Santoshpur Lake, Kolkata
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-5 p-3 ">
            <i className=" text-lg ri-currency-line"></i>
            <div>
              <h3 className=" text-lg font-medium">₹193.20</h3>
              <p className=" text-sm -mt-1 text-gray-600">
                Cash
              </p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConfirmedRidePanel(false)
        }} className=" w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
