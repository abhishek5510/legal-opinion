import React, { useState } from "react";

import hense from "./../assets/images/projects/hense.jpg";
import ikreditt from "./../assets/images/projects/ikreditt.webp";
import dante from "./../assets/images/projects/dante.jpg";
import ncba from "./../assets/images/projects/ncba.jpg";
import shutteris from "./../assets/images/projects/shutteris.jpg";
import { FaTimes } from "react-icons/fa";
import { MdClose, MdFullscreen } from "react-icons/md";

const projects = [
  {
    title: "Hense brand design",
    thumbnail: hense,
    design: [
      "logo",
      "website",
      "company profile",
      "color palette",
      "social media posts",
    ],
    client: "Hense group",
    url: "https://"
  },
  {
    title: "Ikreditt brand design",
    thumbnail: ikreditt,
    design: [
      "logo",
      "website",
      "company profile",
      "color palette",
      "social media posts",
      "brochure",
    ],
    client: "Ikreditt",
    url: "https://"
  },
  {
    title: "Dante print design",
    thumbnail: dante,
    design: ["brochure", "flyer", "poster"],
    client: "Dante",
    url: "https://"
  },
  {
    title: "NCBA brand design",
    thumbnail: ncba,
    design: [
      "logo",
      "website",
      "company profile",
      "color palette",
      "social media posts",
    ],
    client: "NCBA Rwanda",
    url: "https://"
  },
  {
    title: "Shutteris brand design",
    thumbnail: shutteris,
    design: [
      "logo",
      "website",
      "company profile",
      "color palette",
      "social media posts",
      "brochure",
    ],
    client: "Shutteris",
    url: "https://"
  },
];

function Work() {
  const [fullwork, setFullwork] = useState(null);

  const handleFullscreen = (project) => {
    setFullwork(project);
  };

  const closeModal = () => {
    setFullwork(null);
  };

  return (
    <>
      <div className="work">
        <div className="container">
          <div className="sec-title">
            <div>
              <h2>Latest projects we worked on</h2>
            </div>
            <div>
              <a href="/projects">Explore more</a>
            </div>
          </div>
          <div className="content">
            <div className="projects">
              {projects.map((project, index) => (
                <div key={index} className="project">
                  <div className="project-image">
                    <img src={project.thumbnail} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <div className="action">
                      <button onClick={() => handleFullscreen(project)}>
                        <MdFullscreen />
                      </button>
                      <a href={project.url}>Preview the project</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
                  {fullwork.design.map((item, index) => (
                    <li key={index} className="design">{item}</li>
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
}

export default Work;
