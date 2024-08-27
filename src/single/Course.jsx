import React from "react";

function Course() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>[Course Title] | Kampus Agency | Learn IT & Design</title>
          <meta
            name="description"
            content="Enroll in the [Course Title] course at Kampus Agency. Learn IT, software development, and design from industry experts with a global perspective."
          />
          <meta
            name="keywords"
            content="[Course Title], IT course, software development training, graphic design classes, Kampus Agency"
          />
          <meta property="og:title" content="[Course Title] | Kampus Agency" />
          <meta
            property="og:description"
            content="Explore our [Course Title] course at Kampus Agency. Advance your skills in IT, software development, and design with insights from our global experts."
          />
          <meta property="og:image" content="[URL to course image]" />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/courses/[course-title]"
          />
          <link
            rel="canonical"
            href="https://www.kampusagency.com/courses/[course-title]"
          />
        </Helmet>
        <div>Course Single Page</div>
      </HelmetProvider>
    </>
  );
}

export default Course;
