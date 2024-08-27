import React from "react";

function Blogcategory() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>[Category Name] Blog | Kampus Agency | Latest Insights</title>
          <meta
            name="description"
            content="Explore the latest blog posts in [Category Name] from Kampus Agency. Stay updated with insights and trends in IT, software development, and design from our global experts."
          />
          <meta
            name="keywords"
            content="[Category Name], blog category, IT insights, software development trends, design updates, Kampus Agency"
          />
          <meta
            property="og:title"
            content="[Category Name] Blog | Kampus Agency"
          />
          <meta
            property="og:description"
            content="Browse our [Category Name] blog category for the latest insights and updates on IT, software development, and design from Kampus Agency’s global team."
          />
          <meta property="og:image" content="[URL to category image]" />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/blog/category/[category-name]"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/blog/category/[category-name]"
          />
        </Helmet>
        <div>Blog Category Page</div>
      </HelmetProvider>
    </>
  );
}

export default Blogcategory;
