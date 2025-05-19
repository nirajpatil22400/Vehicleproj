// import React, { useState } from "react";
// import {
//   Container,
//   Form,
//   Row,
//   Col,
//   Card,
//   Button,
//   ListGroup,
//   Alert,
// } from "react-bootstrap";

// const data = {
//   "Small Cars": {
//     manufacturers: {
//       Toyota: {
//         models: {
//           Yaris: 15000,
//           Corolla: 18000,
//         },
//       },
//       Honda: {
//         models: {
//           Fit: 14000,
//           Civic: 19000,
//         },
//       },
//     },
//   },
//   SUVs: {
//     manufacturers: {
//       Ford: {
//         models: {
//           Explorer: 32000,
//           Escape: 28000,
//         },
//       },
//       Jeep: {
//         models: {
//           Wrangler: 35000,
//           Cherokee: 30000,
//         },
//       },
//     },
//   },
// };

// const configurableItems = {
//   tires: ["Standard", "Sport", "Off-road"],
//   bodyColor: ["Red", "Blue", "Black", "White"],
//   bumperColor: ["Black", "Chrome", "Body Color"],
//   seats: ["Cloth", "Leather", "Sport"],
//   musicSystem: ["Basic", "Premium", "Surround Sound"],
// };

// const accessoriesList = [
//   "Sunroof",
//   "GPS Navigation",
//   "Backup Camera",
//   "Heated Seats",
// ];

// const MIN_QUANTITY = 1;

// const VehicleConfigurator = () => {
//   const [step, setStep] = useState(1);

//   // Selected options
//   const [segment, setSegment] = useState("");
//   const [manufacturer, setManufacturer] = useState("");
//   const [model, setModel] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [quantityError, setQuantityError] = useState("");

//   // Configurable options state
//   const [config, setConfig] = useState({
//     tires: configurableItems.tires[0],
//     bodyColor: configurableItems.bodyColor[0],
//     bumperColor: configurableItems.bumperColor[0],
//     seats: configurableItems.seats[0],
//     musicSystem: configurableItems.musicSystem[0],
//   });

//   // Accessories state
//   const [accessories, setAccessories] = useState([]);

//   // Confirmation and Invoice
//   const [invoiceConfirmed, setInvoiceConfirmed] = useState(false);

//   // Helpers to get available manufacturers and models based on selections
//   const manufacturers = segment
//     ? Object.keys(data[segment]?.manufacturers || {})
//     : [];
//   const models = manufacturer
//     ? Object.keys(data[segment]?.manufacturers[manufacturer]?.models || {})
//     : [];

//   // Price of selected model
//   const basePrice =
//     segment && manufacturer && model
//       ? data[segment].manufacturers[manufacturer].models[model]
//       : 0;

//   // Accessories prices (fixed for demo)
//   const accessoryPrices = {
//     Sunroof: 1000,
//     "GPS Navigation": 600,
//     "Backup Camera": 500,
//     "Heated Seats": 800,
//   };

//   // Calculate total price based on base price * quantity + accessories
//   const accessoriesTotal = accessories.reduce(
//     (sum, acc) => sum + accessoryPrices[acc],
//     0
//   );
//   const totalPrice = basePrice * quantity + accessoriesTotal;

//   // Handlers
//   const handleNextStep = () => {
//     if (step === 3) {
//       // Validate quantity
//       if (quantity < MIN_QUANTITY) {
//         setQuantityError(`Minimum quantity is ${MIN_QUANTITY}`);
//         return;
//       }
//       setQuantityError("");
//     }
//     setStep(step + 1);
//   };

//   const handlePrevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleAccessoryChange = (acc) => {
//     if (accessories.includes(acc)) {
//       setAccessories(accessories.filter((a) => a !== acc));
//     } else {
//       setAccessories([...accessories, acc]);
//     }
//   };

//   const handleConfirmInvoice = () => {
//     // Simulate email sending with alert or console log
//     alert(
//       `Invoice confirmed!\n\nTotal Price: $${totalPrice.toLocaleString()}\n\nThank you for your purchase.`
//     );
//     setInvoiceConfirmed(true);
//   };

//   const handleModifyConfig = () => {
//     setInvoiceConfirmed(false);
//     setStep(5); // Go back to configuration step
//   };

//   return (
//     <Container className="my-4">
//       <Card className="p-4 shadow-lg">
//         <Card.Body>
//           <h3 className="mb-4 text-primary">Vehicle Configurator (V-Conf)</h3>

//           {step === 1 && (
//             <>
//               <Form.Group className="mb-3">
//                 <Form.Label>Select Vehicle Segment</Form.Label>
//                 <Form.Select
//                   value={segment}
//                   onChange={(e) => {
//                     setSegment(e.target.value);
//                     setManufacturer("");
//                     setModel("");
//                   }}
//                 >
//                   <option value="">-- Select Segment --</option>
//                   {Object.keys(data).map((seg) => (
//                     <option key={seg} value={seg}>
//                       {seg}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//               <Button disabled={!segment} onClick={handleNextStep}>
//                 Next
//               </Button>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <Form.Group className="mb-3">
//                 <Form.Label>Select Manufacturer</Form.Label>
//                 <Form.Select
//                   value={manufacturer}
//                   onChange={(e) => {
//                     setManufacturer(e.target.value);
//                     setModel("");
//                   }}
//                 >
//                   <option value="">-- Select Manufacturer --</option>
//                   {manufacturers.map((m) => (
//                     <option key={m} value={m}>
//                       {m}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//               <Button
//                 variant="secondary"
//                 onClick={handlePrevStep}
//                 className="me-2"
//               >
//                 Back
//               </Button>
//               <Button disabled={!manufacturer} onClick={handleNextStep}>
//                 Next
//               </Button>
//             </>
//           )}

