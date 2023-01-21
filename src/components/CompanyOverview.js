import React from 'react'

const CompanyOverview = ({company}) => {
  return (
    <div className='companyMainDiv'>
    <p className='vehicleLabel' id="typeLabel">Title</p><p className='vehicleData' id="typeData">{company.title}</p>
    <p className='vehicleLabel' id="descLabelInCompany">Description</p><p className='vehicleData' id="descData">{company.desc}</p>
    <p className='vehicleLabel' >Grade</p><p className='vehicleData'>{company.grade}</p>
    </div>
  )
}

export default CompanyOverview