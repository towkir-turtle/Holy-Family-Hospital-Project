import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";
import SingleDoctor from "../SingleDoctor/SingleDoctor";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div id="doctors">
      <Container>
        <h2 className="title">
          <span>Meet </span>Our Team
        </h2>
        <div className="doctor-container">
          {doctors.map((doctor) => (
            <SingleDoctor key={doctor.id} doctor={doctor}></SingleDoctor>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Doctors;