//           {step === 3 && (
//             <>
//               <Form.Group className="mb-3">
//                 <Form.Label>Select Model</Form.Label>
//                 <Form.Select
//                   value={model}
//                   onChange={(e) => setModel(e.target.value)}
//                 >
//                   <option value="">-- Select Model --</option>
//                   {models.map((mo) => (
//                     <option key={mo} value={mo}>
//                       {mo}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Enter Quantity (Min {MIN_QUANTITY})</Form.Label>
//                 <Form.Control
//                   type="number"
//                   min={MIN_QUANTITY}
//                   value={quantity}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                 />
//                 {quantityError && (
//                   <Form.Text className="text-danger">{quantityError}</Form.Text>
//                 )}
//               </Form.Group>

//               <Button
//                 variant="secondary"
//                 onClick={handlePrevStep}
//                 className="me-2"
//               >
//                 Back
//               </Button>
//               <Button
//                 disabled={!model || !quantity || quantity < MIN_QUANTITY}
//                 onClick={handleNextStep}
//               >
//                 Next
//               </Button>
//             </>
//           )}

//           {step === 4 && (
//             <>
//               <h5>Basic Configuration</h5>
//               <ListGroup variant="flush" className="mb-3">
//                 <ListGroup.Item>
//                   <strong>Segment:</strong> {segment}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Manufacturer:</strong> {manufacturer}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Model:</strong> {model}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Quantity:</strong> {quantity}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Base Price per unit:</strong> $
//                   {basePrice.toLocaleString()}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Total Price:</strong> $
//                   {(basePrice * quantity).toLocaleString()}
//                 </ListGroup.Item>
//               </ListGroup>

//               <Button
//                 variant="secondary"
//                 onClick={handlePrevStep}
//                 className="me-2"
//               >
//                 Back
//               </Button>
//               <Button
//                 variant="success"
//                 onClick={() => alert("Confirmed basic configuration!")}
//               >
//                 Confirm
//               </Button>
//               <Button
//                 variant="warning"
//                 onClick={() => setStep(5)}
//                 className="ms-2"
//               >
//                 Configure
//               </Button>
//             </>
//           )}

//           {step === 5 && (
//             <>
//               <h5>Customize Your Vehicle</h5>

//               <Form>
//                 {Object.entries(configurableItems).map(([key, options]) => (
//                   <Form.Group key={key} className="mb-3">
//                     <Form.Label>
//                       {key.charAt(0).toUpperCase() + key.slice(1)}
//                     </Form.Label>
//                     <Form.Select
//                       value={config[key]}
//                       onChange={(e) =>
//                         setConfig({ ...config, [key]: e.target.value })
//                       }
//                     >
//                       {options.map((option) => (
//                         <option key={option} value={option}>
//                           {option}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Form.Group>
//                 ))}

//                 <Form.Group className="mb-3">
//                   <Form.Label>Add Accessories</Form.Label>
//                   {accessoriesList.map((acc) => (
//                     <Form.Check
//                       key={acc}
//                       type="checkbox"
//                       label={`${acc} (+$${accessoryPrices[acc]})`}
//                       checked={accessories.includes(acc)}
//                       onChange={() => handleAccessoryChange(acc)}
//                     />
//                   ))}
//                 </Form.Group>
//               </Form>

//               <Button
//                 variant="secondary"
//                 onClick={() => setStep(4)}
//                 className="me-2"
//               >
//                 Back
//               </Button>
//               <Button variant="primary" onClick={() => setStep(6)}>
//                 Review Invoice
//               </Button>
//             </>
//           )}

//           {step === 6 && (
//             <>
//               <h5>Invoice</h5>
//               <ListGroup className="mb-3">
//                 <ListGroup.Item>
//                   <strong>Segment:</strong> {segment}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Manufacturer:</strong> {manufacturer}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Model:</strong> {model}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Quantity:</strong> {quantity}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Base Price per unit:</strong> $
//                   {basePrice.toLocaleString()}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Selected Configuration:</strong>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <ul>
//                     {Object.entries(config).map(([key, val]) => (
//                       <li key={key}>
//                         {key.charAt(0).toUpperCase() + key.slice(1)}: {val}
//                       </li>
//                     ))}
//                   </ul>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Accessories:</strong>{" "}
//                   {accessories.length > 0 ? accessories.join(", ") : "None"}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Accessories Total:</strong> $
//                   {accessoriesTotal.toLocaleString()}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Total Price:</strong> ${totalPrice.toLocaleString()}
//                 </ListGroup.Item>
//               </ListGroup>

