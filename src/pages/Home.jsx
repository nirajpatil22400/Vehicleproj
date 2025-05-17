import CarCarousel from "../Components/CarCarousel";
import VehicleConfigurator from "../Components/VehicleConfigurator";
import CarCards from "../Components/CarCards";
export default function Home() {
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <CarCarousel />
      <CarCards />
      <VehicleConfigurator />
    </>
  );
}
