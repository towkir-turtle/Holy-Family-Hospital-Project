import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, img, name, description } = props.service;

  return (
    <div className="service">
      <img src={img} />
      <h4>{name}</h4>
      <p>{description}</p>
      <Link to={`/serviceDetails/${id}`} className="service-btn">
        view more
      </Link>
    </div>
  );
};

export default Service;
