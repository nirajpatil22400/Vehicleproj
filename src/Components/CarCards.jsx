// import React from "react";
// import { Card, Button, Row, Col, Container } from "react-bootstrap";
// import "../css/CarCards.css"; // Optional for custom styles
// import ford from "../images/ford.jpg";
// import bmw from "../images/bmw.jpg";
// import audi from "../images/audi.jpg";
// import tesla from "../images/tesla.jpg";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// const cars = [
//   {
//     name: "Tesla Model S",
//     price: "$85,000",
//     image: tesla,
//     description: "All-electric performance with autopilot capabilities.",
//   },
//   {
//     name: "BMW M4",
//     price: "$75,000",
//     image: audi,
//     description: "Luxury sports coupe with aggressive styling.",
//   },
//   {
//     name: "Audi RS5",
//     price: "$82,000",
//     image: bmw,
//     description: "German performance with a refined interior.",
//   },
//   {
//     name: "Ford Mustang GT",
//     price: "$55,000",
//     image: ford,
//     description: "American muscle with a thunderous V8 engine.",
//   },
// ];

// const CarCards = () => {
//   return (
//     <Container className="my-5">
//       <h2 className="mb-4 text-center fw-bold">Featured Cars</h2>
//       <Row xs={1} sm={2} md={2} lg={4} className="g-4">
//         {cars.map((car, idx) => (
//           <Col key={idx}>
//             <Card className="car-card shadow-sm h-100">
//               <Card.Img variant="top" src={car.image} className="car-img" />
//               <Card.Body>
//                 <Card.Title>{car.name}</Card.Title>
//                 <Card.Text>{car.description}</Card.Text>
//               </Card.Body>
//               <Card.Footer className="d-flex justify-content-between align-items-center">
//                 <span className="fw-bold text-success">{car.price}</span>
//                 <Button
//                   variant="primary"
//                   size="sm"
//                   onClick={() => navigate(`/cars/${idx}`)}
//                 >
//                   View Details
//                 </Button>
//               </Card.Footer>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CarCards;

// import React from "react";
// import { Card, Button, Row, Col, Container } from "react-bootstrap";
// import "../css/CarCards.css"; // Optional for custom styles
// import ford from "../images/ford.jpg";
// import bmw from "../images/bmw.jpg";
// import audi from "../images/audi.jpg";
// import tesla from "../images/tesla.jpg";
// import { useNavigate } from "react-router-dom";

// const cars = [
//   {
//     name: "Tesla Model S",
//     price: "$85,000",
//     image: tesla,
//     description: "All-electric performance with autopilot capabilities.",
//   },
//   {
//     name: "BMW M4",
//     price: "$75,000",
//     image: audi,
//     description: "Luxury sports coupe with aggressive styling.",
//   },
//   {
//     name: "Audi RS5",
//     price: "$82,000",
//     image: bmw,
//     description: "German performance with a refined interior.",
//   },
//   {
//     name: "Ford Mustang GT",
//     price: "$55,000",
//     image: ford,
//     description: "American muscle with a thunderous V8 engine.",
//   },
// ];

// const CarCards = () => {
//   const navigate = useNavigate(); // <-- Move inside the function component

//   return (
//     <Container className="my-5">
//       <h2 className="mb-4 text-center fw-bold">Featured Cars</h2>
//       <Row xs={1} sm={2} md={2} lg={4} className="g-4">
//         {cars.map((car, idx) => (
//           <Col key={idx}>
//             <Card className="car-card shadow-sm h-100">
//               <Card.Img variant="top" src={car.image} className="car-img" />
//               <Card.Body>
//                 <Card.Title>{car.name}</Card.Title>
//                 <Card.Text>{car.description}</Card.Text>
//               </Card.Body>
//               <Card.Footer className="d-flex justify-content-between align-items-center">
//                 <span className="fw-bold text-success">{car.price}</span>
//                 <Button
//                   variant="primary"
//                   size="sm"
//                   onClick={() => navigate(`/cars/${idx}`)}
//                 >
//                   View Details
//                 </Button>
//               </Card.Footer>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CarCards;

