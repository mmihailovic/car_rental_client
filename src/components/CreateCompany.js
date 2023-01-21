import React, { useState } from 'react'
import { addCompany } from '../Methods';
const CreateCompany = () => {
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();
  return (
    <div className='addVehicle'>
    <p className='headerTitle' id="vehicleTitle">Add company</p>
    <p className='vehicleLabel' id="addVehicleTypeLabel">Title</p>
    <input type="text" id="titleInput" className="inputModel" onChange={()=>{setTitle(document.getElementById("titleInput").value)}}></input>
    <p className='vehicleLabel' id="descLabel">Description</p>
    <input type="text" id="descInput" className="inputModel" onChange={()=>{setDesc(document.getElementById("descInput").value)}}></input>
    <button className='confirmButton' id="addVehicleButton" onClick={()=>{console.log();addCompany(title,desc)}}>Add</button>
    </div>
  )
}

export default CreateCompany