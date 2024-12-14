import React from "react";
import ReviewCard from "./ReviewCard";
import { ReviewsData } from "./ReviewsData";
import './Reviews.css'

export default function Reviews() {
  return (
    <div style={{ backgroundColor: "var(--25)" }}>
      <div className="container pt-5 ">
        <div className="reviewsTitle text-center">
          <p className="text-black-50 fw-bold">Testimonials</p>
          <h4 className="fw-bold">Loved by builders</h4>
          <p className="text-black-50">
            Polio is the customer relationship management tool for everyone who
            values collaboration.
          </p>
        </div>
        <div
          className="reviewsCards"
          style={{
            height : "125vh" ,
            overflow : "hidden" ,  
            position : "relative"          
          }}
        >
         <div className="animationScroll d-flex justify-content-center flex-wrap" style={{
            position : "relative" ,
            marginTop: "60px",
            gap: "20px",
            padding: "10px",
            columnGap :"20px" ,
            rowGap :"20px" ,
         }}>
         {ReviewsData.map((one) => (
            <ReviewCard key={one.id} one={one} />
          ))}
         </div>
        </div>
      </div>
    </div>
  );
}
