import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu';
import Vehicles from '../components/Vehicles';
import "../style/AdminPage.css";
import { Route,Routes } from 'react-router-dom';
import VehicleTypes from '../components/VehicleTypes';
import Companies from '../components/Companies';
import { loadVehicles, addVehicle, loadVehicleTypes, addVehicleType } from '../Methods';

const AdminPage = () => {
    const [vehicles,setVehicles] = useState([]);
    const [vehicleTypes,setVehicleTypes] = useState([]);
    const [companies,setCompanies] = useState([]);
    const [vehicle,setVehicle] = useState(null);
    const [type,setType] = useState(null);
    const [company,setCompany] = useState(null);

    async function getTypes() {
        let v = [];
        // for(let i = 0; i < vehicleTypes.length;i++) {
        //     v.push(vehicleTypes[i]);
        // }
        // if(type != null){v.push(type);
        // }
        v = await loadVehicleTypes(setVehicleTypes);
        if(typeof v !== 'undefined') setVehicleTypes(v);
    }
    const getCompanies = () => {
        const c = [];
        for(let i = 0; i < companies.length; i++) {
            c.push(companies[i]);
        }
        if(company != null)
            c.push(company);
        setCompanies(c);
    }
    // useEffect(()=>{
    //     getVehicles();
    // },
    // []);
        useEffect(()=>{
        if(vehicles.length == 0)getVehicles();
        console.log(vehicles.length);
    },
    [vehicles]);
    useEffect(()=>{
        getTypes();
    },[type])
    useEffect(()=>{
        getCompanies();
    },[company])
    async function getVehicles() {
        var niz = [];
        niz = await loadVehicles(setVehicles);
        if(typeof niz !== 'undefined') {setVehicles(niz);}
    }
  return (
    <div className='headerDiv'>
        <Header></Header>
        <Menu></Menu>
        <Routes>
            <Route path="/vehicle" element={<Vehicles vehicles={vehicles} func={addVehicle}></Vehicles>}></Route>
            <Route path="/company" element={<><Companies companies={companies}func={setCompany}></Companies></>}></Route>
            <Route path="/vehicletype" element={<VehicleTypes vehicleTypes={vehicleTypes} func={addVehicleType}/>}></Route>
        </Routes>
    </div>
  )
}

export default AdminPage