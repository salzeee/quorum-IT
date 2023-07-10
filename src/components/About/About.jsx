import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
const About = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      className="about"
    >
      <Container className="">
        <Row className="justify-content-center">
          <Col className="text-center" xs={12}>
            <h2 className="m-0 a_h2">About Us</h2>
          </Col>
          <Col xs={12}>
            <p className="a_p m-0">
              Quorum IT is a premier provider of software solutions and digital
              services to solve business challenges using the latest technology,
              through the most talented engineers and designers. We help
              individuals and businesses achieve their dreams and goals by
              consolidating their digital presence and services. Our
              customers/clients are our top priority - we obsess over satisfying
              their needs and expectations. We focus on providing Web & Mobile
              App solutions of the highest standards with global acceptability,
              as well as custom software solutions to automate your business
              operations
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