//               {!invoiceConfirmed ? (
//                 <>
//                   <Button
//                     variant="secondary"
//                     onClick={handleModifyConfig}
//                     className="me-2"
//                   >
//                     Modify Configuration
//                   </Button>
//                   <Button variant="success" onClick={handleConfirmInvoice}>
//                     Confirm Invoice
//                   </Button>
//                 </>
//               ) : (
//                 <Alert variant="success">
//                   Invoice has been sent to your email!
//                 </Alert>
//               )}
//             </>
//           )}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default VehicleConfigurator;

//second code
// import React, { useState } from "react";
// import {
//   Container,
//   Card,
//   Button,
//   Form,
//   Row,
//   Col,
//   ListGroup,
//   Alert,
// } from "react-bootstrap";
// import jsPDF from "jspdf";

// const data = {
//   SUV: {
//     Toyota: {
//       RAV4: 30000,
//       Highlander: 40000,
//     },
//     Ford: {
//       Explorer: 35000,
//       Escape: 28000,
//     },
//   },
//   Sedan: {
//     Honda: {
//       Accord: 25000,
//       Civic: 22000,
//     },
//     BMW: {
//       "3 Series": 41000,
//       "5 Series": 53000,
//     },
//   },
//   Truck: {
//     Ford: {
//       F150: 45000,
//       Ranger: 32000,
//     },
//     Chevrolet: {
//       Silverado: 48000,
//       Colorado: 36000,
//     },
//   },
//   Convertible: {
//     Mazda: {
//       MX5: 27000,
//     },
//     BMW: {
//       Z4: 49000,
//     },
//   },
//   Hatchback: {
//     Volkswagen: {
//       Golf: 23000,
//     },
//     Hyundai: {
//       i30: 21000,
//     },
//   },
// };

// const configurableItems = {
//   tires: ["Standard", "Off-road", "Sport"],
//   bodyColor: ["Red", "Blue", "Black", "White", "Silver"],
//   seats: ["Cloth", "Leather", "Luxury Leather"],
//   transmission: ["Manual", "Automatic"],
// };

// const accessoriesList = [
//   "Sunroof",
//   "Roof Rack",
//   "Backup Camera",
//   "Bluetooth Audio",
//   "Heated Seats",
//   "GPS Navigation",
// ];

// const MIN_QUANTITY = 1;

// const VehicleConfigurator = () => {
//   const [step, setStep] = useState(1);
//   const [segment, setSegment] = useState("");
//   const [manufacturer, setManufacturer] = useState("");
//   const [model, setModel] = useState("");
//   const [quantity, setQuantity] = useState(MIN_QUANTITY);
//   const [config, setConfig] = useState({
//     tires: configurableItems.tires[0],
//     bodyColor: configurableItems.bodyColor[0],
//     seats: configurableItems.seats[0],
//     transmission: configurableItems.transmission[0],
//   });
//   const [accessories, setAccessories] = useState([]);
//   const [invoiceConfirmed, setInvoiceConfirmed] = useState(false);

//   const manufacturers = segment ? Object.keys(data[segment]) : [];
//   const models = manufacturer ? Object.keys(data[segment][manufacturer]) : [];
//   const basePrice = model ? data[segment][manufacturer][model] : 0;

//   const accessoriesPrices = {
//     Sunroof: 1000,
//     "Roof Rack": 500,
//     "Backup Camera": 700,
//     "Bluetooth Audio": 400,
//     "Heated Seats": 600,
//     "GPS Navigation": 1200,
//   };

//   const accessoriesTotal = accessories.reduce(
//     (acc, item) => acc + (accessoriesPrices[item] || 0),
//     0
//   );

//   const totalPrice = (basePrice + accessoriesTotal) * quantity;

//   const handleAccessoryChange = (item) => {
//     if (accessories.includes(item)) {
//       setAccessories(accessories.filter((acc) => acc !== item));
//     } else {
//       setAccessories([...accessories, item]);
//     }
//   };

//   const handleNextStep = () => {
//     if (step === 1 && !segment) return alert("Please select a segment");
//     if (step === 2 && !manufacturer)
//       return alert("Please select a manufacturer");
//     if (step === 3) {
//       if (!model) return alert("Please select a model");
//       if (quantity < MIN_QUANTITY)
//         return alert(`Quantity must be at least ${MIN_QUANTITY}`);
//     }
//     setStep(step + 1);
//   };

//   const handlePrevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleConfirmInvoice = () => {
//     setInvoiceConfirmed(true);
//   };

//   const handleModifyConfig = () => {
//     setInvoiceConfirmed(false);
//     setStep(1);
//     setSegment("");
//     setManufacturer("");
//     setModel("");
//     setQuantity(MIN_QUANTITY);
//     setConfig({
//       tires: configurableItems.tires[0],
//       bodyColor: configurableItems.bodyColor[0],
//       seats: configurableItems.seats[0],
//       transmission: configurableItems.transmission[0],
//     });
//     setAccessories([]);
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text("KOENGSEGG - Vehicle Purchase Invoice", 14, 20);

//     doc.setFontSize(12);
//     doc.text(`Segment: ${segment}`, 14, 40);
//     doc.text(`Manufacturer: ${manufacturer}`, 14, 50);
//     doc.text(`Model: ${model}`, 14, 60);
//     doc.text(`Quantity: ${quantity}`, 14, 70);
//     doc.text(`Base Price (per unit): $${basePrice.toLocaleString()}`, 14, 80);

