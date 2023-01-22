import React from "react";
import kra from "../assets/kra-logo.png";
import ntsa from "../assets/ntsa-logo.png";
import ecitizen from "../assets/ecitizen-logo.png";

function Services() {
  return (
    <section id="services">
      <div className="sub-title">
        <p>What we do</p>
      </div>
      <div className="title">Our Services</div>
      <div className="text">
        <p>
          We offer the following services Itax registration services, KRA pin
          certificate services, Typesetting Printing, Computer Accessories and
          Services, Office Stationery, Printing, Photocopy, Gift Items, Internet
          Services, Branding, Graphic Design and web Development
        </p>
      </div>
      <div className="card_container">
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center align-items-center ">
            <div className="service box card">
              <h1 className="card-heading">kra pin & tax</h1>
              <div className="image">
                <img src={kra} alt="kra logo" />
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center ">
            <div className="service box card">
              <h1 className="card-heading">E-citizen services</h1>
              <div className="image">
                <img src={ecitizen} alt="kra logo" />
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center ">
            <div className="service box card">
              <h1 className="card-heading">Ntsa services</h1>
              <div className="image">
                <img src={ntsa} alt="kra logo" />
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center ">
            <div className="service box card ">
              <h1 className="card-heading">Ntsa services</h1>
              <div className="image">
                <img src={ntsa} alt="kra logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-text mt-5">
        <div className="typtitle">Why choose us ?</div>
        <ul className="reasons">
          <li className="point">Reliable</li>
          <li className="point">Fast</li>
          <li className="point"> Convinient</li>
          <li className="point">friendly prices</li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
