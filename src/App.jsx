import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Accordion } from "@mui/material";
import AccordionUsage from "./Components/AccordionUsage";
// import SelectVehicleSegment from "./Components/SelectVehicleSegment";
// import VehicleConfigurator from "./Components/VehicleConfigurator";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      {/* <SelectVehicleSegment /> */}
      {/* <VehicleConfigurator /> */}
      <AccordionUsage />
      <Footer />
    </Router>
  );
}

export default App;