//     let y = 90;
//     doc.text("Configuration:", 14, y);
//     Object.entries(config).forEach(([key, val]) => {
//       y += 10;
//       doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}`, 20, y);
//     });

//     y += 10;
//     doc.text("Accessories:", 14, y);
//     if (accessories.length > 0) {
//       accessories.forEach((acc) => {
//         y += 10;
//         doc.text(`${acc} ($${accessoriesPrices[acc] || 0})`, 20, y);
//       });
//     } else {
//       y += 10;
//       doc.text("None", 20, y);
//     }

//     y += 15;
//     doc.text(
//       `Accessories Total Price: $${accessoriesTotal.toLocaleString()}`,
//       14,
//       y
//     );
//     y += 10;
//     doc.setFontSize(14);
//     doc.text(`Total Price: $${totalPrice.toLocaleString()}`, 14, y);

//     doc.save(`Invoice_${model}_${Date.now()}.pdf`);
//   };

//   return (
//     <Container className="my-4">
//       <Card>
//         <Card.Body>
//           <h3 className="mb-4">Vehicle Configurator</h3>

//           {step === 1 && (
//             <>
//               <h5>Select Vehicle Segment</h5>
//               <Form.Group>
//                 <Form.Select
//                   value={segment}
//                   onChange={(e) => {
//                     setSegment(e.target.value);
//                     setManufacturer("");
//                     setModel("");
//                   }}
//                 >
//                   <option value="">-- Select Segment --</option>
//                   {Object.keys(data).map((seg) => (
//                     <option key={seg} value={seg}>
//                       {seg}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//               <Button className="mt-3" onClick={handleNextStep}>
//                 Next
//               </Button>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h5>Select Manufacturer</h5>
//               <Form.Group>
//                 <Form.Select
//                   value={manufacturer}
//                   onChange={(e) => {
//                     setManufacturer(e.target.value);
//                     setModel("");
//                   }}
//                 >
//                   <option value="">-- Select Manufacturer --</option>
//                   {manufacturers.map((man) => (
//                     <option key={man} value={man}>
//                       {man}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//               <Button
//                 variant="secondary"
//                 onClick={handlePrevStep}
//                 className="me-2 mt-3"
//               >
//                 Back
//               </Button>
//               <Button className="mt-3" onClick={handleNextStep}>
//                 Next
//               </Button>
//             </>
//           )}

//           {step === 3 && (
//             <>
//               <h5>Select Model and Quantity</h5>
//               <Form.Group>
//                 <Form.Select
//                   value={model}
//                   onChange={(e) => setModel(e.target.value)}
//                 >
//                   <option value="">-- Select Model --</option>
//                   {models.map((mod) => (
//                     <option key={mod} value={mod}>
//                       {mod}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               <Form.Group className="mt-3">
//                 <Form.Label>Quantity</Form.Label>
//                 <Form.Control
//                   type="number"
//                   min={MIN_QUANTITY}
//                   value={quantity}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                 />
//               </Form.Group>

//               <Button
//                 variant="secondary"
//                 onClick={handlePrevStep}
//                 className="me-2 mt-3"
//               >
//                 Back
//               </Button>
//               <Button className="mt-3" onClick={handleNextStep}>
//                 Next
//               </Button>
//             </>
//           )}

//           {step === 4 && (
//             <>
//               <h5>Configure Your Vehicle</h5>
//               <Row>
//                 {Object.entries(configurableItems).map(([key, options]) => (
//                   <Col key={key} md={6} lg={4} className="mb-3">
//                     <Form.Group>
//                       <Form.Label>
//                         {key.charAt(0).toUpperCase() + key.slice(1)}
//                       </Form.Label>
//                       <Form.Select
//                         value={config[key]}
//                         onChange={(e) =>
//                           setConfig({ ...config, [key]: e.target.value })
//                         }
//                       >
//                         {options.map((opt) => (
//                           <option key={opt} value={opt}>
//                             {opt}
//                           </option>
//                         ))}
//                       </Form.Select>
//                     </Form.Group>
//                   </Col>
//                 ))}
//               </Row>
//               <Button
//                 variant="secondary"
//                 onClick={handlePrevStep}
//                 className="me-2"
//               >
//                 Back
//               </Button>
//               <Button onClick={handleNextStep}>Next</Button>
//             </>
//           )}

//           {step === 5 && (
//             <>
//               <h5>Select Accessories</h5>
//               <Form.Group>
//                 {accessoriesList.map((acc) => (
//                   <Form.Check
//                     key={acc}
//                     type="checkbox"
//                     label={acc}
//                     checked={accessories.includes(acc)}
//                     onChange={() => handleAccessoryChange(acc)}
//                     className="mb-2"
//                   />
//                 ))}
//               </Form.Group>
//               <Button
//                 variant="secondary"
//                 onClick={handlePrevStep}
//                 className="me-2"
//               >
//                 Back
//               </Button>
//               <Button onClick={handleNextStep}>Next</Button>
//             </>
//           )}

