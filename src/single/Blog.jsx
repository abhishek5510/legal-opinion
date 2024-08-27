import React from "react";

function Blog() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>[Blog Title] | Kampus Agency | Insights & Updates</title>
          <meta
            name="description"
            content="Read the latest post on [Blog Title] from Kampus Agency. Gain insights into IT, software development, and design from our global team of experts."
          />
          <meta
            name="keywords"
            content="[Blog Title], blog post, IT insights, software trends, design updates, Kampus Agency"
          />
          <meta property="og:title" content="[Blog Title] | Kampus Agency" />
          <meta
            property="og:description"
            content="Read our latest blog post on [Blog Title]. Get valuable insights and updates from Kampus Agency’s global team on IT, software development, and design."
          />
          <meta property="og:image" content="[URL to blog post image]" />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/blog/[blog-title]"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/blog/[blog-title]"
          />
        </Helmet>
        <div>Blog Single Page</div>
      </HelmetProvider>
    </>
  );
}

export default Blog;
