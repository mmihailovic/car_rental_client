import React from 'react'
import "../style/Vehicle.css";
import {editOverview, deleteOverview } from '../Methods.js';

const Overview = ({overview}) => {
  return (
    <div className='vehicleMainDiv'>
        <p className='vehicleLabel'>Grade</p> <p className='vehicleData' id="typeData">{overview.grade}</p>
        <p className='vehicleLabel'>Comment</p><p className='vehicleData' id="modelData">{overview.comment}</p>
        <p className='vehicleLabel'>Company</p><p className='vehicleData' id="modelData">{overview.company.title}</p>
        <p className='deleteButton' onClick={()=>editOverview(overview.id)}>Edit</p>
        <p className='deleteButton' onClick={()=>deleteOverview(overview.id)}>Delete</p>
    </div>
  )
}

export default Overview