import React from "react";

function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About Kampus Agency | Our Story and Expertise</title>
          <meta
            name="description"
            content="Learn about Kampus Agency, a leading provider of IT, software development, and design solutions. Based in Kigali with a global team, discover our mission and expertise."
          />
          <meta
            name="keywords"
            content="About Kampus Agency, IT experts, software development, graphic design, company mission, global team"
          />
          <meta
            property="og:title"
            content="About Kampus Agency | Meet Our Team and Vision"
          />
          <meta
            property="og:description"
            content="Explore Kampus Agency’s story, mission, and the global team driving our IT and design innovations. Learn what makes us unique—explore our journey today."
          />
          <meta
            property="og:image"
            content="[URL to about page featured image]"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/about"
          />
          <link rel="canonical" href="https://www.kampusagency.com/about" />
        </Helmet>
        <div>About Page</div>
      </HelmetProvider>
    </>
  );
}

export default About;
