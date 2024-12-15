import './analyses.css'

export default function Analyses(){
    const PTH = process.env.REACT_APP_PUBLIC_FOLDER ;
    return (
    <div style={{backgroundColor : "#f9fafb" , padding:30}}>
        <div className="container   " >
              <div className="row mb-2   sz" >
                <div className="col-8 mx-2 cardA pt-2  "  >
                      <h4>Hyper-manage operations with rich analytics</h4>
                      <p className='text-black-50'>Derive actionable insights, create custom reports and dashboards, and measure operations in real time to drive growth in a sustainable manner. </p>
                      <div className='container px-5'>
                      <img className='img-fluid img max-width: 100%' src={`${PTH}DashboardD.png`} alt="" />
                      </div>
                </div>
                <div className="col mx-2 cardA pt-2" >
                <h4>Customize, upscale, and deploy with ease</h4>
                      <p className='text-black-50'>Derive actionable insights, create custom reports and dashboards.</p>
                      <div className='container px-5'>
                      <img className='img-fluid img' src={`${PTH}DashboardM.png`} alt="" />
                      </div>
                </div>
              </div>
              <div className="row sz">
                <div className="col mx-2 cardA pt-2" >
                <h4>Customize, upscale, and deploy with ease</h4>
                      <p className='text-black-50'>Derive actionable insights, create custom reports and dashboards.</p>
                      <div className='container px-5'>
                      <img className='img-fluid img' src={`${PTH}DashboardM.png`} alt="" />
                      </div>
                </div>      
                <div className="col-8 mx-2 cardA pt-2" >
                <h4>Hyper-manage operations with rich analytics</h4>
                      <p className='text-black-50'>Derive actionable insights, create custom reports and dashboards, and measure operations in real time to drive growth in a sustainable manner. </p>
                      <div className='container px-5'>
                      <img className='img-fluid img' src={`${PTH}DashboardD.png`} alt="" />
                      </div>
                </div>
              </div>
        </div>
    </div>
    )
}