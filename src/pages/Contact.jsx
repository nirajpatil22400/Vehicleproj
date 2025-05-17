// src/pages/Contact.js
import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="py-5">
      {/* Header */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="fw-bold">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-muted lead">
          We’re here to assist you with your vehicle customization needs.
          Connect with our expert team today.
        </p>
      </motion.div>

      <Row>
        {/* Contact Form */}
        <Col md={7}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Card className="p-4 shadow-sm border-0">
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type your query subject"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message here..."
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card>
          </motion.div>
        </Col>

        {/* Contact Info */}
        <Col md={5} className="mt-4 mt-md-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Card className="p-4 shadow-sm border-0 h-100">
              <h5 className="fw-bold mb-4">Contact Information</h5>
              <div className="mb-3 d-flex align-items-start">
                <FaMapMarkedAlt size={24} className="me-3 text-primary" />
                <div>
                  <strong>Office Address:</strong>
                  <br />
                  AutoCraft Labs, TechPark Avenue,
                  <br />
                  Pune, Maharashtra, India
                </div>
              </div>

              <div className="mb-3 d-flex align-items-start">
                <FaPhone size={22} className="me-3 text-success" />
                <div>
                  <strong>Phone:</strong>
                  <br />
                  +91 9876543210
                </div>
              </div>

              <div className="d-flex align-items-start">
                <FaEnvelope size={22} className="me-3 text-danger" />
                <div>
                  <strong>Email:</strong>
                  <br />
                  support@autocraft.io
                </div>
              </div>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
