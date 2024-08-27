import React from "react";

function Coursecategory() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            [Category Name] Courses | Kampus Agency | Educational Opportunities
          </title>
          <meta
            name="description"
            content="Discover [Category Name] courses offered by Kampus Agency. Enhance your skills in IT, software development, and design with our expertly crafted courses."
          />
          <meta
            name="keywords"
            content="[Category Name], course category, IT training, software development classes, design courses, Kampus Agency"
          />
          <meta
            property="og:title"
            content="[Category Name] Courses | Kampus Agency"
          />
          <meta
            property="og:description"
            content="Browse our [Category Name] courses to find educational opportunities in IT, software development, and design. Learn from industry experts with Kampus Agency."
          />
          <meta property="og:image" content="[URL to category image]" />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/courses/category/[category-name]"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/courses/category/[category-name]"
          />
        </Helmet>
        <div>Course Category Page</div>
      </HelmetProvider>
    </>
  );
}

export default Coursecategory;
