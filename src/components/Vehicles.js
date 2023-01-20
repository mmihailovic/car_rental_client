import React, { useEffect, useState } from 'react'
import Vehicle from './Vehicle'
import "../style/Vehicles.css";
import Select from 'react-select';
import { deleteVehicle, loadVehicleTypes } from '../Methods';

const Vehicles = ({vehicles, func}) => {
  console.log("Vehicles" + vehicles.length);
    const [selectedOption,setSelectedOption] = useState(null);
    const [model,setModel] = useState("");
    const [type,setType] = useState("");
    const [vehicleTypes,setVehicleTypes] = useState([]); 
    const [optionsType,setOptionsType] = useState([]);
    // const [options,setOptions] = useState([]);
    const handleChange = (selectedOption) => {
        setType(selectedOption.value);
    }
    let options = [];
    useEffect(()=>{
      if(vehicleTypes.length == 0)loadTypes();
      console.log(vehicleTypes);
      for(let i = 0;i < vehicleTypes.length; i++) {
        options.push({value:vehicleTypes[i].id,label:vehicleTypes[i].name});
      }
      console.log(options);
      setOptionsType(options);
      // setOptions(option);
    },[vehicleTypes]);
    async function loadTypes() {
      await loadVehicleTypes(setVehicleTypes);
    }
  return (
    <div style={{position:"absolute",height:"80%", width:"100%"}}>
        <p className='headerTitle' id="vehicleTitle">All vehicles</p>
        <div className='vehiclesDiv'>
      {
        vehicles.map((vehicle) => (
          <Vehicle key={vehicle.id} vehicle = {vehicle} func={deleteVehicle}/>
        ))
      }
      </div>
      <div className='split'></div>
      <div className='addVehicle'>
      <p className='headerTitle' id="vehicleTitle">Add vehicle</p>
      <p className='vehicleLabel' id="vehicleTypeLabelAdd">Type</p>
      <Select options={optionsType} className="selectDropDown" onChange={handleChange}/>
      <p className='vehicleLabel' id="vehicleModelLabelAdd">Model</p>
      <input type="text" id="model" className="inputModel" onChange={()=>{setModel(document.getElementById("model").value)}}></input>
      <button className='confirmButton' id="addVehicleButton" onClick={()=>{console.log(model);func(model,type/*{type:type,model:model}*/)}}>Add</button>
      </div>
    </div>
  )
}

export default Vehicles