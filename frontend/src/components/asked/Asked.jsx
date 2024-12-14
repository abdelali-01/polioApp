import React from "react";
import "./asked.css";
import AskedCard from "./AskedCard";
import { AskedData } from "./AskedData";

export default function Asked() {

  return (
    <div className="asked container pt-5 pb-5">
      <div className="askedTop text-center">
        <h4 className="fw-bold">Frequently asked questions</h4>
        <p className="text-black-50 mb-4">
          Everything you need to know about Polio.
        </p>
      </div>
      <div className="askedTable w-50 m-auto mt-5">
        {AskedData.map((card)=>{
            return (
                <>
                <AskedCard key={card.id} card={card}/> 
                <hr />
                </>
            )
        })}
      </div>
    </div>
  );
}
