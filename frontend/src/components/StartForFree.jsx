import React from "react";

export default function StartForFree({ bg }) {
  return (
    <div
      className={`pt-5 pb-5  text-center`}
      style={bg ? { backgroundColor: "var(--25)" } : {}}
    >
      <div className="container">
        <h4 className="fw-bold">Start your 30-day free trial</h4>
        <p className="text-black-50">
          Join 1500+ companies today and start growing your business
        </p>
        <div className="StartForFreeBtns mt-4">
          <button className="btn btn-outline-dark me-2">Learn more</button>
          <button className="btn btn-dark">Start for free</button>
        </div>
      </div>
    </div>
  );
}
