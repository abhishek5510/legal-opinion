import React, { useState, useEffect, useRef } from "react";

import thumbnail1 from "./../assets/images/resources/1.jpg";
import thumbnail2 from "./../assets/images/resources/2.jpg";
import thumbnail3 from "./../assets/images/resources/3.jpg";
import { FaDownload } from "react-icons/fa6";

const resources = [
  {
    thumbnail: thumbnail1,
    category: "react js",
    title: "This is the Resource 1",
    description:
      "This is a description of resource 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    link: "hello1",
  },
  {
    thumbnail: thumbnail2,
    category: "react js",
    title: "This is the Resource 2",
    description:
      "This is a description of resource 2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    link: "hello2",
  },
  {
    thumbnail: thumbnail3,
    category: "react js",
    title: "This is the Resource 3",
    description:
      "This is a description of resource 3. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "hello3",
  },
];

function Resources() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % resources.length);
      }, 10000); // Change slide every 10 seconds
    };

    handleAutoSlide();

    return () => clearInterval(intervalRef.current); // Clear interval on component unmount
  }, []);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current); // Pause auto-slide on hover
  };

  const handleMouseLeave = () => {
    const handleAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % resources.length);
      }, 10000);
    };

    handleAutoSlide();
  };

  return (
    <div className="resources">
      <div className="container">
        <div className="content">
          <div className="sec-title">
            <span>___ Free resources for your digital journey</span>
            <h2>Download guides, whitepapers, and more.</h2>
            <p>
              Resource tiles with download links for eBooks, case studies,
              templates, etc.
            </p>
            <a href="/resources">Access the Library</a>
          </div>
          <div
            className="main"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="resource-card"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {resources.map((resource, index) => (
                <div key={index} className="resource-card-item">
                  <div className="image">
                    <img src={resource.thumbnail} alt={resource.title} />
                  </div>
                  <div className="resource-info">
                    <span className="category">{resource.category}</span>
                    <div className="title">{resource.title}</div>
                    <div className="text">{resource.description}</div>
                    <div className="action">
                      <span>
                        <a href={resource.link} className="button">
                          Read more
                        </a>
                      </span>
                      <span><a href="/downloads" className="download"><FaDownload/></a></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              {resources.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => handlePaginationClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