//           {step === 6 && (
//             <>
//               <h5>Invoice Summary</h5>
//               <ListGroup variant="flush" className="mb-3">
//                 <ListGroup.Item>
//                   <strong>Segment:</strong> {segment}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Manufacturer:</strong> {manufacturer}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Model:</strong> {model}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Quantity:</strong> {quantity}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Base Price (per unit):</strong> $
//                   {basePrice.toLocaleString()}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Configuration:</strong>
//                   <ul>
//                     {Object.entries(config).map(([key, val]) => (
//                       <li key={key}>
//                         {key.charAt(0).toUpperCase() + key.slice(1)}: {val}
//                       </li>
//                     ))}
//                   </ul>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Accessories:</strong>{" "}
//                   {accessories.length > 0 ? accessories.join(", ") : "None"}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Accessories Price:</strong> $
//                   {accessoriesTotal.toLocaleString()}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Total Price:</strong> ${totalPrice.toLocaleString()}
//                 </ListGroup.Item>
//               </ListGroup>

//               {!invoiceConfirmed ? (
//                 <>
//                   <Button
//                     variant="secondary"
//                     onClick={handlePrevStep}
//                     className="me-2"
//                   >
//                     Back
//                   </Button>
//                   <Button variant="success" onClick={handleConfirmInvoice}>
//                     Confirm Invoice
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Alert variant="success">Invoice confirmed!</Alert>
//                   <Button
//                     variant="primary"
//                     onClick={downloadPDF}
//                     className="me-2"
//                   >
//                     Download Invoice (PDF)
//                   </Button>
//                   <Button variant="warning" onClick={handleModifyConfig}>
//                     Modify Configuration
//                   </Button>
//                 </>
//               )}
//             </>
//           )}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default VehicleConfigurator;

//third
// import React, { useState } from "react";
// import {
//   Container,
//   Card,
//   Button,
//   Form,
//   Row,
//   Col,
//   ListGroup,
//   Alert,
// } from "react-bootstrap";
// import jsPDF from "jspdf";

// const data = {
//   SUV: {
//     Toyota: { RAV4: 30000, Highlander: 40000 },
//     Ford: { Explorer: 35000, Escape: 28000 },
//   },
//   Sedan: {
//     Honda: { Accord: 25000, Civic: 22000 },
//     BMW: { "3 Series": 41000, "5 Series": 53000 },
//   },
//   Truck: {
//     Ford: { F150: 45000, Ranger: 32000 },
//     Chevrolet: { Silverado: 48000, Colorado: 36000 },
//   },
//   Convertible: {
//     Mazda: { MX5: 27000 },
//     BMW: { Z4: 49000 },
//   },
//   Hatchback: {
//     Volkswagen: { Golf: 23000 },
//     Hyundai: { i30: 21000 },
//   },
// };

// const configurableItems = {
//   tires: ["Standard", "Off-road", "Sport"],
//   bodyColor: ["Red", "Blue", "Black", "White", "Silver"],
//   seats: ["Cloth", "Leather", "Luxury Leather"],
//   transmission: ["Manual", "Automatic"],
// };

// const accessoriesList = [
//   "Sunroof",
//   "Roof Rack",
//   "Backup Camera",
//   "Bluetooth Audio",
//   "Heated Seats",
//   "GPS Navigation",
// ];

// const accessoriesPrices = {
//   Sunroof: 1000,
//   "Roof Rack": 500,
//   "Backup Camera": 700,
//   "Bluetooth Audio": 400,
//   "Heated Seats": 600,
//   "GPS Navigation": 1200,
// };

// const MIN_QUANTITY = 1;

// const VehicleConfigurator = () => {
//   const [step, setStep] = useState(1);
//   const [segment, setSegment] = useState("");
//   const [manufacturer, setManufacturer] = useState("");
//   const [model, setModel] = useState("");
//   const [quantity, setQuantity] = useState(MIN_QUANTITY);
//   const [config, setConfig] = useState({
//     tires: configurableItems.tires[0],
//     bodyColor: configurableItems.bodyColor[0],
//     seats: configurableItems.seats[0],
//     transmission: configurableItems.transmission[0],
//   });
//   const [accessories, setAccessories] = useState([]);
//   const [invoiceConfirmed, setInvoiceConfirmed] = useState(false);

//   const manufacturers = segment ? Object.keys(data[segment]) : [];
//   const models = manufacturer ? Object.keys(data[segment][manufacturer]) : [];
//   const basePrice = model ? data[segment][manufacturer][model] : 0;

//   const accessoriesTotal = accessories.reduce(
//     (acc, item) => acc + (accessoriesPrices[item] || 0),
//     0
//   );
//   const totalPrice = (basePrice + accessoriesTotal) * quantity;

//   const handleAccessoryChange = (item) => {
//     setAccessories((prev) =>
//       prev.includes(item) ? prev.filter((acc) => acc !== item) : [...prev, item]
//     );
//   };

//   const handleNextStep = () => {
//     if (step === 1 && !segment) return alert("Please select a segment");
//     if (step === 2 && !manufacturer)
//       return alert("Please select a manufacturer");
//     if (step === 3) {
//       if (!model) return alert("Please select a model");
//       if (quantity < MIN_QUANTITY) return alert("Quantity must be at least 1");
//     }
//     setStep(step + 1);
//   };

//   const handlePrevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleConfirmInvoice = () => setInvoiceConfirmed(true);

