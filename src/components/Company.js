import React, { useEffect, useState } from 'react'
import Vehicles from './Vehicles'
import {deleteCompanyVehicle, loadCompany,loadCompanyVehicles, loadReservationsForCompany, deleteReservation, loadVehicleTypes, addCompanyVehicle, loadVehiclesForType} from "../Methods.js"
import { useParams } from 'react-router-dom'
import CompanyVehicle from './CompanyVehicle'
import Reservation from './Reservation'
import Select from 'react-select';
import "../style/Company.css"

const Company = () => {
    const {id} = useParams();
    const [company,setCompany] = useState({title:"",description:""});
    const [vehicles,setVehicles] = useState([]);
    const [reservations,setReservations] = useState([]);
    const [vehicleTypes,setVehicleTypes] = useState([]);
    const [vehicleModels,setVehicleModels] = useState([]);
    const [vehicleType,setVehicleType] = useState();
    const [model,setModel] = useState();
    const [price,setPrice] = useState(0);
    const [number,setNumber] = useState(1);
    const [optionTypes,setOptionTypes] = useState();
    const [optionModels,setOptionModels] = useState();
     useEffect(()=>{
        getCompany();
        getVehicleTypes();
    },[])
    useEffect(()=>{
      getVehicleModels();
    },[vehicleType])
    useEffect(()=>{
      let options = [];
      console.log(vehicleModels);
      for(let i = 0;i < vehicleModels.length; i++) {
        console.log(vehicleModels[i].id+ " vozilo");
        options.push({value:vehicleModels[i].id,label:vehicleModels[i].model});
    }
    console.log(options);
    setOptionModels(options)
    },[vehicleModels])
    useEffect(()=>{
        getCompanyVehicles();
        getReservations();
    },[company])
    async function getCompanyVehicles() {
        var v = await loadCompanyVehicles(id,setVehicles);
        console.log(v);
        if(typeof v !== 'undefined') setVehicles(v);
    }
    async function getVehicleModels() {
        var v = await loadVehiclesForType(vehicleType,setVehicleModels);
        // if(typeof v !== 'undefined') setVehicleModels(v);
    }
    async function getCompany() {
        var c = await loadCompany(id,setCompany);
        console.log(c);
        if(typeof c !== 'undefined') setCompany(c);
    }
    async function getReservations() {
        var c = await loadReservationsForCompany(id,setReservations);
        console.log(c);
        if(typeof c !== 'undefined') setReservations(c);
    }
    async function getVehicleTypes() {
        var c = await loadVehicleTypes(setVehicleTypes);
        console.log(c);
        if(typeof c !== 'undefined') setVehicleTypes(c);
    }
    const handleChangeType = (selectedOption) => {
      console.log(selectedOption);
        setVehicleType(selectedOption.value);
    }
    const handleChangeModel = (selectedOption) => {
      console.log(selectedOption);
        setModel(selectedOption.value);
    }
    useEffect(()=>{
      let options = [];
        if(vehicleTypes.length == 0)loadTypes();
        console.log(vehicleTypes);
        for(let i = 0;i < vehicleTypes.length; i++) {
            options.push({value:vehicleTypes[i].id,label:vehicleTypes[i].name});
        }
        console.log(options);
        setOptionTypes(options)
      },[vehicleTypes]);
      async function loadTypes() {
        await loadVehicleTypes(setVehicleTypes);
      }
    console.log(company);
  return (
    <div>
        <div style={{display:"flex"}}>
        <p className="vehicleLabel" style={{paddingRight:"10px"}}>Title</p> <p>{company.title}</p>
        <p className="vehicleLabel" style={{paddingRight:"10px",paddingLeft:"10px"}}>Description   </p><p>{company.description}</p>
        <input type="text"></input>
        <input type="text"></input>
        <button>Update</button>
        </div>
        <p className="vehicleLabel">Vehicles</p>
        <div style={{position:"absolute",left:"-2%",width:"35%",overflow:"auto", height:"550px"}}>
        {
        vehicles.map((vehicle) => (
          <CompanyVehicle key={vehicle.id} vehicle = {vehicle} func={deleteCompanyVehicle}/>
        ))
      }
      </div>
      <div style={{width:"35%", position:"absolute", left:"31%", top:"21.5%",overflow:"auto", height:"550px"}}>
      <p className="vehicleLabel" style={{paddingLeft:"30px"}}>Reservations</p>
        {
        reservations.map((reservation) => (
            <Reservation key={reservation.id} reservation = {reservation} func={deleteReservation}/>
        ))
      }
      </div>
      <div style={{position:"absolute",left:"70%", width:"30%", height:"600px"}}>
      <p className='headerTitle' id="vehicleTitle">Add vehicle</p>
      <p className='vehicleLabel' id="vehicleTypeLabelAdd">Type</p>
      <Select options={optionTypes} className="selectDropDown" onChange={handleChangeType}/>
      <p className='vehicleLabel' id="modelLabelOption">Model</p>
      <Select options={optionModels} className="selectDropDown" onChange={handleChangeModel}/>
      <p id="numberOfVehiclesLabel" className='vehicleLabel'>Number</p><input type="text" id="numberInput" className="inputModel" onChange={()=>{setNumber(document.getElementById("numberInput").value)}}></input>
      <p id="pricePerDayLabel" className='vehicleLabel'>Price</p><input type="text" id="priceInput"className="inputModel" onChange={()=>{setPrice(document.getElementById("priceInput").value)}}></input>
      <button className='confirmButton' id="addVehicleButton" onClick={()=>{console.log(model);addCompanyVehicle(id,model,number,price)}}>Add</button>
      </div>

    </div>
  )
}

export default Company