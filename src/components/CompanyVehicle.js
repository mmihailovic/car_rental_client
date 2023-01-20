import React from 'react'

const CompanyVehicle = ({vehicle,func}) => {
  return (
    <div className='vehicleMainDiv'>
    <p className='vehicleLabel' id="typeLabel">Type</p> <p className='vehicleData' id="typeData">{vehicle.type}</p>
    <p className='vehicleLabel'id="modelLabel">Model</p><p className='vehicleData' id="modelData">{vehicle.model}</p>
    <p className='vehicleLabel'id="companyLabel">Price</p><p className='vehicleData' id="companyLabelData">{vehicle.price}</p>
    <p className='vehicleLabel'id="priceLabel">Number</p><p className='vehicleData' id="priceLabelData">{vehicle.number}</p>
    <p className='deleteButton' id="deleteVehicle" onClick={()=>func(vehicle.id)}>Delete</p>
</div>
  )
}

export default CompanyVehicle