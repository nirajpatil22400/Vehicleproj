import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "../css/CarCarousel.css"; // for custom styles
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";

const CarCarousel = () => {
  const cars = [
    {
      title: "Lamborghini Aventador",
      description:
        "Experience the power and luxury of true Italian engineering.",
      img: car1,
    },
    {
      title: "Porsche 911 Turbo S",
      description: "Timeless design meets next-gen performance.",
      img: car2,
    },
    {
      title: "Ferrari SF90 Stradale",
      description: "The ultimate hybrid supercar redefining speed and beauty.",
      img: car3,
    },
  ];

  return (
    <Container fluid className="p-0">
      <Carousel fade controls indicators>
        {cars.map((car, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={car.img}
              alt={car.title}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
              <h3>{car.title}</h3>
              <p>{car.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarCarousel;
