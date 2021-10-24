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
              <span>Holy Family Hospital</span> isIt is a long established fact
              that a reader will be distracted by the readable content.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and goingered the undoubtable source.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
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
