import React from 'react'
import {deleteReservation} from "../Methods.js"
import Reservation from './Reservation.js'

const Reservations = ({reservations}) => {
    return (
        <div style={{position:"absolute",height:"80%", width:"100%"}}>
            <p className='headerTitle' id="vehicleTitle">Reservations</p>
            <div className='vehiclesDiv'>
          {
            reservations.map((reservation) => (
              <Reservation key={reservation.id} reservation = {reservation} func={deleteReservation}/>
            ))
          }
          </div>
        </div>
      )
}

export default Reservations