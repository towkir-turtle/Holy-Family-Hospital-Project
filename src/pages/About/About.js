import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutImg from "../../images/aboutImg.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <h2 className="title">
          <span>About</span> us
        </h2>
        <div className="about">
          <div className="aboutImg">
            <img src={aboutImg} />
          </div>
          <div className="about-info">
            <p className="title-paragraph">
              <span>Holy Family Hospital</span> is a project of Bangladesh Red
              Crescent Society (BDRCS) and is run by a Governing Body.
            </p>
            <p>
              The Holy Family Red Crescent Medical College started its journey
              in the academic year 1999-2000 by the inspiration of daughter of
              Father of the Nation & defender of the democracy Prime Minister
              Janonetri Sheikh Hasina.
            </p>
            <p>
              The College follows the MBBS course curriculum as laid down by
              Dhaka University and Bangladesh Medical and Dental Council.
              Government of Bangladesh regulates the criteria of qualification
              of students and the University of Dhaka conducts the professional
              examinations and certificates of MBBS degree are awarded by them.
            </p>
            <div className="secondary">
              <Link className="secondary-btn" to="/about">
                view more
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
