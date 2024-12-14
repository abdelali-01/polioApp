import React from 'react'
import StartForFree from '../../components/StartForFree'
import Asked from '../../components/asked/Asked'
import FSection from '../../components/fSection/FSection'


export default function Home() {
  return (
    <div>
      
      <Asked/>
      <FSection />
      <div className='container p-5'>
      <img src={`${process.env.REACT_APP_PUBLIC_FOLDER}DashboardD.png`} className=" img-fluid" alt="" />
      </div>

      <StartForFree bg={true}/>
    </div>
  )
}
