import React from 'react'
import VehicleAd from './VehicleAd'

const Catalog = ({catalog, reserve, from, to}) => {
    console.log(from + ":" + to)
    return (
        <div style={{position:"absolute",height:"80%", width:"100%"}}>
            <p className='headerTitle' id="vehicleTitle">Catalog</p>
            <div className='vehiclesDiv'>
          {
            catalog.map((vehicle) => (
              <VehicleAd key={vehicle.id} vehicle = {vehicle} func={reserve} from={from} to={to}/>
            ))
          }
          </div>
        </div>
      )
}

export default Catalog