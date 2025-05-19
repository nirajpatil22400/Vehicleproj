import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./Components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Accordion } from "@mui/material";
import AccordionUsage from "./Components/AccordionUsage";
// import SelectVehicleSegment from "./Components/SelectVehicleSegment";
// import VehicleConfigurator from "./Components/VehicleConfigurator";
import "bootstrap/dist/css/bootstrap.min.css";

import CarCards from "./Components/CarCards";
import CarDetail from "./Components/CarDetail";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";

import "./App.css";

function App() {
  return (
    <Router>
      <Header userName="Niraj Patil" />
      <ResponsiveAppBar />
      <div className="app-container">
        <Sidebar />
        <MainContent />
      </div>
      {/* <SelectVehicleSegment /> */}
      {/* <VehicleConfigurator /> */}
      <AccordionUsage />
      <Footer />
    </Router>
  );
}

export default App;
