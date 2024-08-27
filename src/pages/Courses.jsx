import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

function Courses() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Courses | Kampus Agency | Learn IT, Software & Design</title>
          <meta
            name="description"
            content="Enroll in specialized courses at Kampus Agency. Learn about IT, software development, and design from industry experts and enhance your skills with our global insights."
          />
          <meta
            name="keywords"
            content="IT courses, software development training, graphic design classes, Kampus Agency courses, global learning"
          />
          <meta property="og:title" content="Courses | Kampus Agency" />
          <meta
            property="og:description"
            content="Explore Kampus Agency’s educational opportunities. Our courses in IT, software development, and design are designed to advance your career with global expertise."
          />
          <meta
            property="og:image"
            content="[URL to courses page featured image]"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/courses"
          />
          <link rel="canonical" href="https://www.kampusagency.com/courses" />
        </Helmet>
        <div>Course Page</div>
      </HelmetProvider>
    </>
  );
}

export default Courses;
