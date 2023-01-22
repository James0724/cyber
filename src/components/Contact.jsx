import React from "react";
import ContactForm from "./newContactForm";

function Contact() {
  return (
    <section id="contact">
      <div className="sub-title">
        <p>Talk to us</p>
      </div>
      <div className="title">Contact us</div>
      <div className="typtitle">
        What can you expect when you fill out the form ?
      </div>

      <ul class="boldlist">
        <li>
          <h3>We will get back to you within 24 hours.</h3>
          <p>
            Our relevant representatives will reach out within one business day.
          </p>
        </li>
        <li>
          <h3>Your information will be kept private.</h3>
          <p>We does not share your information with third-party providers.</p>
        </li>
        <li>
          <h3>We’re available for urgent requests.</h3>
          <p>We are always available for you</p>
        </li>
      </ul>

      <ContactForm />
    </section>
  );
}

export default Contact;
