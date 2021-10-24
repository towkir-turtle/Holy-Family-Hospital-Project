import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../images/error.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div>
        <img className="errorImg" src={errorImg} />
      </div>
      <div className="back-btn">
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
