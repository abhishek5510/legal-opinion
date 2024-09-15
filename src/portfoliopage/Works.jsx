import React, { useState, useEffect } from "react";

import hense from "./../assets/images/projects/hense.jpg";
import ikreditt from "./../assets/images/projects/ikreditt.webp";
import dante from "./../assets/images/projects/dante.jpg";
import ncba from "./../assets/images/projects/ncba.jpg";
import shutteris from "./../assets/images/projects/shutteris.jpg";

import { MdFullscreen, MdClose } from "react-icons/md";

// Project data
const projects = [
  {
    title: "Hense brand design",
    thumbnail: hense,
    category: "Branding",
    services: [
      "logo",
      "website",
      "company profile",
      "color palette",
      "social media posts",
    ],
    client: "Hense group",
    url: "https://",
  },
  {
    title: "Ikreditt brand design",
    thumbnail: ikreditt,
    category: "Full Package",
    services: [
      "logo",
      "website",
      "company profile",
      "color palette",
      "social media posts",
      "brochure",
    ],
    client: "Ikreditt",
    url: "https://",
  },
  {
    title: "Dante print design",
    thumbnail: dante,
    category: "Print Design",
    services: ["brochure", "flyer", "poster"],
    client: "Dante",
    url: "https://",
  },
  {
    title: "NCBA brand design",
    thumbnail: ncba,
    category: "Branding",
    services: [
      "logo",
      "website",
      "company profile",
      "color palette",
      "social media posts",
    ],
    client: "NCBA Rwanda",
    url: "https://",
  },
  {
    title: "Shutteris brand design",
    thumbnail: shutteris,
    category: "Full Package",
    services: [
      "logo",
      "website",
      "company profile",
      "color palette",
      "social media posts",
      "brochure",
    ],
    client: "Shutteris",
    url: "https://",
  },
  // ...more projects
];

// Component
const Work = () => {
  const [fullwork, setFullwork] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  // Pagination calculations
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Handle pagination page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search and filter
  useEffect(() => {
    let updatedProjects = projects;

    // Search logic
    if (search) {
      updatedProjects = updatedProjects.filter(
        (project) =>
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.category.toLowerCase().includes(search.toLowerCase()) ||
          project.services.some((service) =>
            service.toLowerCase().includes(search.toLowerCase())
          )
      );
    }

    // Category filter
    if (selectedCategory) {
      updatedProjects = updatedProjects.filter(
        (project) => project.category === selectedCategory
      );
    }

    // Sort order
    if (sortOrder === "latest") {
      updatedProjects = updatedProjects.reverse();
    }

    setFilteredProjects(updatedProjects);
  }, [search, selectedCategory, sortOrder]);

  // Fullscreen modal open/close
  const handleFullscreen = (project) => setFullwork(project);
  const closeModal = () => setFullwork(null);

  return (
    <>
      <div className="work">
        <div className="container">
          <div className="sec-title">
            {/* Search and filter section */}
            <div className="filters">
              <input
                type="text"
                placeholder="Search by title, category, or service..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Branding">Branding</option>
                <option value="Full Package">Full Package</option>
                <option value="Print Design">Print Design</option>
              </select>
              <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>

            {/* Showing count */}
            <div className="count">
              {`Showing ${indexOfFirstProject + 1}–${Math.min(
                indexOfLastProject,
                filteredProjects.length
              )} of ${filteredProjects.length} results`}
            </div>
          </div>

          {/* Projects display */}
          <div className="content">
            <div className="projects">
              {currentProjects.map((project, index) => (
                <div key={index} className="project">
                  <div className="project-image">
                    <img src={project.thumbnail} alt={project.title} />
                    <button onClick={() => handleFullscreen(project)}>
                      <MdFullscreen />
                    </button>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <div className="action">
                      <a href={project.url}>Preview the project</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(filteredProjects.length / projectsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen modal */}
      {fullwork && (
        <div className="fullscreen">
          <div className="overlay" onClick={closeModal}></div>
          <span className="close" onClick={closeModal}>
            <MdClose />
          </span>
          <div className="modal-content">
            <div className="img">
              <img src={fullwork.thumbnail} alt={fullwork.title} />
            </div>
            <div className="detail">
              <h2>{fullwork.title}</h2>
              <div className="col">
                <ul>
                  <span>Design</span>
                  {fullwork.services.map((item, index) => (
                    <li key={index} className="design">
                      {item}
                    </li>
                  ))}
                </ul>
                <ul>
                  <span>Client</span>
                  <li>{fullwork.client}</li>
                </ul>
              </div>
              <div>
                <a href={fullwork.url}>View project</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
