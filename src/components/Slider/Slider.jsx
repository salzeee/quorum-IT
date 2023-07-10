import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide01 from "../../assets/Slide01.png";
import slide02 from "../../assets/Slide02.png";
import slide03 from "../../assets/Slide03.png";
import {Button} from 'react-bootstrap'
import "./slider.css";

const Slider = () => {

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
    <Carousel className="my-carousel" interval={2000} controls={false}>
      <Carousel.Item className="carousel-item c_item">
        <div className="image-container">
          <img
            className="d-block w-100 img-fluid"
            src={slide01}
            alt="First_slide"
          />
        </div>
        <Carousel.Caption className="carousel-caption text-left">
          <h3>We provide outstanding digital solutions</h3>
          <Button
            className="s_btn"
            onClick={(e) => handleNavLinkClick(e, "about")}
          >
            Learn More
          </Button>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div className="image-container">
          <img
            className="d-block w-100 img-fluid"
            src={slide02}
            alt="Second_slide"
          />
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>
            We aim to solve your business problems, and deliver your product
            needs
          </h3>
          <Button
            className="s_btn"
            onClick={(e) => handleNavLinkClick(e, "about")}
          >
            Learn More
          </Button>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div className="image-container">
          <img
            className="d-block w-100 img-fluid"
            src={slide03}
            alt="Third_slide"
          />
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>We are obsessed with customer satisfaction</h3>
          <Button
            className="s_btn"
            onClick={(e) => handleNavLinkClick(e, "about")}
          >
            Learn More
          </Button>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
