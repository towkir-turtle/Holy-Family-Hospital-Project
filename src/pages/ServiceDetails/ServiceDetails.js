import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const medicalService = details?.find((ms) => ms.id == serviceId);

  return (
    <div id="serviceDetails">
      <div className="singleService">
        <div>
          <img src={medicalService?.img} />
        </div>
        <div className="serviceInfo">
          <h3>{medicalService?.name}</h3>
          <p>Our goal is to make sure with advances in technology</p>
          <p>{medicalService?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
