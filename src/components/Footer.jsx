import React from "react";
import { Link } from "react-router-dom";

import "./../styles/Components.scss";
import logo from "./../assets/images/brand/logo-light.svg";
import {
  TbBrandGithub,
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
                    <span>say hello</span>
                    <h2>Get in touch with us</h2>
                  </div>
                  <form action="">
                    <div className="inputs">
                      <div className="input-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your name" id="" />
                      </div>
                      <div className="input-group">
                        <label>Subject</label>
                        <input type="text" placeholder="Enter subject" id="" />
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
                          <option value="design">Graphic design</option>
                          <option value="development">Web development</option>
                          <option value="consulting">Consulting</option>
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
                    <span>get in touch</span>
                    <h2>Email us</h2>
                  </div>
                  <div className="emails">
                    <div className="email">
                      <span>For project inquires only:</span>
                      <a href="mailto:kampusagency@gmail.com">
                        hello@kampus.rw
                      </a>
                      <a href="tel:250733545477">(+250) 733 5454 77</a>
                    </div>
                    <div className="email">
                      <span>For other questions:</span>
                      <a href="mailto:kampusagency@gmail.com">
                        support@kampus.rw
                      </a>
                      <a href="tel:250733545477">(+250) 733 5454 77</a>
                    </div>
                    <div className="email">
                      <span>For career inquiries:</span>
                      <a href="mailto:kampusagency@gmail.com">hr@kampus.rw</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line">
                <div className="box">
                  <div>
                    <Link to={"/"}>
                      <img src={logo} alt="kampus" />
                    </Link>
                    <p>— Redefine Innovation</p>
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
                          <TbBrandGithub />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <TbBrandLinktree />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box">
                  <h2>Office Location</h2>
                  <ul>
                    <li>
                      <a>KG 123 St.</a>
                    </li>
                    <li>
                      <a>Kibagabaga</a>
                    </li>
                    <li>
                      <a>Kigali, Rwanda</a>
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <h2>Careers</h2>
                  <ul>
                    <li>
                      <a>Looking for a job opportunity?</a>
                    </li>
                    <li>
                      <a href="mailto:kampusagency@gmail.com">Write to us</a>
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <h2>Project Inquiries</h2>
                  <ul>
                    <li>
                      <a href="">Interested in working with us?</a>
                    </li>
                    <li>
                      <a href="mailto:kampusagency@gmail.com">
                        hello@kampus.rw
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
                <p>&copy; {year} kampus. All rights reserved</p>
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
