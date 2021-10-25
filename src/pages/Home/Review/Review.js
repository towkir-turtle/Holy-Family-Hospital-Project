import React from "react";
import { Container } from "react-bootstrap";
import { FaGrinAlt, FaHeart, FaThumbsUp, FaUserAlt } from "react-icons/fa";
import "./Review.css";

const Review = () => {
  return (
    <div id="review">
      <Container>
        <div className="review-container">
          <div className="single-review">
            <div>
              <FaUserAlt className="review-icon" />
            </div>
            <h1>652</h1>
            <p>Happy Clients</p>
          </div>
          <div className="single-review">
            <FaHeart className="review-icon" /> <br />
            <h1>7652</h1>
            <p>Heart Transplant</p>
          </div>
          <div className="single-review">
            <FaThumbsUp className="review-icon" /> <br />
            <h1>52</h1>
            <p>Years Of Experience</p>
          </div>
          <div className="single-review">
            <FaGrinAlt className="review-icon" /> <br />
            <h1>7652</h1>
            <p>Well Smiley Faces</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
