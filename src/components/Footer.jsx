import React from "react";
import { Facebook, Twitter } from "./svgimages";

function Footer() {
  return (
    <footer className="footer_main">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3">
            <div className="logo"></div>
          </div>
          <div className="col-md-9">
            <div className="footer-links ">
              <div className="left">
                <ul className="footer_menu">
                  <li className="footer_menu_item">About us</li>
                  <li className="footer_menu_item">Services</li>
                  <li className="footer_menu_item">Contact us</li>
                  <li className="footer_menu_item">Physical location</li>
                </ul>
              </div>
              <div className="right">
                <div className="social_svg">
                  <Facebook />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="binding_docs">
          <div className="left">
            <div className="copy_right ">
              Copyright © 2023 Avalance Global Solutions. All Rights Reserved.
            </div>
          </div>

          <div className="right">
            <div className="sub-footer-menu d-flex">
              <div className="term">Term of Services</div>
              <div className="policy">Policy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
