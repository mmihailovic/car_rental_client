import React, { useEffect, useState } from 'react'
import Catalog from '../components/Catalog';
import Header from '../components/Header';
import Reservations from '../components/Reservations';
import { loadCatalog, addReservation, loadReservationsForUser, loadOverviews, loadCompanyOverviews } from '../Methods';
import { Route,Routes } from 'react-router-dom';
import Company from '../components/Company';
import CreateCompany from '../components/CreateCompany';
import Overviews from '../components/Overviews';

const MainPage = () => {
  const [catalog,setCatalog] = useState([]);
  const [from,setFrom] = useState('2024-1-1');
  const [to,setTo] = useState('2024-12-31');
  const [fromCatalog,setFromCatalog] = useState('2024-1-1');
  const [toCatalog,setToCatalog] = useState('2024-12-31');
  const [reservations,setReservations] = useState([]);
  const [overviews,setOverviews] = useState([]);
  const [companies,setCompanies] = useState([]);
  useEffect(()=>{
    getCatalog();
  },[fromCatalog,toCatalog]);
  useEffect(()=>{
      getReservations();
      getOverviews();
      getCompanies();
  },[])
  async function getOverviews() {
    var niz = [];
    niz = await loadOverviews(setOverviews);
    if(typeof niz !== 'undefined') {setOverviews(niz);}
  }
  async function getCompanies() {
    var niz = [];
    niz = await loadCompanyOverviews(setCompanies);
    if(typeof niz !== 'undefined') {setCompanies(niz);}
  }
  async function getCatalog() {
    var niz = [];
    niz = await loadCatalog(fromCatalog,toCatalog,setCatalog);
    if(typeof niz !== 'undefined') {setCatalog(niz);}
  }
  
  async function getReservations() {
    var niz = [];
    niz = await loadReservationsForUser(1,setReservations);
    if(typeof niz !== 'undefined') {setReservations(niz);}
  }
  function handleFrom() {
    setFrom(document.getElementById("fromInput").value);
  }
  function handleTo() {
    setTo(document.getElementById("toInput").value);
  }
  function handleFromCatalog() {
    setFromCatalog(document.getElementById("fromInputCatalog").value);
  }
  function handleToCatalog() {
    setToCatalog(document.getElementById("toInputCatalog").value);
  }
    return (
        <>
        <Header></Header>
        <Routes>
            <Route path="/catalog" element={<><div style={{display:"flex"}}>
        <p>Date for catalog</p>
        <input type="text" id="fromInputCatalog" onChange={handleFromCatalog}></input>
        <input type="text" id="toInputCatalog" onChange={handleToCatalog}></input>
        {/* <button>Search</button> */}
        <p>Date for reserve</p>
        <input type="text" id="fromInput" onChange={handleFrom}></input>
        <input type="text" id="toInput" onChange={handleTo}></input>
        </div>
        <Catalog catalog={catalog} reserve={addReservation} from={fromCatalog} to={toCatalog}></Catalog></>}></Route>
        <Route path="/reservation" element={<><Reservations reservations={reservations}></Reservations></>}></Route>
        <Route path="/company/:id" element={<><Company></Company></>}></Route>
        <Route path="/company/create" element={<CreateCompany></CreateCompany>}></Route>
        <Route path="/overviews" element={<Overviews overviews={overviews} companies={companies}></Overviews>}></Route>
        </Routes>
        </>
    )
}

export default MainPage