import React from "react";

function Error() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>404 Error | Kampus Agency | Page Not Found</title>
          <meta
            name="description"
            content="Oops! The page you’re looking for cannot be found. Return to the homepage or contact Kampus Agency for assistance."
          />
          <meta
            name="keywords"
            content="404 error, page not found, Kampus Agency"
          />
          <meta property="og:title" content="404 Error | Kampus Agency" />
          <meta
            property="og:description"
            content="Page not found. The link you followed may be broken, or the page may have been moved. Return to the homepage or get in touch with Kampus Agency for help."
          />
          <meta property="og:image" content="[URL to 404 error page image]" />
          <meta property="og:url" content="https://www.kampusagency.com/404" />
          <link rel="canonical" href="https://www.kampusagency.com/404" />
        </Helmet>
        <div>Error Page (404)</div>
      </HelmetProvider>
    </>
  );
}

export default Error;
