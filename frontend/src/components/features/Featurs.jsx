import CRM from "../CRM/CRM";
import { FData } from "../feature/FData";
import Feature from "../feature/Feature";

function Featurs() {
  return (
    <div style={{ backgroundColor: "#f9fafb " }}>
      <div className="container py-5  text-center">
        <CRM />
        <div className="row my-5">
          {FData.map((F, index) => (
            <div className="col-12 col-md-6 col-lg-4 my-3 " key={index}>
              <Feature card={F} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Featurs;
