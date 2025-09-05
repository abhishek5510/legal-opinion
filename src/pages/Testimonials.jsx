import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import './../styles/service.scss'
import Hero from './../servicepage/Hero.jsx'
import Service from './../servicepage/Service.jsx'

function Testimonials() {
  return (
    <>
        <Helmet>
          <title>
            Our Testimoney | The Opinion Bench | Legal Service Provider
          </title>
        </Helmet>
        <div>
          <div className="service-page">
            <Hero/>
            <Service/>
          </div>
        </div>
    </>
  );
}

export default Testimonials;
