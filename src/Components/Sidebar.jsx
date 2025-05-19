import React, { useState } from "react";
import { Collapse, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // ✅ Use this
import "../css/Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="sidebar d-flex flex-column p-3 bg-dark text-white">
      <Button
        variant="secondary"
        className="mb-3"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-links"
        aria-expanded={open}
      >
        ☰ Menu
      </Button>

      <Collapse in={open}>
        <Nav className="flex-column" id="collapse-links">
          <Nav.Link as={NavLink} to="/about-us" activeClassName="active">
            About Us
          </Nav.Link>
          <Nav.Link as={NavLink} to="/signup" activeClassName="active">
            Registration
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact-us" activeClassName="active">
            Contact Us
          </Nav.Link>
          <Nav.Link as={NavLink} to="/feedback" activeClassName="active">
            Feedback
          </Nav.Link>
        </Nav>
      </Collapse>
    </div>
  );
};

export default Sidebar;
