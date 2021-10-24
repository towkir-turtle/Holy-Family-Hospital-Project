import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaAngleRight,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <div className="footer">
          <div>
            <h3>About Hospital</h3>
            <div className="footer-info">
              <p>
                The relentless service of Hospitals in the past 25 years taken
                health care to the most modern levels in the region catering to
                urban & rural.
              </p>
              <p>
                A Health Care Provider of Western Approach, Hospitals is the
                most trusted multispecialty hospital.
              </p>
            </div>
          </div>
          <div>
            <h3>Usefull Links</h3>
            <div className="links footer-info">
              <div className="top">
                <p>
                  <FaAngleRight />
                  <Link className="link-item">About us</Link>
                </p>
                <p>
                  <FaAngleRight />
                  <Link className="link-item">Appointments</Link>
                </p>
                <p>
                  <FaAngleRight />
                  <Link className="link-item">Working Hours</Link>
                </p>
                <p>
                  <FaAngleRight />
                  <Link className="link-item">Procedures</Link>
                </p>
                <p>
                  <FaAngleRight />
                  <Link className="link-item">Special Offers</Link>
                </p>
              </div>
              <div>
                <p>
                  <FaAngleRight />
                  <Link className="link-item">Services</Link>
                </p>
                <p>
                  <FaAngleRight />
                  <Link className="link-item">Healthy Foods</Link>
                </p>
                <p>
                  <FaAngleRight />
                  <Link className="link-item">Latest News</Link>
                </p>
                <p>
                  <FaAngleRight />
                  <Link className="link-item">Consultants</Link>
                </p>
                <p>
                  <FaAngleRight />
                  <Link className="link-item">Certificates</Link>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="footer-title">Contact Details</h3>
            <div className="footer-info">
              <p>
                <FaMapMarkerAlt className="footer-icon" />
                Park Drive, Varick Str NY 10012, USA
              </p>
              <p>
                <FaEnvelope className="footer-icon" />
                Getwell@Hospitals.com
              </p>
              <p>
                <FaPhoneAlt className="footer-icon" />
                (123) 0200 12345 & 7890
              </p>
              <p>
                <FaRegClock className="footer-icon" />
                Mon-Friday: 9am to 18pm
              </p>
              <p>
                <FaRegClock className="footer-icon" />
                Sat-Sunday: 10am to 16pm
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
