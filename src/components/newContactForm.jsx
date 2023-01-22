import React from "react";

function contactForm() {
  return (
    <>
      <div className="contactform">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row no-gutters">
                    <div className="col-lg-7 col-md-7 order-md-last d-flex align-items-stretch p-0">
                      <div className="contact-wrap w-100 p-md-5">
                        <div className="typtitle">Send us a message</div>

                        <form
                          method="POST"
                          id="contactForm"
                          name="contactForm"
                          className="contactForm"
                          novalidate="novalidate"
                        >
                          <div className="form-group">
                            <label className="lable_name" for="name">
                              Full Name*
                            </label>
                            <input
                              type="text"
                              className="placeholder-text form-control"
                              name="name"
                              id="name"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="form-group">
                            <label className="lable_name" for="email">
                              Email*
                            </label>
                            <input
                              type="text"
                              className="placeholder-text form-control"
                              name="email"
                              id="email"
                              placeholder="example@domain.com"
                            />
                          </div>
                          <div ClassName="form-group">
                            <label className="lable_name" for="name">
                              Tell us your requirements*
                            </label>
                          </div>
                          <div className="form-group pt-3">
                            <textarea
                              name="message"
                              ClassName="placeholder-text form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Message"
                            ></textarea>
                          </div>

                          {/* <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  className="btn btn-primary"
                                />
                                <div className="submitting"></div>
                              </div>
                           
                          </div> */}
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex align-items-stretch p-0">
                      <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                        <h2 className="typtitle">Let's get in touch</h2>
                        <p>
                          We're open for any suggestion or just to have a chat
                        </p>
                        <div className="dbox w-100 d-flex align-items-start">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-map-marker"></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span>Address:</span> Kasarani, Nairobi Kenya
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-phone"></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span>Phone:</span>{" "}
                              <a href="tel://1234567920">+ 1235 2355 98</a>
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-paper-plane"></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span>Email:</span>{" "}
                              <a href="mailto:info@yoursite.com">
                                info@yoursite.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-globe"></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span>Website</span> <a href="#">yoursite.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default contactForm;
