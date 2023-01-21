import React from 'react'
import CompanyOverview from './CompanyOverview'
import Overview from './Overview'

const Overviews = ({overviews,companies}) => {
  return (
    <div style={{position:"absolute",height:"80%", width:"100%"}}>
    <p className='headerTitle' id="vehicleTitle">Overviews</p>
    <div className='vehiclesDiv'>
  {
    overviews.map((overview) => (
      <Overview key={overview.id} overview = {overview}/>
    ))
  }
  </div>
  <div className='vehiclesDiv' style={{position:"absolute", left:"50%"}}>
  {
    companies.map((company) => (
        <CompanyOverview key={company.id} company = {company}/>
        ))
  }
  </div>
</div>
  )
}

export default Overviews