// import React from "react";
// import { Card, Button, Row, Col, Container } from "react-bootstrap";
// import "../css/CarCards.css";
// import ford from "../images/ford.jpg";
// import bmw from "../images/bmw.jpg";
// import audi from "../images/audi.jpg";
// import tesla from "../images/tesla.jpg";
// import { useNavigate } from "react-router-dom";

// const cars = [
//   {
//     name: "Tesla Model S",
//     price: "$85,000",
//     image: tesla,
//     description: "All-electric performance with autopilot capabilities.",
//     images: [tesla, tesla, tesla], // Add image gallery
//     features: ["Autopilot", "Long Range", "Fast Charging"],
//   },
//   {
//     name: "BMW M4",
//     price: "$75,000",
//     image: bmw,
//     description: "Luxury sports coupe with aggressive styling.",
//     images: [bmw, bmw, bmw],
//     features: ["Turbo Engine", "Luxury Interior", "High Performance"],
//   },
//   {
//     name: "Audi RS5",
//     price: "$82,000",
//     image: audi,
//     description: "German performance with a refined interior.",
//     images: [audi, audi, audi],
//     features: ["Quattro AWD", "Premium Sound", "Sport Design"],
//   },
//   {
//     name: "Ford Mustang GT",
//     price: "$55,000",
//     image: ford,
//     description: "American muscle with a thunderous V8 engine.",
//     images: [ford, ford, ford],
//     features: ["V8 Engine", "Track Mode", "Iconic Design"],
//   },
// ];

// const CarCards = () => {
//   const navigate = useNavigate();

//   return (
//     <Container className="my-5">
//       <h2 className="mb-4 text-center fw-bold">Featured Cars</h2>
//       <Row xs={1} sm={2} md={2} lg={4} className="g-4">
//         {cars.map((car, idx) => (
//           <Col key={idx}>
//             <Card className="car-card shadow-sm h-100">
//               <Card.Img variant="top" src={car.image} className="car-img" />
//               <Card.Body>
//                 <Card.Title>{car.name}</Card.Title>
//                 <Card.Text>{car.description}</Card.Text>
//               </Card.Body>
//               <Card.Footer className="d-flex justify-content-between align-items-center">
//                 <span className="fw-bold text-success">{car.price}</span>
//                 <Button
//                   variant="primary"
//                   size="sm"
//                   onClick={() => navigate("/car-detail", { state: { car } })}
//                 >
//                   View Details
//                 </Button>
//               </Card.Footer>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CarCards;

import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/CarCards.css";

import ford1 from "../images/ford.jpg";
import ford2 from "../images/ford2.jpg";
import ford3 from "../images/ford3.jpg";

import bmw1 from "../images/bmw.jpg";
import bmw2 from "../images/ford2.jpg";
import bmw3 from "../images/ford3.jpg";

import audi1 from "../images/audi.jpg";
import audi2 from "../images/ford.jpg";
import audi3 from "../images/bmw.jpg";

import tesla1 from "../images/tesla.jpg";
import tesla2 from "../images/car3.jpg";
import tesla3 from "../images/ford2.jpg";

const cars = [
  {
    name: "Tesla Model S",
    price: "$85,000",
    image: tesla1,
    description: "All-electric performance with autopilot capabilities.",
    images: [tesla1, tesla2, tesla3],
    features: ["Autopilot", "Long Range", "Fast Charging"],
  },
  {
    name: "BMW M4",
    price: "$75,000",
    image: bmw1,
    description: "Luxury sports coupe with aggressive styling.",
    images: [bmw1, bmw2, bmw3],
    features: ["Turbo Engine", "Luxury Interior", "High Performance"],
  },
  {
    name: "Audi RS5",
    price: "$82,000",
    image: audi1,
    description: "German performance with a refined interior.",
    images: [audi1, audi2, audi3],
    features: ["Quattro AWD", "Premium Sound", "Sport Design"],
  },
  {
    name: "Ford Mustang GT",
    price: "$55,000",
    image: ford1,
    description: "American muscle with a thunderous V8 engine.",
    images: [ford1, ford2, ford3],
    features: ["V8 Engine", "Track Mode", "Iconic Design"],
  },
];

const CarCards = () => {
  const navigate = useNavigate();

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
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate("/car-detail", { state: { car } })}
                >
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
