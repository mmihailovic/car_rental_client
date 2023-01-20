import React from 'react'
import "../style/Companies.css"

const Company = ({title,desc}) => {
  return (
    <div className='companyMainDiv'>
        <p className='vehicleLabel' id="typeLabel">Title</p><p className='vehicleData' id="typeData">{title}</p>
        <p className='vehicleLabel' id="descLabelInCompany">Description</p><p className='vehicleData' id="descData">{desc}</p>
        <p className='deleteButton' id="deleteVehicle">Delete</p>
    </div>
  )
}

export default Company