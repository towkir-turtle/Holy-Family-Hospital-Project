import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleDepartment from "../SingleDepartment/SingleDepartment";
import "./Departments.css";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("departments.json")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);
  return (
    <div id="departments">
      <Container>
        <h2 className="title">
          <span>Holy Family</span>Departments
        </h2>
        <div className="department-container">
          {departments.map((department) => (
            <SingleDepartment
              key={department.id}
              department={department}
            ></SingleDepartment>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Departments;
<h2>Departments</h2>;
