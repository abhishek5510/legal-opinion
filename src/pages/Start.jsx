import React from "react";

function Start() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Get Started | Kampus Agency | Request a Quote</title>
          <meta
            name="description"
            content="Ready to start your project with Kampus Agency? Request a quote for our IT, software development, and design services. Let’s bring your vision to life with our global expertise."
          />
          <meta
            name="keywords"
            content="Request a quote, get started, Kampus Agency, IT services, design solutions, global expertise"
          />
          <meta property="og:title" content="Get Started | Kampus Agency" />
          <meta
            property="og:description"
            content="Initiate your project with Kampus Agency. Request a quote and find out how our global IT and design solutions can meet your needs."
          />
          <meta
            property="og:image"
            content="[URL to get started page featured image]"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/get-started"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/get-started"
          />
        </Helmet>
        <div>Get Started/Get Quote Page</div>
      </HelmetProvider>
    </>
  );
}

export default Start;
