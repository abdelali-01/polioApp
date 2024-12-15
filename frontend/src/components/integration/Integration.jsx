import React from 'react'
import "./integration.css"

export default function Integration() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
  return (
    <div className='container pt-5 pb-5 text-center'>
        <div className="integrationTop mt-5 mb-5">
            <p className="fw-bold text-black-50">Integrations</p>
            <h4 className='fw-bold'>Integrate Polio with over 500 apps</h4>
            <p className="text-black-50">Polio CRM works seamlessly with your favorite apps. Use over 500 tools and apps by just one click.</p>
        </div>
        <div className="integrationBottom">
            <div className="polioLogo mb-5">
                <img src={PF+"Logo.svg"} width={"100"} alt="" />
            </div>
            <div className="otherLogos d-flex justify-content-center gap-4 pt-5">
                <img src={PF+"Logos/dropbox.svg"} alt="" style={{width :"5%"}}/>
                <img src={PF+"Logos/slack.svg"} alt="" style={{width :"5%"}}/>
                <img src={PF+"Logos/stripe.svg"} alt="" style={{width :"5%"}}/>
                <img src={PF+"Logos/notion.svg"} alt="" style={{width :"5%"}}/>
                <img src={PF+"Logos/zapier.svg"} alt="" style={{width :"5%"}}/>
                <img src={PF+"Logos/zendesk.svg"} alt="" style={{width :"5%"}}/>
                <img className='responsiveImgHide' src={PF+"Logos/google_drive.svg"} alt="" style={{width :"5%"}}/>
                <img className='responsiveImgHide' src={PF+"Logos/mailchimp.svg"} alt=""style={{width :"5%"}} />
                <img className='responsiveImgHide' src={PF+"Logos/figma.svg"} alt="" style={{width :"5%"}}/>
                <img className='responsiveImgHide' src={PF+"Logos/intercom.svg"} alt="" style={{width :"5%"}}/>
            </div>
        </div>
      
    </div>
  )
}
