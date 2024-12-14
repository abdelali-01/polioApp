import React from 'react'
import './footer.css'

export default function Footer() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
  return (
    <div>
      <footer className='container pt-5 pb-5'>
        <div className="footerLinks row">
            <div className="footerLink col">
                <h5 className='fw-semibold'>Product</h5>
                <p className='text-black-50'>Changelog</p>
                <p className='text-black-50'>Customer Stories</p>
                <p className='text-black-50'>Security</p>
                <p className='text-black-50'>Pricing</p>
                <p className='text-black-50'>Solutions</p>
            </div>
            <div className="footerLink col">
                <h5 className='fw-semibold'>Product</h5>
                <p className='text-black-50'>Changelog</p>
                <p className='text-black-50'>Customer Stories</p>
                <p className='text-black-50'>Security</p>
                <p className='text-black-50'>Pricing</p>
                <p className='text-black-50'>Solutions</p>
            </div>
            <div className="footerLink col">
                <h5 className='fw-semibold'>Product</h5>
                <p className='text-black-50'>Changelog</p>
                <p className='text-black-50'>Customer Stories</p>
                <p className='text-black-50'>Security</p>
                <p className='text-black-50'>Pricing</p>
                <p className='text-black-50'>Solutions</p>
            </div>
            <div className="footerLink col">
                <h5 className='fw-semibold'>Product</h5>
                <p className='text-black-50'>Changelog</p>
                <p className='text-black-50'>Customer Stories</p>
                <p className='text-black-50'>Security</p>
                <p className='text-black-50'>Pricing</p>
                <p className='text-black-50'>Solutions</p>
            </div>
            <div className="footerLink col">
                <h5 className='fw-semibold'>Product</h5>
                <p className='text-black-50'>Changelog</p>
                <p className='text-black-50'>Customer Stories</p>
                <p className='text-black-50'>Security</p>
                <p className='text-black-50'>Pricing</p>
                <p className='text-black-50'>Solutions</p>
            </div>
        </div>
        <hr />
        <div className="footerBottom m-auto d-flex justify-content-between align-items-center flex-wrap">
            <img src={PF+"Logo.svg"} alt="" />
            <p className="text-black-50 mt-3">©2023 Polio LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
