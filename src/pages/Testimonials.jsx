import React from "react";

function Testimonials() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Testimonials | Kampus Agency | What Our Clients Say</title>
          <meta
            name="description"
            content="Read testimonials from Kampus Agency clients. Discover how our IT, software development, and design solutions have made a difference to businesses around the world."
          />
          <meta
            name="keywords"
            content="Client testimonials, reviews, Kampus Agency feedback, customer satisfaction, global services"
          />
          <meta property="og:title" content="Testimonials | Kampus Agency" />
          <meta
            property="og:description"
            content="Hear from our global clients about their experiences with Kampus Agency. Read reviews and see how our IT and design solutions have exceeded expectations."
          />
          <meta
            property="og:image"
            content="[URL to testimonials page featured image]"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/testimonials"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/testimonials"
          />
        </Helmet>
        <div>Testimonials and Reviews Page</div>
      </HelmetProvider>
    </>
  );
}

export default Testimonials;
