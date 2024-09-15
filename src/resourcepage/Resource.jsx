import React, { useState } from "react";
import { FaDownload, FaShareAlt, FaShoppingCart } from "react-icons/fa";
import plastic from "./../assets/images/resources/plastic.png";
import nueu from "./../assets/images/resources/nueu.png";
import billboard from "./../assets/images/resources/billboard.png";

// Resource data
const resources = [
  {
    id: 1,
    thumbnail: plastic,
    title: "Free M2 iPad Pro on Wood Stand Mockup",
    price: 0,
    category: "Graphic Design",
  },
  {
    id: 2,
    thumbnail: nueu,
    title: "Neue helvetica font free",
    price: 0,
    category: "Typography",
  },
  {
    id: 3,
    thumbnail: billboard,
    title: "Framed Illuminated Poster Mockup PSD",
    price: 50,
    category: "Web Design",
  },
  {
    id: 4,
    thumbnail: billboard,
    title: "Framed Illuminated Poster Mockup PSD",
    price: 0,
    category: "Banner Design",
  },
];

const ITEMS_PER_PAGE = 12; // Number of items per page for pagination

function Resource() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortType, setSortType] = useState("latest");
  const [categoryFilter, setCategoryFilter] = useState("all"); // Category filter
  const [currentPage, setCurrentPage] = useState(1); // Pagination

  // Get unique categories from resources for filtering
  const categories = [
    ...new Set(resources.map((resource) => resource.category)),
  ];

  // Handle search, filter, and sort
  const filteredResources = resources
    .filter((resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (resource) =>
        filterType === "all" ||
        (filterType === "free" && resource.price === 0) ||
        (filterType === "premium" && resource.price > 0)
    )
    .filter(
      (resource) =>
        categoryFilter === "all" || resource.category === categoryFilter
    )
    .sort((a, b) => {
      if (sortType === "alphabetic") return a.title.localeCompare(b.title);
      if (sortType === "latest") return b.id - a.id;
      return 0;
    });

  // Pagination Logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentResources = filteredResources.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCopyLink = (title) => {
    navigator.clipboard.writeText(
      `${window.location.origin}/resources/${title}`
    );
    alert(`Link copied for ${title}`);
  };

  // Calculate the resource count for the current page
  const totalResults = filteredResources.length;
  const startResult = indexOfFirstItem + 1;
  const endResult = Math.min(indexOfLastItem, totalResults);

  return (
    <div className="resource">
      <div className="container">
        <div className="content">
          <div className="filter-controls">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select onChange={(e) => setFilterType(e.target.value)}>
              <option value="all">All</option>
              <option value="free">Free</option>
              <option value="premium">Premium</option>
            </select>
            {/* New category filter */}
            <select onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="all">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select onChange={(e) => setSortType(e.target.value)}>
              <option value="latest">Latest</option>
              <option value="alphabetic">Alphabetical</option>
            </select>
          </div>

          <div className="page-action">
            <div className="resource-count">
              {totalResults > 0 ? (
                <p>
                  Showing {startResult}–{endResult} of {totalResults} results
                </p>
              ) : (
                <p>No resources found</p>
              )}
            </div>
            <div className="pagination-controls">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          </div>

          <div className="resource-grid">
            {currentResources.map((resource) => (
              <div key={resource.id} className="resource-card">
                <div className="image">
                  <img src={resource.thumbnail} alt={resource.title} />
                  <span>
                    {resource.price === 0 ? "Free" : `₦${resource.price}`}
                  </span>
                  <p className="category">{resource.category}</p>
                </div>
                <div className="card-content">
                  <h3>{resource.title}</h3>
                  <div className="card-actions">
                    {resource.price === 0 ? (
                      <button className="download-btn button">
                        <FaDownload /> Download
                      </button>
                    ) : (
                      <button className="buy-btn button">
                        <FaShoppingCart /> Buy
                      </button>
                    )}
                    <button
                      className="share"
                      onClick={() => handleCopyLink(resource.title)}
                    >
                      <FaShareAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
        </div>
      </div>
    </div>
  );
}

export default Resource;