//   const handleModifyConfig = () => {
//     setInvoiceConfirmed(false);
//     setStep(1);
//     setSegment("");
//     setManufacturer("");
//     setModel("");
//     setQuantity(MIN_QUANTITY);
//     setConfig({
//       tires: configurableItems.tires[0],
//       bodyColor: configurableItems.bodyColor[0],
//       seats: configurableItems.seats[0],
//       transmission: configurableItems.transmission[0],
//     });
//     setAccessories([]);
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     const pageWidth = doc.internal.pageSize.getWidth();

//     const centerText = (text, y) => {
//       const textWidth = doc.getTextWidth(text);
//       const x = (pageWidth - textWidth) / 2;
//       doc.text(text, x, y);
//     };

//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(22);
//     centerText("KOENIGSEGG MOTORS", 20);

//     doc.setFontSize(12);
//     centerText("Vehicle Purchase Invoice", 28);
//     doc.setLineWidth(0.5);
//     doc.line(10, 32, pageWidth - 10, 32);

//     const today = new Date();
//     doc.setFontSize(10);
//     doc.setFont("helvetica", "normal");
//     doc.text(`Date: ${today.toLocaleDateString()}`, 14, 38);
//     doc.text(`Invoice #: ${Date.now()}`, 14, 44);

//     let y = 50;

//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(12);
//     doc.text("Customer & Vehicle Details", 14, y);
//     doc.line(14, y + 2, 80, y + 2);

//     y += 8;
//     doc.setFont("helvetica", "normal");
//     doc.text(`Segment: ${segment}`, 14, y);
//     y += 6;
//     doc.text(`Manufacturer: ${manufacturer}`, 14, y);
//     y += 6;
//     doc.text(`Model: ${model}`, 14, y);
//     y += 6;
//     doc.text(`Quantity: ${quantity}`, 14, y);
//     y += 6;
//     doc.text(`Base Price (per unit): $${basePrice.toLocaleString()}`, 14, y);

//     y += 10;
//     doc.setFont("helvetica", "bold");
//     doc.text("Vehicle Configuration", 14, y);
//     doc.line(14, y + 2, 80, y + 2);
//     y += 8;
//     Object.entries(config).forEach(([key, val]) => {
//       doc.setFont("helvetica", "normal");
//       doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}`, 14, y);
//       y += 6;
//     });

//     y += 4;
//     doc.setFont("helvetica", "bold");
//     doc.text("Accessories", 14, y);
//     doc.line(14, y + 2, 80, y + 2);
//     y += 8;

//     if (accessories.length > 0) {
//       accessories.forEach((acc) => {
//         doc.setFont("helvetica", "normal");
//         doc.text(
//           `${acc} - $${(accessoriesPrices[acc] || 0).toLocaleString()}`,
//           14,
//           y
//         );
//         y += 6;
//       });
//     } else {
//       doc.setFont("helvetica", "normal");
//       doc.text("None", 14, y);
//       y += 6;
//     }

//     y += 8;
//     doc.setFont("helvetica", "bold");
//     doc.setDrawColor(0);
//     doc.setFillColor(220, 220, 220);
//     doc.rect(14, y, pageWidth - 28, 20, "F");

//     y += 6;
//     doc.text(
//       `Accessories Total Price: $${accessoriesTotal.toLocaleString()}`,
//       16,
//       y
//     );
//     y += 6;
//     doc.text(`Total Amount Payable: $${totalPrice.toLocaleString()}`, 16, y);

//     y += 20;
//     doc.setFontSize(10);
//     doc.setFont("helvetica", "italic");
//     centerText("Thank you for choosing KOENIGSEGG!", y);

//     doc.save(`KOENIGSEGG_Invoice_${model}_${Date.now()}.pdf`);
//   };

//   return (
//     <Container className="my-4">
//       <Card>
//         <Card.Body>
//           <h3 className="mb-4">Vehicle Configurator</h3>

//           {step === 1 && (
//             <>
//               <h5>Select Vehicle Segment</h5>
//               <Form.Select
//                 value={segment}
//                 onChange={(e) => {
//                   setSegment(e.target.value);
//                   setManufacturer("");
//                   setModel("");
//                 }}
//               >
//                 <option value="">-- Select Segment --</option>
//                 {Object.keys(data).map((seg) => (
//                   <option key={seg} value={seg}>
//                     {seg}
//                   </option>
//                 ))}
//               </Form.Select>
//               <Button className="mt-3" onClick={handleNextStep}>
//                 Next
//               </Button>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h5>Select Manufacturer</h5>
//               <Form.Select
//                 value={manufacturer}
//                 onChange={(e) => {
//                   setManufacturer(e.target.value);
//                   setModel("");
//                 }}
//               >
//                 <option value="">-- Select Manufacturer --</option>
//                 {manufacturers.map((mfr) => (
//                   <option key={mfr} value={mfr}>
//                     {mfr}
//                   </option>
//                 ))}
//               </Form.Select>
//               <div className="mt-3">
//                 <Button onClick={handlePrevStep}>Back</Button>{" "}
//                 <Button onClick={handleNextStep}>Next</Button>
//               </div>
//             </>
//           )}

