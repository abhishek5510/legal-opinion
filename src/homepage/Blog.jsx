import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blog1 from "./../assets/images/blog/01.jpg";
import blog2 from "./../assets/images/blog/02.jpg";
import blog3 from "./../assets/images/blog/03.jpg";
import blog4 from "./../assets/images/blog/04.jpg";
import blog5 from "./../assets/images/blog/05.jpg";
import blog6 from "./../assets/images/blog/06.jpg";
import blog7 from "./../assets/images/blog/07.jpg";
import blog8 from "./../assets/images/blog/08.jpg";
import blog9 from "./../assets/images/blog/09.jpg";
import blog10 from "./../assets/images/blog/10.jpg";
import blog11 from "./../assets/images/blog/01.jpg";
import blog12 from "./../assets/images/blog/08.jpg";
import blog13 from "./../assets/images/blog/06.jpg";
import blog14 from "./../assets/images/blog/02.jpg";
import blog15 from "./../assets/images/blog/05.jpg";

const blogs = [
  {
    img: blog1,
    title: "Introduction to Kampus Activities",
    date: "September 12, 2024",
    link: "/blog/1",
    featured: true,
  },
  {
    img: blog2,
    title: "Building a Sustainable Campus Community",
    date: "September 13, 2024",
    link: "/blog/2",
    featured: true,
  },
  {
    img: blog3,
    title: "Events and Workshops at Kampus",
    date: "September 14, 2024",
    link: "/blog/3",
    featured: true,
  },
  {
    img: blog4,
    title: "Latest Research from Kampus Labs",
    date: "September 15, 2024",
    link: "/blog/4",
    featured: true,
  },
  {
    img: blog5,
    title: "Student Success Stories",
    date: "September 16, 2024",
    link: "/blog/5",
    featured: true,
  },
  {
    img: blog6,
    title: "How to Get Involved in Campus Activities",
    date: "September 17, 2024",
    link: "/blog/6",
    featured: true,
  },
  {
    img: blog7,
    title: "Mental Health Resources for Students",
    date: "September 18, 2024",
    link: "/blog/7",
    featured: true,
  },
  {
    img: blog8,
    title: "Technology Innovations at Kampus",
    date: "September 19, 2024",
    link: "/blog/8",
    featured: true,
  },
  {
    img: blog9,
    title: "Kampus Clubs and Organizations",
    date: "September 20, 2024",
    link: "/blog/9",
    featured: true,
  },
  {
    img: blog10,
    title: "Sports and Athletics at Kampus",
    date: "September 21, 2024",
    link: "/blog/10",
    featured: true,
  },
  {
    img: blog11,
    title: "Upcoming Cultural Events",
    date: "September 22, 2024",
    link: "/blog/11",
    featured: false,
  },
  {
    img: blog12,
    title: "Scholarship Opportunities at Kampus",
    date: "September 23, 2024",
    link: "/blog/12",
    featured: false,
  },
  {
    img: blog13,
    title: "Campus Life and Social Engagements",
    date: "September 24, 2024",
    link: "/blog/13",
    featured: true,
  },
  {
    img: blog14,
    title: "Research Grants for Kampus Students",
    date: "September 25, 2024",
    link: "/blog/14",
    featured: true,
  },
  {
    img: blog15,
    title: "New Learning Technologies in Education",
    date: "September 26, 2024",
    link: "/blog/15",
    featured: false,
  },
];

function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredBlogs = blogs.filter((blog) => blog.featured === true);
  const blogsToShow = 6; // Limit sidebar blogs to 6

  // Auto-sliding every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredBlogs.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(autoSlide);
  }, [featuredBlogs.length]);

  const getNextBlogs = () => {
    let nextBlogs = [];
    for (let i = 0; i < blogsToShow; i++) {
      nextBlogs.push(featuredBlogs[(currentIndex + i) % featuredBlogs.length]);
    }
    return nextBlogs;
  };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  const sidebarBlogs = getNextBlogs().slice(1, blogsToShow); // For sidebar (skip the first as it's main blog)

  return (
    <div className="blog">
      <div className="container">
        <div className="sec-title">
          <div>
            <h2>Articles & Insights</h2>
            <p>
              Stay informed with the latest trends and tips in IT, design, and
              development.
            </p>
          </div>
          <div className="mybtn">
            <a href="/blog">View all blogs</a>
          </div>
        </div>
        <div className="content">
          {/* Main Blog Post */}
          <div className="featured-article">
            <img
              src={featuredBlogs[currentIndex].img}
              alt="featured-article"
              className="featured-image"
            />
            <div className="featured-content">
              <p className="date">{featuredBlogs[currentIndex].date}</p>
              <Link to={featuredBlogs[currentIndex].link} className="title">
                {truncateTitle(featuredBlogs[currentIndex].title, 50)}
              </Link>
            </div>
          </div>

          {/* Sidebar Blog List */}
          <div className="article-list">
            {sidebarBlogs.map((blog, index) => (
              <div className="article-item" key={index}>
                <img
                  src={blog.img}
                  alt={`article-${index}`}
                  className="article-thumbnail"
                />
                <div className="article-details">
                  <Link to={blog.link} className="title">
                    {truncateTitle(blog.title, 30)}
                  </Link>
                  <p className="date">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
