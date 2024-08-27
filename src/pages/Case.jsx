import React from "react";

function Case() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Case Studies | Kampus Agency | Success Stories</title>
          <meta
            name="description"
            content="Explore case studies from Kampus Agency showcasing how our IT, software development, and design solutions have solved real-world challenges for our clients."
          />
          <meta
            name="keywords"
            content="Case studies, success stories, IT solutions, software development, design projects, Kampus Agency"
          />
          <meta property="og:title" content="Case Studies | Kampus Agency" />
          <meta
            property="og:description"
            content="Read Kampus Agency’s case studies to see how we tackle complex challenges with innovative IT, software, and design solutions. Discover our success stories."
          />
          <meta
            property="og:image"
            content="[URL to case studies page featured image]"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/case-studies"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/case-studies"
          />
        </Helmet>
        <div>Case Studies Page</div>
      </HelmetProvider>
    </>
  );
}

export default Case;