//           {step === 3 && (
//             <>
//               <h5>Select Model & Quantity</h5>
//               <Form.Select
//                 value={model}
//                 onChange={(e) => setModel(e.target.value)}
//               >
//                 <option value="">-- Select Model --</option>
//                 {models.map((mdl) => (
//                   <option key={mdl} value={mdl}>
//                     {mdl}
//                   </option>
//                 ))}
//               </Form.Select>
//               <Form.Group className="mt-2">
//                 <Form.Label>Quantity</Form.Label>
//                 <Form.Control
//                   type="number"
//                   value={quantity}
//                   min={MIN_QUANTITY}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                 />
//               </Form.Group>
//               <div className="mt-3">
//                 <Button onClick={handlePrevStep}>Back</Button>{" "}
//                 <Button onClick={handleNextStep}>Next</Button>
//               </div>
//             </>
//           )}

//           {step === 4 && (
//             <>
//               <h5>Customize Configuration</h5>
//               {Object.entries(configurableItems).map(([key, values]) => (
//                 <Form.Group className="mb-2" key={key}>
//                   <Form.Label>
//                     {key.charAt(0).toUpperCase() + key.slice(1)}
//                   </Form.Label>
//                   <Form.Select
//                     value={config[key]}
//                     onChange={(e) =>
//                       setConfig({ ...config, [key]: e.target.value })
//                     }
//                   >
//                     {values.map((val) => (
//                       <option key={val} value={val}>
//                         {val}
//                       </option>
//                     ))}
//                   </Form.Select>
//                 </Form.Group>
//               ))}
//               <div className="mt-3">
//                 <Button onClick={handlePrevStep}>Back</Button>{" "}
//                 <Button onClick={handleNextStep}>Next</Button>
//               </div>
//             </>
//           )}

//           {step === 5 && (
//             <>
//               <h5>Select Accessories</h5>
//               <ListGroup>
//                 {accessoriesList.map((acc) => (
//                   <ListGroup.Item key={acc}>
//                     <Form.Check
//                       type="checkbox"
//                       label={`${acc} ($${accessoriesPrices[acc]})`}
//                       checked={accessories.includes(acc)}
//                       onChange={() => handleAccessoryChange(acc)}
//                     />
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//               <div className="mt-3">
//                 <Button onClick={handlePrevStep}>Back</Button>{" "}
//                 <Button onClick={handleNextStep}>Review</Button>
//               </div>
//             </>
//           )}

//           {step === 6 && (
//             <>
//               <h5>Review Summary</h5>
//               <ListGroup>
//                 <ListGroup.Item>
//                   <strong>Segment:</strong> {segment}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Manufacturer:</strong> {manufacturer}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Model:</strong> {model}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Quantity:</strong> {quantity}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Base Price:</strong> ${basePrice.toLocaleString()}
//                 </ListGroup.Item>
//                 {Object.entries(config).map(([key, val]) => (
//                   <ListGroup.Item key={key}>
//                     <strong>{key}:</strong> {val}
//                   </ListGroup.Item>
//                 ))}
//                 <ListGroup.Item>
//                   <strong>Accessories:</strong>{" "}
//                   {accessories.length > 0 ? accessories.join(", ") : "None"}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <strong>Total Price:</strong> ${totalPrice.toLocaleString()}
//                 </ListGroup.Item>
//               </ListGroup>

//               <div className="mt-3">
//                 {!invoiceConfirmed ? (
//                   <>
//                     <Button variant="success" onClick={handleConfirmInvoice}>
//                       Confirm Invoice
//                     </Button>{" "}
//                     <Button onClick={handlePrevStep}>Back</Button>
//                   </>
//                 ) : (
//                   <>
//                     <Alert variant="success" className="mt-3">
//                       Invoice Confirmed!
//                     </Alert>
//                     <Button variant="primary" onClick={downloadPDF}>
//                       Download Invoice
//                     </Button>{" "}
//                     <Button variant="secondary" onClick={handleModifyConfig}>
//                       Modify Configuration
//                     </Button>
//                   </>
//                 )}
//               </div>
//             </>
//           )}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default VehicleConfigurator;

import React, { useState } from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  ListGroup,
  Alert,
} from "react-bootstrap";
import jsPDF from "jspdf";

const data = {
  SUV: {
    Toyota: { RAV4: 30000, Highlander: 40000 },
    Ford: { Explorer: 35000, Escape: 28000 },
  },
  Sedan: {
    Honda: { Accord: 25000, Civic: 22000 },
    BMW: { "3 Series": 41000, "5 Series": 53000 },
  },
  Truck: {
    Ford: { F150: 45000, Ranger: 32000 },
    Chevrolet: { Silverado: 48000, Colorado: 36000 },
  },
  Convertible: {
    Mazda: { MX5: 27000 },
    BMW: { Z4: 49000 },
  },
  Hatchback: {
    Volkswagen: { Golf: 23000 },
    Hyundai: { i30: 21000 },
  },
};

const configurableItems = {
  tires: ["Standard", "Off-road", "Sport"],
  bodyColor: ["Red", "Blue", "Black", "White", "Silver"],
  seats: ["Cloth", "Leather", "Luxury Leather"],
  transmission: ["Manual", "Automatic"],
};

const accessoriesList = [
  "Sunroof",
  "Roof Rack",
  "Backup Camera",
  "Bluetooth Audio",
  "Heated Seats",
  "GPS Navigation",
];

const accessoriesPrices = {
  Sunroof: 1000,
  "Roof Rack": 500,
  "Backup Camera": 700,
  "Bluetooth Audio": 400,
  "Heated Seats": 600,
  "GPS Navigation": 1200,
};

