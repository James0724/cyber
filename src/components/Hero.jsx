import React from "react";
import Glob from "../assets/glob.png";

function Homepage() {
  return (
    <section id="home" className="homepage_wrapper ">
      <div className="main_text d-flex flex-column align-items-center">
        <div className="banner_title d-flex justify-content-center align-items-center ">
          <h1>
            <span>2</span>
            <span>4</span>
            <span>/</span>
            <span>7</span>
          </h1>
          <h1>
            <span>C</span>
            <span>y</span>
            <span>b</span>
            <span>e</span>
            <span>r</span>
            <span>c</span>
            <span>a</span>
            <span>f</span>
            <span>e</span>
          </h1>
        </div>
        <div class="banner_text d-flex justify-content-center align-items-center">
          <h2>enterprise SECURITY SOLUTIONS</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center align-item main_image_wrapper">
        <img src={Glob} className="glob" alt="globe" />
      </div>
      <div className="d-none d-md-block">
        <div className="row">
          <div className="services_intro col d-flex justify-content-center align-items-center p-1">
            <div className="title_intro">
              <h1>Branding & Design</h1>
            </div>
          </div>
          <div className="services_intro col d-flex justify-content-center align-items-center p-1">
            <div className="title_intro">
              <h1>Cybercafe</h1>
            </div>
          </div>
          <div className="services_intro col d-flex justify-content-center align-items-center p-1">
            <div className="title_intro">
              <h1>Website design </h1>
            </div>
          </div>
          <div className="services_intro col d-flex justify-content-center align-items-center p-1">
            <div className="title_intro">
              <h1>Printing</h1>
            </div>
          </div>
          <div className="services_intro col d-flex justify-content-center align-items-center p-1">
            <div className="title_intro">
              <h1>Cyber Training</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
