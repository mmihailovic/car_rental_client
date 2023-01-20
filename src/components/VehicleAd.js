import React from 'react'
import "../style/Catalog.css";

const VehicleAd = ({vehicle,func,from,to}) => {
    console.log(from +":"+to);
  return (
    <div className='vehicleMainDiv'>
        <p className='vehicleLabel' id="typeLabel">Type</p> <p className='vehicleData' id="typeData">{vehicle.type}</p>
        <p className='vehicleLabel'id="modelLabel">Model</p><p className='vehicleData' id="modelData">{vehicle.model}</p>
        <p className='vehicleLabel' id="companyLabel">Company</p><p className='vehicleData' id="companyLabelData">{vehicle.company}</p>
        <p className='vehicleLabel' id="priceLabel">Price</p><p className='vehicleData' id="priceLabelData">{vehicle.price}</p>
        <p className='deleteButton' id="deleteVehicle" onClick={()=>func(vehicle.vehicleid,vehicle.companyid,from,to)}>Reserve</p>
    </div>
  )
}

export default VehicleAd