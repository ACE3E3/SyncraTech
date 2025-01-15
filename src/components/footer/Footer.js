import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-8">
            <h6>About Us</h6>
            <p className="text-justify">
              <i>At SyncraTech Automations,</i> we are dedicated to transforming businesses through
              cutting-edge technology and innovative solutions. Specializing in
              Manufacturing Execution Systems (MES), industrial automation,
              digitalization solutions, and web development, we empower
              industries to optimize their processes, enhance efficiency, and
              achieve unparalleled growth.
              <br /> With a team of skilled professionals and a customer-centric
              approach, we deliver tailored solutions that address the unique
              challenges of each client. Whether it's streamlining manufacturing
              operations, automating workflows, or developing robust digital
              platforms, we are committed to driving your business toward a
              smarter, more connected future. <br /> At SyncraTech Automations,
              innovation meets reliability to create a seamless path to success.
              Let us help you take your business to the next level.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/about">Products</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Services</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  About
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; All Rights Reserved by{" "}
              <a href="#">SyncraTech</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
