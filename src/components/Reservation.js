import React from 'react'
import "../style/Catalog.css";
import "../style/Reservation.css";

const Reservation = ({reservation,func}) => {
  return (
    <div className='vehicleMainDiv' style={{height:"200px"}}>
        <p className='vehicleLabel' id="typeLabel">Type</p> <p className='vehicleData' id="typeData">{reservation.type}</p>
        <p className='vehicleLabel'id="modelLabel">Model</p><p className='vehicleData' id="modelData">{reservation.model}</p>
        <p className='vehicleLabel' id="companyLabel">Company</p><p className='vehicleData' id="companyLabelData">{reservation.company}</p>
        <p className='vehicleLabel' id="priceLabel">Price</p><p className='vehicleData' id="priceLabelData">{reservation.price}</p>
        <p className='vehicleLabel' id="fromLabel">From</p><p className='vehicleData' id="fromLabelData">{reservation.from}</p>
        <p className='vehicleLabel' id="toLabel">To</p><p className='vehicleData' id="toLabelData">{reservation.to}</p>
        <p className='deleteButton' id="deleteVehicle" onClick={()=>func(reservation.id)}>Delete</p>
    </div>
  )
}

export default Reservation