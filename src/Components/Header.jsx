import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/Header.css";
import logo from "../images/logo.png"; // Replace with your monogram/logo image
import banner from "../images/ford3.jpg"; // Replace with your background/banner image

const Header = ({ userName }) => {
  return (
    <div
      className="header-banner"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <Container className="h-100 position-relative">
        <div className="center-content text-center">
          <Image src={logo} roundedCircle className="logo-img mb-3" />
          <h1 className="fw-bold text-white">SuperCars Dealership</h1>
        </div>
        <div className="bottom-right text-white">
          <h5>Welcome {userName}</h5>
        </div>
      </Container>
    </div>
  );
};

export default Header;
