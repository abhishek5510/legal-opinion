import React from "react";

function Portfolio() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Portfolio | Kampus Agency | Our Work & Projects</title>
          <meta
            name="description"
            content="View Kampus Agency’s portfolio showcasing our IT, software development, and design projects. See how our global team has transformed client visions into successful outcomes."
          />
          <meta
            name="keywords"
            content="Portfolio, IT projects, software development work, graphic design examples, Kampus Agency"
          />
          <meta property="og:title" content="Portfolio | Kampus Agency" />
          <meta
            property="og:description"
            content="Browse Kampus Agency’s portfolio to view our latest IT, software development, and design projects. Discover our global approach and success stories."
          />
          <meta
            property="og:image"
            content="[URL to portfolio page featured image]"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/portfolio"
          />
          <link rel="canonical" href="https://www.kampusagency.com/portfolio" />
        </Helmet>
        <div>Portfolio/Work/Projects Page</div>
      </HelmetProvider>
    </>
  );
}

export default Portfolio;
