import React from "react";

function Contact() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact Us | Kampus Agency | Get in Touch</title>
          <meta
            name="description"
            content="Contact Kampus Agency to discuss your IT, software development, or design needs. Reach out to our global team for tailored solutions and support."
          />
          <meta
            name="keywords"
            content="Contact Kampus Agency, IT solutions, software development, design services, global support, reach out"
          />
          <meta property="og:title" content="Contact Us | Kampus Agency" />
          <meta
            property="og:description"
            content="Get in touch with Kampus Agency for inquiries about our IT, software, and design services. Our global team is here to assist you with your project needs."
          />
          <meta
            property="og:image"
            content="[URL to contact page featured image]"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/contact"
          />
          <link rel="canonical" href="https://www.kampusagency.com/contact" />
        </Helmet>
        <div>Contact Page</div>
      </HelmetProvider>
    </>
  );
}

export default Contact;
