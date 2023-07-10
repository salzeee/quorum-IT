import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { List, X} from "react-bootstrap-icons";
import logo from '../../assets/logo.png'
import "./navigation.css";

const Navigation = () => {
  
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

   const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();

    const offset = 50; // Adjust this value to set the desired offset

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="my-navbar"
      >
        <Container>
          <Navbar.Brand className="logo">
            <img src={logo} className="logo_img" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler ntc"
            onClick={handleToggle}
          >
            {toggle ? <X /> : <List />}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav menu">
            <Nav className="ms-auto navi">
              <Nav.Link
                onClick={(e) => handleNavLinkClick(e, "about")}
                className="menu nav-link me-lg-5"
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                onClick={(e) => handleNavLinkClick(e, "services")}
                className="menu nav-link me-lg-5"
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                onClick={(e) => handleNavLinkClick(e, "why-us")}
                className="menu nav-link me-lg-5"
              >
                WHY US
              </Nav.Link>
              <Nav.Link
               
                onClick={(e) => handleNavLinkClick(e, "contact")}
                className="menu nav-link me-lg-5"
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
