// src/pages/Services.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaCar,
  FaRocket,
  FaCloud,
  FaUsers,
  FaMobileAlt,
  FaCogs,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCar size={40} className="text-primary" />,
      title: "3D Car Configurator",
      text: "Visualize and customize cars with a real-time 3D model.",
    },
    {
      icon: <FaRocket size={40} className="text-success" />,
      title: "Augmented Reality",
      text: "Preview your vehicle in the real world using AR.",
    },
    {
      icon: <FaCloud size={40} className="text-info" />,
      title: "Cloud Sync",
      text: "Save and access your custom builds from any device.",
    },
    {
      icon: <FaUsers size={40} className="text-warning" />,
      title: "User Profiles",
      text: "Manage saved cars, history, and preferences.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-danger" />,
      title: "Mobile Experience",
      text: "Fully responsive mobile support for all devices.",
    },
    {
      icon: <FaCogs size={40} className="text-dark" />,
      title: "Dealer Integration",
      text: "Connect directly with dealerships to finalize your purchase.",
    },
  ];

  return (
    <Container className="py-5">
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="fw-bold">
          Our <span className="text-success">Services</span>
        </h2>
        <p className="text-muted">
          Discover how AutoCraft enhances your vehicle customization journey.
        </p>
      </motion.div>

      <Row xs={1} md={3} className="g-4">
        {services.map((service, index) => (
          <Col key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="text-center p-3 h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="mb-3">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
