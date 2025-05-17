import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "../css/CarCards.css"; // Optional for custom styles
import ford from "../images/ford.jpg";
import bmw from "../images/bmw.jpg";
import audi from "../images/audi.jpg";
import tesla from "../images/tesla.jpg";

const cars = [
  {
    name: "Tesla Model S",
    price: "$85,000",
    image: tesla,
    description: "All-electric performance with autopilot capabilities.",
  },
  {
    name: "BMW M4",
    price: "$75,000",
    image: audi,
    description: "Luxury sports coupe with aggressive styling.",
  },
  {
    name: "Audi RS5",
    price: "$82,000",
    image: bmw,
    description: "German performance with a refined interior.",
  },
  {
    name: "Ford Mustang GT",
    price: "$55,000",
    image: ford,
    description: "American muscle with a thunderous V8 engine.",
  },
];

const CarCards = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center fw-bold">Featured Cars</h2>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        {cars.map((car, idx) => (
          <Col key={idx}>
            <Card className="car-card shadow-sm h-100">
              <Card.Img variant="top" src={car.image} className="car-img" />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>{car.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <span className="fw-bold text-success">{car.price}</span>
                <Button variant="primary" size="sm">
                  View Details
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarCards;
