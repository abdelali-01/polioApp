function Companies(){
    const DB = process.env.REACT_APP_PUBLIC_FOLDER ;
    return(
         <div className="container items-center">
          <p className="text-center text-black-50 "> Trusted by Forune 500 Companies</p>
          <ul className="d-flex justify-content-center justify-content-between my-5" style={{ listStyleType: "none" }}>
  <li style={{ display: "inline-block", marginRight: "10px" }}>
    <img src={`${DB}Logos/Amazon_logo.svg`} alt="Amazon Logo" />
  </li>
  <li style={{ display: "inline-block", marginRight: "10px" }}>
    <img src={`${DB}Logos/Coca-cola_logo.svg`} alt="Coca Cola Logo" />
  </li>
  <li style={{ display: "inline-block", marginRight: "10px" }}>
    <img src={`${DB}Logos/FedEx_Express.svg`} alt="FedEx Logo" />
  </li>
  <li style={{ display: "inline-block", marginRight: "10px" }}>
    <img src={`${DB}Logos/IBM_logo.svg`} alt="IBM Logo" />
  </li>
  <li style={{ display: "inline-block" }}>
    <img src={`${DB}Logos/Walmart_logo.svg`} alt="Walmart Logo" />
  </li>
</ul>

         </div>
    )
}
export default Companies ; 