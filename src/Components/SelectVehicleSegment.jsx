import React, { useState } from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";
import { FaCar, FaCheckCircle } from "react-icons/fa";
import "../App.css";

const SelectVehicleSegment = () => {
  const [selectedSegment, setSelectedSegment] = useState("");

  const segments = [
    "Small Cars",
    "Compact Cars",
    "Sedan",
    "Luxury Cars",
    "SUVs",
  ];

  const handleSelect = (e) => {
    setSelectedSegment(e.target.value);
  };

  return (
    <Container className="my-4">
      <Card className="p-4 shadow-lg border-light rounded">
        <Card.Body>
          <h4 className="mb-4 text-primary">
            <FaCar /> Select Vehicle Segment
          </h4>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="vehicleSegment">
                  <Form.Label>Select Segment / Class of Vehicle</Form.Label>
                  <Form.Select
                    value={selectedSegment}
                    onChange={handleSelect}
                    className="custom-select"
                  >
                    <option value="">-- Select a Segment --</option>
                    {segments.map((segment, index) => (
                      <option key={index} value={segment}>
                        {segment}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          {selectedSegment && (
            <div className="mt-4">
              <h5 className="text-success">
                <FaCheckCircle /> You have selected: {selectedSegment}
              </h5>
            </div>
          )}

          <Button variant="primary" className="mt-3">
            Proceed to Configuration
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SelectVehicleSegment;
