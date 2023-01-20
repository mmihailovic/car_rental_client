import React from 'react'
import "../style/Vehicle.css";

const Vehicle = ({vehicle, func}) => {
  return (
    <div className='vehicleMainDiv'>
        <p className='vehicleLabel' id="typeLabel">Type</p> <p className='vehicleData' id="typeData">{vehicle.type}</p>
        <p className='vehicleLabel'id="modelLabel">Model</p><p className='vehicleData' id="modelData">{vehicle.model}</p>
        <p className='deleteButton' id="deleteVehicle" onClick={()=>func(vehicle.id)}>Delete</p>
    </div>
  )
}

export default Vehicle