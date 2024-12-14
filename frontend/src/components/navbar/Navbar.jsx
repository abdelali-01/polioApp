import React from 'react'

export default function Navbar() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
  return (
    <div>
        <img src={PF+"Logo.svg"} alt="" />
      <h2 className='text-center'>Hello</h2>
    </div>
  )
}
