import React from "react";

function Case() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>[Case Study Title] | Kampus Agency | Success Story</title>
          <meta
            name="description"
            content="Read the [Case Study Title] case study by Kampus Agency. Discover how our global team tackled challenges in IT, software development, and design to achieve success."
          />
          <meta
            name="keywords"
            content="[Case Study Title], case study, IT solutions, software development success, design projects, Kampus Agency"
          />
          <meta
            property="og:title"
            content="[Case Study Title] | Kampus Agency"
          />
          <meta
            property="og:description"
            content="Dive into the [Case Study Title] case study. Learn how Kampus Agency’s global team achieved outstanding results with our IT, software, and design solutions."
          />
          <meta property="og:image" content="[URL to case study image]" />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/case-studies/[case-study-title]"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/case-studies/[case-study-title]"
          />
        </Helmet>
        <div>Case Study Single Page</div>
      </HelmetProvider>
    </>
  );
}

export default Case;
