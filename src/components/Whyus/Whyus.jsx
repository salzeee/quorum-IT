import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import op from "../../assets/Operational.png"
import end from "../../assets/End.jpg";
import ino from "../../assets/Innovation.jpeg";
import "./whyus.css";

const Whyus = () => {
  return (
    <section
      id="why-us"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      className="whyus"
    >
      <Container>
        <Row className="w_title">
          <Col xs={12}>
            <h2 className="text-center m-0 s_h2">Why us</h2>
          </Col>
        </Row>
        <Row
          className="w_r justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <Col md={6} className="order-md-1 order-2 text-center text-md-start">
            <h3 className="w_h3">Optimum operational efficiency</h3>
            <p className="w_p">
              Our cost effective services help control your costs to remain
              competitive without compromising quality
            </p>
          </Col>
          <Col md={6} className="order-md-2 order-1">
            <div className="w_img">
              <img src={op} className="img-fluid" alt="" />
            </div>
          </Col>
        </Row>

        <Row
          className="w_r justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <Col md={6}>
            <div className="w_img">
              <img src={end} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h3 className="w_h3">End-to-End Management</h3>
            <p className="w_p">
              We take full responsibility for your project completion and team
              management from start to end, guaranteeing quality product output
            </p>
          </Col>
        </Row>

        <Row
          className="w_r justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <Col md={6} className="order-md-1 order-2 text-center text-md-start">
            {/* Content for the first column */}
            <h3 className="w_h3">Focus on Innovation</h3>
            <p className="w_p">
              We not only listen to our clients, we aim to invent on their
              behalf. We innovate to find a better way for clients who depend on
              us to satisfy customers who rely on them
            </p>
          </Col>
          <Col md={6} className="order-md-2 order-1">
            <div className="w_img">
              <img src={ino} className="img-fluid" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Whyus;
