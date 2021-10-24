import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services">
      <Container>
        <div className="title">
          <h2>
            <span>Our</span> Best Services
          </h2>
        </div>
        <div className="service-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
