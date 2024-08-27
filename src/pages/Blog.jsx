import React from "react";

function Blog() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Blog | Kampus Agency | Insights & Updates</title>
          <meta
            name="description"
            content="Stay updated with Kampus Agency’s blog. Read articles on IT, software development, and design. Get insights from our global team and stay informed about the latest trends."
          />
          <meta
            name="keywords"
            content="Blog, IT insights, software development trends, design updates, Kampus Agency, global team"
          />
          <meta property="og:title" content="Blog | Kampus Agency" />
          <meta
            property="og:description"
            content="Explore Kampus Agency’s blog for the latest articles on IT, software development, and design. Get expert insights and updates from our global team."
          />
          <meta
            property="og:image"
            content="[URL to blog page featured image]"
          />
          <meta property="og:url" content="https://www.kampusagency.com/blog" />
          <link rel="canonical" href="https://www.kampusagency.com/blog" />
        </Helmet>
        <div>Blog/Articles Page</div>
      </HelmetProvider>
    </>
  );
}

export default Blog;
