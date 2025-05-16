import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {/* <MDBIcon color="secondary" icon="gem" className="me-3" /> */}
                <img src={logo} width={"65px"} alt="Logo" />
                koengsegg
              </h6>
              <p>© koengsegg LIMITED 2025</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">VEHICLES</h6>
              <p>
                <a href="#!" className="text-reset">
                  RANGE ROVER
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  DISCOVERY
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  DEFENDER
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  SV
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FLEET & BUSINESS
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FIND ME A SUV
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  BOOK A TEST DRIVE
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  KEEP ME INFORMED
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  BUILD YOUR OWN
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  JLR ANNUAL RETURN
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">OWNERSHIP</h6>
              <p>
                <a href="#!" className="text-reset">
                  OWNERSHIP SERVICES
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  INCONTROL
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  SOFTWARE UPDATES
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  LOCATE RETAILER
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  ONLINE SERVICE BOOKING
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  JLR
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  SUSTAINABILITY
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  VEHICLE RECALL SEARCH
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">EXPERIENCE</h6>
              <p>
                <a href="#!" className="text-reset">
                  DRIVING EXPERIENCES
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  TRAVEL
                </a>
              </p>
              <h6 className="text-uppercase fw-bold mb-4">ABOUT US</h6>
              <p>
                <a href="#!" className="text-reset">
                  JAGUAR LAND ROVER CSR POLICY
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  CSR PROJECTS
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  CSR COMMITTEE
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  SOCIAL RESPONSIBILITY
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Extra Links</h6>

              <p>
                <a href="#!" className="text-reset">
                  CODE OF CONDUCT
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  SUPPLIER CODE OF CONDUCT
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  ANTIBRIBERY & CORRUPTION POLICY
                </a>
              </p>
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" /> sm
                vita
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />{" "}
                info@example.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          koengsegg.com
        </a>
      </div>
    </MDBFooter>
  );
}
