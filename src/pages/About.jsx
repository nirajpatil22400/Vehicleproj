// src/pages/About.js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import autocraft from "../images/autocraftmain.jpg";

const About = () => {
  return (
    <Container className="py-5">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="fw-bold mb-3">
          About <span className="text-primary">AutoCraft</span>
        </h1>
        <p className="lead text-muted">
          AutoCraft is revolutionizing the way you customize your dream car.
          Interactive, fast, and real-time.
        </p>
      </motion.div>

      <Row className="align-items-center">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={autocraft}
              // width={"70%"}
              alt="About AutoCraft"
              fluid
              rounded
            />
          </motion.div>
        </Col>

        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="fw-bold">Who We Are</h3>
            <p>
              We are a team of passionate developers, designers, and car lovers
              committed to transforming the automotive customization experience.
              Founded in 2015, AutoCraft delivers:
            </p>
            <ul>
              <li>🚗 Real-time 3D vehicle customization</li>
              <li>📱 Mobile-first user experience</li>
              <li>🔗 Direct integration with dealerships</li>
              <li>☁️ Secure cloud-based storage</li>
            </ul>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
