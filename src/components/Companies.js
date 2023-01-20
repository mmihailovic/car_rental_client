import React, { useState } from 'react'
import Company from './CompanyInfo';
import '../style/Companies.css';

const Companies = ({companies, func}) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
  return (
    <div style={{position:"absolute",height:"80%", width:"100%"}}>
    <p className='headerTitle' id="vehicleTitle">All companies</p>
    <div className='vehiclesDiv'>
  {
    companies.map((company) => (
      <Company key={company.id} title={company.title} desc={company.desc}/>
    ))
  }
  </div>
  <div className='split'></div>
  <div className='addVehicle'>
  <p className='headerTitle' id="vehicleTitle">Add company</p>
  <p className='vehicleLabel' id="addVehicleTypeLabel">Title</p>
  <input type="text" id="titleInput" className="inputModel" onChange={()=>{setTitle(document.getElementById("titleInput").value)}}></input>
  <p className='vehicleLabel' id="descLabel">Description</p>
  <input type="text" id="descInput" className="inputModel" onChange={()=>{setDesc(document.getElementById("descInput").value)}}></input>
  <button className='confirmButton' id="addVehicleButton" onClick={()=>{console.log();func({title:title,desc:desc})}}>Add</button>
  </div>
</div>
  )
}

export default Companies