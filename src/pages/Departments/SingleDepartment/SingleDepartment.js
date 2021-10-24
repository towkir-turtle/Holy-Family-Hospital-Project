import React from "react";
import { Link } from "react-router-dom";
import "./SingleDepartment.css";

const SingleDepartment = (props) => {
  const { img, name, description } = props.department;
  return (
    <div className="department">
      <img src={img} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link className="departmentBtn">view more</Link>
    </div>
  );
};

export default SingleDepartment;
