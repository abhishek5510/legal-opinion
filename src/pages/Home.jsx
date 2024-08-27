import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import './../styles/home.scss'
import Hero from "../homepage/Hero";
import Work from "./../homepage/Work";
import Brands from "../homepage/Brands";
import Service from "./../homepage/Service";
import Courses from "./../homepage/Courses";
import Solutions from "./../homepage/Solutions";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Kampus Agency | Premier IT, Software & Design Solutions</title>
          <meta
            name="description"
            content="Kampus Agency provides top-tier IT, software development, and graphic design solutions. Based in Kigali with a global reach, we offer innovative services to elevate your business."
          />
          <meta
            name="keywords"
            content="IT solutions, software development, graphic design, Kampus Agency, digital innovation, Kigali, global services"
          />
          <meta
            property="og:title"
            content="Kampus Agency | Premier IT, Software & Design Experts"
          />
          <meta
            property="og:description"
            content="Discover Kampus Agency, where cutting-edge IT, software development, and design expertise come together. Transform your business with our global solutions—get in touch today."
          />
          <meta
            property="og:image"
            content="[URL to home page featured image]"
          />
          <meta property="og:url" content="https://www.kampusagency.com" />
          <link rel="canonical" href="https://www.kampusagency.com" />
        </Helmet>
        <>
          <div className="home">
            <Hero />
            <Brands />
            <Service />
            <Work />
            <Courses />
            <Solutions />
          </div>
        </>
      </HelmetProvider>
    </>
  );
}

export default Home;
