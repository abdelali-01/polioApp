import React from "react";

export default function ReviewCard({ one }) {
  return (
    <div
      className="card p-3 flex-grow-1 shadow-sm"
      style={{
        minWidth: "200px",
        maxWidth: "350px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <div className="topCard d-flex align-items-center gap-3 mb-3">
        <img
          src={one.image}
          alt="profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid #006",
            objectFit: "cover",
          }}
        />
        <div className="ProfileInfo">
          <p className="fw-bold my-0">{one.username}</p>
          <p className="text-black-50 my-0">{one.job}</p>
        </div>
      </div>
      <div className="ReviewCommentSection">
        <p className="text-muted">{one.comment}</p>
      </div>
    </div>
  );
}
