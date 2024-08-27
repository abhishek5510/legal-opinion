import React from "react";

function Projectcategory() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            [Category Name] Projects | Kampus Agency | Portfolio Highlights
          </title>
          <meta
            name="description"
            content="Explore [Category Name] projects from Kampus Agency. View our portfolio highlights to see how our IT, software development, and design solutions make an impact."
          />
          <meta
            name="keywords"
            content="[Category Name], project category, IT projects, software development portfolio, design highlights, Kampus Agency"
          />
          <meta
            property="og:title"
            content="[Category Name] Projects | Kampus Agency"
          />
          <meta
            property="og:description"
            content="View our [Category Name] projects to see how Kampus Agency’s IT, software, and design solutions deliver impressive results. Discover our portfolio highlights."
          />
          <meta property="og:image" content="[URL to category image]" />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/projects/category/[category-name]"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/projects/category/[category-name]"
          />
        </Helmet>
        <div>Project Category Page</div>
      </HelmetProvider>
    </>
  );
}

export default Projectcategory;
