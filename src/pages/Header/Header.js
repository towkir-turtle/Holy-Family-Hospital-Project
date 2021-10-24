import React from "react";
import { Nav, Navbar, button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div id="header">
      <Container>
        <Navbar sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <Link to="/home" className="logo">
              Holy Family Hospital Ltd.
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="nav ms-auto">
              <Nav.Link className="navlink" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/departments">
                Departments
              </Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/doctors">
                Doctors
              </Nav.Link>
              {user.email && (
                <span className="displayName">{user.displayName}</span>
              )}
              {user.uid ? (
                <button onClick={logOut}>Sign Out</button>
              ) : (
                <Nav.Link className="navlink" as={Link} to="/login">
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
