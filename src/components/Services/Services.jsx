import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Display, Palette, Phone } from "react-bootstrap-icons";
import solution from '../../assets/Solution.png'
import mobile from '../../assets/Mobile.jpg'
import web from '../../assets/Web.png'
import custom from "../../assets/Custom.png";
import "./services.css";

const Services = () => {
  return (
    <section
      id="services"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      className="services"
    >
      <Container>
        <Row className="">
          <Col xs={12}>
            <h2 className="text-center m-0 s_h2">Our Services</h2>
          </Col>
        </Row>
        <Row className="items">
          <Col md={3} xs={12} className="">
            <div className="service-card text-center">
              <div className="service_img">
                <img src={solution} className="img-fluid" alt="" />
              </div>
              <h3 className="s_h3 m-0">
                Solution <br />
                Design
              </h3>
              {/* <p className="s_p m-0">
                We create stunning and user-friendly websites tailored to your
                needs.
              </p> */}
            </div>
          </Col>
          <Col md={3} xs={12} className="mb-4">
            <div className="service-card text-center">
              <div className="service_img">
                <img src={mobile} className="img-fluid" alt="" />
              </div>
              <h3 className="s_h3 m-0">
                Mobile App
                <br /> Development
              </h3>
              {/* <p className="s_p m-0">
                Our graphic designers bring your ideas to life with captivating
                visuals.
              </p> */}
            </div>
          </Col>
          <Col md={3} xs={12} className="mb-4">
            <div className="service-card text-center">
              <div className="service_img">
                <img src={web} className="img-fluid" alt="" />
              </div>
              <h3 className="s_h3 m-0">Web Application Development</h3>
              {/* <p className="s_p m-0">
                We build innovative and efficient mobile applications for iOS
                and Android.
              </p> */}
            </div>
          </Col>
          <Col md={3} xs={12} className="">
            <div className="service-card text-center">
              <div className="service_img">
                <img src={custom} className="img-fluid" alt="" />
              </div>
              <h3 className="s_h3 m-0">Custom Software Development</h3>
              {/* <p className="s_p m-0">
                We create stunning and user-friendly websites tailored to your
                needs.
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
