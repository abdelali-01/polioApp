import React from 'react'
import StartForFree from '../../components/StartForFree'
import Asked from '../../components/asked/Asked'
import FSection from '../../components/fSection/FSection'
import Companies from '../../components/companies/Companies'
import Featurs from '../../components/features/Featurs'
import CRM from '../../components/CRM/CRM'


export default function Home() {
  return (
    <div>
      
      <FSection />
      <div className='container p-5'>
      <img style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)", borderRadius: "15px" }} src={`${process.env.REACT_APP_PUBLIC_FOLDER}DashboardD.png`} className=" img-fluid" alt="" />
      </div>
      <Companies />
      <Featurs />
      <CRM />
      <StartForFree bg={true}/>

      <Asked/>
      <StartForFree bg={true}/>
    </div>
  )
}
