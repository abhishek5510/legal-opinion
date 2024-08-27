import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

function Services() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Our Services | Kampus Agency | IT, Software & Design Solutions
          </title>
          <meta
            name="description"
            content="Explore Kampus Agency’s extensive services, including IT solutions, software development, and comprehensive design services. Discover how our global expertise can meet your needs."
          />
          <meta
            name="keywords"
            content="IT services, software development, graphic design, Kampus Agency services, global expertise, Kigali, Kenya, India, UK, USA, Canada"
          />
          <meta property="og:title" content="Our Services | Kampus Agency" />
          <meta
            property="og:description"
            content="Discover Kampus Agency’s range of IT, software, and design services. From web development to branding and video production, find out how our global team can help you achieve success."
          />
          <meta
            property="og:image"
            content="[URL to services page featured image]"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/services"
          />
          <link rel="canonical" href="https://www.kampusagency.com/services" />
        </Helmet>
        <div>Services Page</div>
      </HelmetProvider>
    </>
  );
}

export default Services;
