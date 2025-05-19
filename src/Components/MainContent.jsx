import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Feedback from "../pages/Feedback";
// import Footer from "./Components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Accordion } from "@mui/material";
// import AccordionUsage from "./Components/AccordionUsage";
// import SelectVehicleSegment from "./Components/SelectVehicleSegment";
// import VehicleConfigurator from "./Components/VehicleConfigurator";
import "bootstrap/dist/css/bootstrap.min.css";

import CarCards from "./CarCards";
import CarDetail from "./CarDetail";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import MainContent from "../Components/MainContent";

// import VehicleConfigurator from "../Components/VehicleConfigurator";

import "../App.css";
const MainContent = () => {
  return (
    <div className="main-content">
      {/* <h2>Welcome to CarWorld</h2>
      <p>This is where your main content will go.</p> */}
      {/* <VehicleConfigurator /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/cars" element={<CarCards />} />
        <Route path="/cars/:carId" element={<CarDetail />} /> */}
        <Route path="/car" element={<CarCards />} />
        <Route path="/car-detail" element={<CarDetail />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};
export default MainContent;
