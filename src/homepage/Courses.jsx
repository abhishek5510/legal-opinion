import React from "react";
import image1 from "./../assets/images/courses/course-1.jpeg";

const courses = [
  {
    id: 1,
    title: "Complete UI/UX design course for beginners",
    description:
      "Learn the fundamentals of UI/UX design and create a portfolio-worthy project.",
    price: 199.99,
    image: image1,
  },
  {
    id: 2,
    title: "Adobe Illustrator full course for beginners",
    description:
      "Learn the fundamentals of Adobe Illustrator and create stunning graphics.",
    price: 149.99,
    image: image1,
  },
  {
    id: 3,
    title: "Complete web development course for beginners",
    description:
      "Learn the fundamentals of web development and create a portfolio-worthy project.",
    price: 299.99,
    image: image1,
  },
];

function Courses() {
  return (
    <>
      <div className="course">
        <div className="container">
          <div className="sec-title">
            <div>
              <h2>Courses to scale your design knowledge</h2>
              <p>
                Learn from the best and take your design skills to the next
                level.
              </p>
            </div>
            <div>
              <a href="/courses">More courses</a>
            </div>
          </div>
          <div className="content">
            <div className="grids">
              {courses.map((course) => (
                <div key={course.id} className="grid">
                  <div className="image">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="detail">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <span className="price">${course.price}</span>
                    <a href="/checkout" className="btn">Enroll Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
