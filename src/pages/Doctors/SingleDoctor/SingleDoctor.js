import React from "react";
import "./SingleDoctor.css";

const SingleDoctor = (props) => {
  const { img, name, designation } = props.doctor;
  return (
    <div className="doctor">
      <img src={img} />
      <h3>{name}</h3>
      <p>{designation}</p>
    </div>
  );
};

export default SingleDoctor;
