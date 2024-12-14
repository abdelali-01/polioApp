import React from 'react'
import StartForFree from '../../components/StartForFree'
import Asked from '../../components/asked/Asked'

export default function Home() {
  return (
    <div>
      
      <Asked/>
      <StartForFree bg={true}/>
    </div>
  )
}
