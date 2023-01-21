import React from 'react'
import "../style/Vehicle.css";

const Overview = ({overview}) => {
  return (
    <div className='vehicleMainDiv' style={{justifyContent:"center",display:"block", height:"150px"}}>
        <p className='vehicleLabel'>Grade</p> <p className='vehicleData' id="typeData">{overview.grade}</p>
        <p className='vehicleLabel'>Comment</p><p className='vehicleData' id="modelData">{overview.comment}</p>
        <p className='vehicleLabel'>Company</p><p className='vehicleData' id="firma">{overview.company}</p>
        {/* <p className='deleteButton' onClick={()=>editOverview(overview.id)}>Edit</p>
        <p className='deleteButton' onClick={()=>deleteOverview(overview.id)}>Delete</p> */}
    </div>
  )
}

export default Overview