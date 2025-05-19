import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Modal,
  Form,
} from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
// import "../css/CarDetail.css"; // Optional: custom styling if you want

const CarDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // car object passed from previous page
  const car = location.state?.car;

  if (!car) {
    return (
      <Container className="text-center mt-5">
        <h3>No car details available.</h3>
        <Button onClick={() => navigate("/")}>Go Back</Button>
      </Container>
    );
  }

  const [selectedImg, setSelectedImg] = useState(car.images[0]);
  const [showInvoice, setShowInvoice] = useState(false);
  const [config, setConfig] = useState({
    color: "Red",
    wheels: '19"',
    interior: "Black",
  });

  const handleShowInvoice = () => setShowInvoice(true);
  const handleCloseInvoice = () => setShowInvoice(false);

  return (
    <Container className="my-5">
      <Row>
        {/* Image Section */}
        <Col md={6}>
          <Image src={selectedImg} fluid rounded className="shadow mb-3" />

          <Row className="g-2">
            {car.images.map((img, idx) => (
              <Col xs={3} key={idx}>
                <Image
                  src={img}
                  thumbnail
                  onClick={() => setSelectedImg(img)}
                  style={{
                    cursor: "pointer",
                    border: selectedImg === img ? "2px solid #0d6efd" : "none",
                  }}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Details Section */}
        <Col md={6}>
          <h2>{car.name}</h2>
          <h4 className="text-success fw-bold">{car.price}</h4>
          <p>{car.description}</p>

          <h5 className="mt-4">Key Features</h5>
          <ul className="list-unstyled">
            {car.features.map((f, idx) => (
              <li key={idx}>
                <FaCheckCircle className="text-success me-2" />
                {f}
              </li>
            ))}
          </ul>

          <h5 className="mt-4">Customize Your Car</h5>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Color</Form.Label>
              <Form.Select
                value={config.color}
                onChange={(e) =>
                  setConfig({ ...config, color: e.target.value })
                }
              >
                <option>Red</option>
                <option>Black</option>
                <option>White</option>
                <option>Blue</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Wheels</Form.Label>
              <Form.Select
                value={config.wheels}
                onChange={(e) =>
                  setConfig({ ...config, wheels: e.target.value })
                }
              >
                <option>19"</option>
                <option>20" Sport</option>
                <option>21" Performance</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Interior</Form.Label>
              <Form.Select
                value={config.interior}
                onChange={(e) =>
                  setConfig({ ...config, interior: e.target.value })
                }
              >
                <option>Black</option>
                <option>White</option>
                <option>Beige</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" onClick={handleShowInvoice}>
              Generate Invoice
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Invoice Modal */}
      <Modal show={showInvoice} onHide={handleCloseInvoice} centered>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Model:</strong> {car.name}
          </p>
          <p>
            <strong>Base Price:</strong> {car.price}
          </p>
          <p>
            <strong>Selected Color:</strong> {config.color}
          </p>
          <p>
            <strong>Wheels:</strong> {config.wheels}
          </p>
          <p>
            <strong>Interior:</strong> {config.interior}
          </p>
          <p>
            <strong>Total Estimate:</strong> $92,500 (includes taxes +
            customizations)
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInvoice}>
            Close
          </Button>
          <Button variant="success">Proceed to Booking</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CarDetailPage;
