import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import chooseUsImg from "../../../images/why-choose-img.png";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div id="chooseUs">
      <Container>
        <h2 className="title">
          <span>Why</span>Choose Us
        </h2>
        <div className="content">
          <div className="contentInfo">
            <p className="info-title">
              Our goal is to make sure with advances in technology
            </p>
            <p className="description">
              Professional dental clinic 32roDent offers the whole range of
              dentistry services: treatment of caries, gum diseases, tooth
              whitening, implantation, dentures (crowns installation), surgery,
              correction (braces) etc.
            </p>
            <Link to="/about" className="chooseUsBtn">
              More about practice
            </Link>
          </div>
          <div className="contentImg">
            <img src={chooseUsImg} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
