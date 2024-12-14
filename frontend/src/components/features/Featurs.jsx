import { FData } from "../feature/FData";
import Feature from "../feature/Feature";

function Featurs(){
    return(
        <div className="container text-center">
            <p className="text-black-50">Features</p>
            <h2>The CRM that's truly your own</h2>
            <p className="text-black-50">Engage with your customers through the right channel at the nght time and with the right</p>

            <div className="row my-5">
                  {FData.map((F, index) => (
                  <div className="col-12 col-md-6 col-lg-4 my-3 " key={index}>
                  <Feature card={F} />
                  </div>
  ))}
</div>

        </div>
    )
}
export default Featurs ; 