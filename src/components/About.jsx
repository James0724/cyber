import React from "react";

function About() {
  return (
    <section id="about">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="sub-title">
        <p>Who we are</p>
      </div>
      <div className="title">About Us</div>
      <div className="text">
        <p>
          247cybercafe is a one stop, standard and licensed internet cyber shop
          that is fully equipped with the latest technology in the cyber cafe
          industry offering to you best services. You can book online some of
          our services that require time such as bulk printing and delivered to
          your office or door step when ready.
        </p>
      </div>
      <div className="card_container d-sm-none d-md-block">
        <div className="row">
          <div className="col-lg-3 column-md-6 col-sm-12">
            <div className="box card">
              <h1 className="card-heading">Our Mission</h1>
            </div>
          </div>
          <div className="col-lg-3 column-md-6 col-sm-12">
            <div className="box card">
              <h1 className="card-heading">Our Vision</h1>
            </div>
          </div>
          <div className="col-lg-3 column-md-6 col-sm-12">
            <div className="box card">
              <h1 className="card-heading">Our Value</h1>
            </div>
          </div>
          <div className="col-lg-3 column-md-6 col-sm-12">
            <div className="box card">
              <h1 className="card-heading">Our promise</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
