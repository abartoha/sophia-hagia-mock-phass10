import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import {
  faIdBadge,
  faHome,
  faPlusCircle,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, handleLogOut } = useAuth();
  const name = user.displayName;
  return (
    <div>
      <div className="topbar my-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
                <span className="text-primary"></span> +00 123 4455
                6666
            </div>
            <div className="col-12 col-md-6">
                <span className="text-primary"></span> mail@example.com
            </div>
          </div>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Container className="navbar-black">
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex justify-content-center align-items-center"
          >
            <span>
              <FontAwesomeIcon
                className="fa-2x black-icon"
                icon={faPlusCircle}
              ></FontAwesomeIcon>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ backgroundColor: "black" }}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                <span style={{ backgroundColor: "none" }}>
                  <FontAwesomeIcon
                    className="fa-lg black-icon"
                    icon={faHome}
                  ></FontAwesomeIcon>
                </span>
              </Nav.Link>
              <Nav.Link as={Link} to="/showServices" className="text-success mx-2">Services</Nav.Link>
              <Nav.Link as={Link} to="/dashboard" className="text-success mx-2">Appointment</Nav.Link>
              
            </Nav>
            <Nav>
              {user?.name || user?.email ? (
                <Nav>
                  <Nav.Link as={Link} onClick={handleLogOut} to="/home">
                    <span>
                      <FontAwesomeIcon
                        className="black-icon fa-lg"
                        icon={faSignOutAlt}
                      >
                        {" "}
                      </FontAwesomeIcon>
                    </span>
                  </Nav.Link>
                  
                  <Nav.Link className="text-success mx-2">Hi, {name}!</Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">
                    {user.photoURL ? (
                      <Image
                        className="navbar-dp shaking-icon "black-icon
                        style={{ filter: "contrast(110%)" }}
                        roundedCircle
                        src={user.photoURL}
                        alt="🙂"
                      />
                    ) : (
                      <span>
                        <FontAwesomeIcon
                          className="fa-lg black-icon"
                          icon={faIdBadge}
                        ></FontAwesomeIcon>
                      </span>
                    )}
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link as={Link} to="/login">
                    <span>
                      <FontAwesomeIcon
                        className="fa-lg shaking-icon black-icon"
                        icon={faSignInAlt}
                      ></FontAwesomeIcon>
                    </span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <span>
                      <FontAwesomeIcon
                        className="fa-lg black-icon"
                        icon={faUserPlus}
                      ></FontAwesomeIcon>
                    </span>
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
