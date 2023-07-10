import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Linkedin } from "react-bootstrap-icons";
import logo from "../../assets/logo.png";
import "./contact.css";

const Contact = () => {

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();

    const offset = 50; // Adjust this value to set the desired offset

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="footer text-center text-lg-start text-white"
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 c_logo">
              <img src={logo} className="img-fluid" alt="" />
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="c_h text-uppercase mb-4 font-weight-bold">
                Contact
              </h6>
              {/* <hr className="w-100 clearfix " /> */}
              <p className="c_p mt-0 pt-0">
                Address: PM Shopping Center, Holding no. - 6/4, Road - 6,
                Section - 11/A, Pallabi, Mirpur, Dhaka - 1216
              </p>
              <hr className="w-100 clearfix" />
              <p className="c_p mt-0 pt-0">
                Email:
                <span className="c_e">
                  <a href="mailto:info@quorum-it.com"> info@quorum-it.com</a>
                </span>
              </p>
              <hr className="w-100 clearfix" />
              <p className="c_p mt-0 pt-0">Phone: +88 01792818439</p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="c_h text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              
              <p>
                <a
                  href="#about-us"
                  className="c_a text-black text-decoration-none"
                  onClick={(e) => handleNavLinkClick(e, "about")}
                >
                  About
                </a>
              </p>
              <p>
                <a
                  href="#our-services"
                  className="c_a text-black text-decoration-none"
                  onClick={(e) => handleNavLinkClick(e, "services")}
                >
                  Services
                </a>
              </p>
              <p>
                <a
                  href="#why-us"
                  className="c_a text-black text-decoration-none"
                  onClick={(e) => handleNavLinkClick(e, "why-us")}
                >
                  Why Us
                </a>
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="c_h text-uppercase mb-4 font-weight-bold">
                Socials
              </h6>
              <p className="c_p">
                <a href="" className="c_p">
                  <Facebook className="fb" />
                </a>
                <a href="" className="c_p">
                  <Linkedin className="ln" />
                </a>
              </p>
            </div>
          </div>
        </section>
        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-7 col-lg-8 text-center align-items-center justify-content-center">
              <div className="c_p p-3">
                © copyright
                {/* <a className="" href="#"></a> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Contact;
