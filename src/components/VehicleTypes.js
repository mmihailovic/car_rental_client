import React, { useState } from 'react'
import VehicleType from './VehicleType.js'
import "../style/Vehicles.css";
import { deleteVehicleType } from '../Methods.js';

const VehicleTypes = ({vehicleTypes, func}) => {
    const [type,setType] = useState("");
  return (
    <div style={{position:"absolute",height:"80%", width:"100%"}}>
        <p className='headerTitle' id="vehicleTitle">All vehicle types</p>
        <div className='vehiclesDiv'>
      {
        vehicleTypes.map((vehicleType) => (
          <VehicleType key={vehicleType.id} type = {vehicleType} func={deleteVehicleType}/>
        ))
      }
      </div>
      <div className='split'></div>
      <div className='addVehicle'>
      <p className='headerTitle' id="vehicleTitle">Add vehicle type</p>
      <p className='vehicleLabel' id="addVehicleTypeLabel">Type</p>
      <input type="text" id="type" className="inputModel" onChange={()=>{setType(document.getElementById("type").value)}}></input>
      <button className='confirmButton' id="addVehicleButton" onClick={()=>{console.log(type);func(type)}}>Add</button>
      </div>
    </div>
  )
}

export default VehicleTypes