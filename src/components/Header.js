import React from 'react'
import '../style/Header.css';
import car from "../assets/car.png";
const Header = () => {
  return (
    <div className='headerMainDiv'>
        <img src={car} id="car"></img>
        <p className='headerTitle' id="header">Car rental</p>
    </div>
  )
}

export default Header