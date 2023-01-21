import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../style/Menu.css"

const Menu = () => {
    const navigate = useNavigate();
    const clickVehicle = () => {
        console.log("Vehicle");
        navigate("/admin/vehicle");
    }
    const clickCompany = () => {
        navigate("/admin/company")
    }
    const clickVehicleType = () => {
        navigate("/admin/vehicletype")
    }
  return (
    <div className='menuBar'>
        <ul>
            {/* <li onClick={clickCompany}>Company</li> */}
            <li onClick={clickVehicle}>Vehicle</li>
            <li onClick={clickVehicleType}>Vehicle Type</li>
        </ul>
    </div>
  )
}

export default Menu