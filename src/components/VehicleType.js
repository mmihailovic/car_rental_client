import React from 'react'
import "../style/Vehicle.css";

const VehicleType = ({type, func}) => {
  return (
    <div className='vehicleMainDiv'>
        <p className='vehicleLabel' id="typeLabel">Type</p> <p className='vehicleData' id="typeData">{type.name}</p>
        <p className='deleteButton' id="deleteVehicle" onClick={()=>func(type.id)}>Delete</p>
    </div>
  )
}

export default VehicleType