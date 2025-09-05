import React from "react";
import { Link } from "react-router-dom";

import "./../styles/Components.scss";
import logo from "./../assets/images/brand/logo.svg";
import {
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandLinktree,
  TbBrandX,
} from "react-icons/tb";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="container">
            <div className="content">
              <div className="line1">
                <div className="form">
                  <div className="title">
                    <h2>Get in touch with us</h2>
                  </div>
                  <form action="">
                    <div className="inputs">
                      <div className="input-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your name" id="" />
                      </div>
                      <div className="input-group">
                        <label>Property Name</label>
                        <input type="text" placeholder="Enter Property Name" id="" />
                      </div>
                      <div className="input-group">
                        <label>Property Size</label>
                        <input type="text" placeholder="Enter Property Size" id="" />
                      </div>
                      <div className="input-group">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="Your working email"
                          id=""
                        />
                      </div>
                      <div className="input-group">
                        <label>Phone</label>
                        <input
                          type="tel"
                          placeholder="Your actual phone number"
                          id=""
                        />
                      </div>
                      <div className="input-group">
                        <label>Select a Service</label>
                        <select name="service" id="">
                          <option selected unselectable="true">
                            —Please choose an option
                          </option>
                          <option value="End-to-End Legal Verification & Documentation">End-to-End Legal Verification & Documentation</option>
                          <option value="Legal Verification Only">Legal Verification Only</option>
                          <option value="Dual Legal Opinions">Dual Legal Opinions</option>
                          <option value="Buyer Insights">Buyer Insights</option>
                          <option value="Land Insurance (Legal Cost Coverage)">Land Insurance (Legal Cost Coverage)</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>Message</label>
                        <textarea name="message" id=""></textarea>
                      </div>
                    </div>
                    <button>Get In Touch</button>
                  </form>
                </div>
                <div className="right">
                  <div className="title">
                    <h2>Email us</h2>
                  </div>
                  <div className="emails">
                    <div className="email">
                      <span>For inquires only:</span>
                      <a href="mailto:theopinionbench@gmail.com">
                        theopinionbench@gmail.com
                      </a>
                      <a href="tel:6202270983">(+91) 6202270983</a>
                    </div>
                    {/* <div className="email">
                      <span>For other questions:</span>
                      <a href="mailto:kampusagency@gmail.com">
                        support@kampus.rw
                      </a>
                      <a href="tel:250733545477">(+250) 733 5454 77</a>
                    </div>
                    <div className="email">
                      <span>For career inquiries:</span>
                      <a href="mailto:kampusagency@gmail.com">hr@kampus.rw</a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="box">
                  <div>
                    <Link to={"/"}>
                      <img src={logo} alt="kampus" />
                    </Link>
                    <p>— Navigating Land Law Digitally</p>
                  </div>
                  <div>
                    <ul className="social">
                      <li>
                        <a href="">
                          <TbBrandInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <TbBrandX />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <TbBrandLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box">
                  <h2>Office Location</h2>
                  <ul>
                    <li>
                      <a>Bengaluru</a>
                    </li>
                    <li>
                      <a>Marathalli</a>
                    </li>
                    <li>
                      <a>Karnataka</a>
                    </li>
                  </ul>
                </div>
                {/* <div className="box">
                  <h2>Careers</h2>
                  <ul>
                    <li>
                      <a>Looking for a job opportunity?</a>
                    </li>
                    <li>
                      <a href="mailto:kampusagency@gmail.com">Write to us</a>
                    </li>
                  </ul>
                </div> */}
                <div className="box">
                  <h2>Inquiries</h2>
                  <ul>
                    <li>
                      <a href="">Interested in partnering with us?</a>
                    </li>
                    <li>
                      <a href="mailto:theopinionbench@gmail.com">
                        theopinionbench@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="content">
              <div className="left">
                <p>&copy; {year} theopinionbench. All rights reserved</p>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a href="/policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
