import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bannerImg from "../../../images/medical-team.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Container>
        <div className="banner-content">
          <div>
            <p className="intro-title">Welcome to</p>
            <p className="name">
              <span className="first-title">Holy Family</span>{" "}
              <span className="second-title">Hospital</span>
            </p>
            <p className="banner-description">
              The Holy Family Red Crescent Medical College started its journey
              in the academic year 1999-2000 by the inspiration of daughter of
              Father of the Nation & defender of the democracy Prime Minister
              Janonetri Sheikh Hasina.
            </p>
            <div className="btn">
              <Link to="/about" className="banner-btn">
                view more
              </Link>
            </div>
          </div>
          <div className="bannerImg">
            <img src={bannerImg} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
<h1>Banner</h1>;
