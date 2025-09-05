import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import "./../styles/home.scss";
import Hero from "../homepage/Hero";
import Cta from "./../homepage/Cta";
import WrappedAbout from "../homepage/WrappedAbout";
import Work from "./../homepage/Work";
import Blog from "./../homepage/Blog";
import Service from "./../homepage/Service";
import Courses from "./../homepage/Courses";
import Resources from "./../homepage/Resources";
import Services from "./Services";
import WrappedTestimonial from "../homepage/WrappedTestimonials";

function Home() {
  return (
          <div>
              <section id="services">
                <Services />
              </section>
              <section id="testimonials">
                <WrappedTestimonial />
              </section>
              <section id="about">
                <WrappedAbout />
              </section>
              
          </div>
  );
}

export default Home;
