import React from "react";

function Project() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>[Project Name] | Kampus Agency | Project Showcase</title>
          <meta
            name="description"
            content="Explore the [Project Name] project by Kampus Agency. Discover how our IT, software development, and design expertise were applied to achieve exceptional results."
          />
          <meta
            name="keywords"
            content="[Project Name], project showcase, IT solutions, software development, design projects, Kampus Agency"
          />
          <meta property="og:title" content="[Project Name] | Kampus Agency" />
          <meta
            property="og:description"
            content="View the details of the [Project Name] project. Learn how Kampus Agency’s global team applied their expertise in IT, software, and design to deliver outstanding results."
          />
          <meta property="og:image" content="[URL to project image]" />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/projects/[project-name]"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/projects/[project-name]"
          />
        </Helmet>
        <div>Project Single Page</div>
      </HelmetProvider>
    </>
  );
}

export default Project;