const VehicleConfigurator = () => {
  const [segment, setSegment] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [config, setConfig] = useState({
    tires: configurableItems.tires[0],
    bodyColor: configurableItems.bodyColor[0],
    seats: configurableItems.seats[0],
    transmission: configurableItems.transmission[0],
  });
  const [accessories, setAccessories] = useState([]);
  const [invoiceConfirmed, setInvoiceConfirmed] = useState(false);

  const manufacturers = segment ? Object.keys(data[segment]) : [];
  const models = manufacturer ? Object.keys(data[segment][manufacturer]) : [];
  const basePrice = model ? data[segment][manufacturer][model] : 0;
  const accessoriesTotal = accessories.reduce(
    (sum, item) => sum + accessoriesPrices[item],
    0
  );
  const totalPrice = (basePrice + accessoriesTotal) * quantity;

  const handleAccessoryChange = (item) => {
    setAccessories((prev) =>
      prev.includes(item) ? prev.filter((acc) => acc !== item) : [...prev, item]
    );
  };

  const handleConfirmInvoice = () => setInvoiceConfirmed(true);

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerText = (text, y) => {
      const textWidth = doc.getTextWidth(text);
      const x = (pageWidth - textWidth) / 2;
      doc.text(text, x, y);
    };

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    centerText("KOENIGSEGG MOTORS", 20);

    doc.setFontSize(12);
    centerText("Vehicle Purchase Invoice", 28);
    doc.line(10, 32, pageWidth - 10, 32);

    const today = new Date();
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${today.toLocaleDateString()}`, 14, 38);
    doc.text(`Invoice #: ${Date.now()}`, 14, 44);

    let y = 50;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Customer & Vehicle Details", 14, y);
    doc.line(14, y + 2, 80, y + 2);
    y += 8;
    doc.setFont("helvetica", "normal");
    doc.text(`Segment: ${segment}`, 14, y);
    y += 6;
    doc.text(`Manufacturer: ${manufacturer}`, 14, y);
    y += 6;
    doc.text(`Model: ${model}`, 14, y);
    y += 6;
    doc.text(`Quantity: ${quantity}`, 14, y);
    y += 6;
    doc.text(`Base Price: $${basePrice.toLocaleString()}`, 14, y);

    y += 10;
    doc.setFont("helvetica", "bold");
    doc.text("Configuration", 14, y);
    y += 6;
    Object.entries(config).forEach(([key, value]) => {
      doc.setFont("helvetica", "normal");
      doc.text(`${key}: ${value}`, 14, y);
      y += 6;
    });

    y += 6;
    doc.setFont("helvetica", "bold");
    doc.text("Accessories", 14, y);
    y += 6;
    accessories.forEach((item) => {
      doc.setFont("helvetica", "normal");
      doc.text(`${item}: $${accessoriesPrices[item]}`, 14, y);
      y += 6;
    });

    y += 10;
    doc.setFont("helvetica", "bold");
    doc.text(`Total Price: $${totalPrice.toLocaleString()}`, 14, y);
    doc.save(`KOENIGSEGG_Invoice_${model}_${Date.now()}.pdf`);
  };

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <h3 className="mb-4">Vehicle Configurator</h3>

          <Form.Group className="mb-3">
            <Form.Label>Segment</Form.Label>
            <Form.Select
              value={segment}
              onChange={(e) => {
                setSegment(e.target.value);
                setManufacturer("");
                setModel("");
              }}
            >
              <option value="">Select Segment</option>
              {Object.keys(data).map((seg) => (
                <option key={seg}>{seg}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Select
              value={manufacturer}
              onChange={(e) => {
                setManufacturer(e.target.value);
                setModel("");
              }}
              disabled={!segment}
            >
              <option value="">Select Manufacturer</option>
              {manufacturers.map((mfr) => (
                <option key={mfr}>{mfr}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              disabled={!manufacturer}
            >
              <option value="">Select Model</option>
              {models.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </Form.Group>

          <h5>Configuration</h5>
          {Object.entries(configurableItems).map(([key, options]) => (
            <Form.Group className="mb-2" key={key}>
              <Form.Label>{key}</Form.Label>
              <Form.Select
                value={config[key]}
                onChange={(e) =>
                  setConfig({ ...config, [key]: e.target.value })
                }
              >
                {options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </Form.Select>
            </Form.Group>
          ))}

          <h5 className="mt-4">Accessories</h5>
          <ListGroup>
            {accessoriesList.map((item) => (
              <ListGroup.Item key={item}>
                <Form.Check
                  type="checkbox"
                  label={`${item} ($${accessoriesPrices[item]})`}
                  checked={accessories.includes(item)}
                  onChange={() => handleAccessoryChange(item)}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Alert variant="info" className="mt-4">
            <strong>Total Price:</strong> ${totalPrice.toLocaleString()}
          </Alert>

          {!invoiceConfirmed ? (
            <Button
              variant="success"
              onClick={handleConfirmInvoice}
              className="me-2"
            >
              Confirm Invoice
            </Button>
          ) : (
            <>
              <Alert variant="success">Invoice Confirmed!</Alert>
              <Button variant="primary" onClick={downloadPDF} className="me-2">
                Download Invoice
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VehicleConfigurator;
