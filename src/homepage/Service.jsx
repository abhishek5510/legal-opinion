import React from "react";

const services = [
  {
    title: "Design",
    sub: [
      "Branding",
      "Logo Design",
      "Illustration",
      "Print Design",
      "UI/UX Design",
      "Web Design",
      "Mobile App Design",
      "Packaging Design",
      "Infographic Design",
      "Social Media Graphics",
    ],
  },
  {
    title: "Development",
    sub: [
      "Web Development",
      "Mobile App Development",
      "Software Development",
      "E-Commerce Platform Development",
      "Custom API Development",
      "Database Design and Management",
      "Content Management Systems (CMS)",
    ],
  },
  {
    title: "Marketing",
    sub: [
      "Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Pay-Per-Click Advertising (PPC)",
      "Affiliate Marketing",
    ],
  },
  {
    title: "Other",
    sub: [
      "Consulting",
      "Project Management",
      "Technical Support",
      "Training and Workshops",
    ],
  },
];


function Service() {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="sec-title">
            <div>
              <h2>What we do is to take your business to the next level</h2>
              <p>
                We’re an experience design agency in Rwanda — building brands,
                develop strategies, tell stories, create digital platforms and
                experiences for transformation, growth, and success.
              </p>
            </div>
            <div>
              <a href="/services">View all services</a>
            </div>
          </div>
          <div className="content">
            {services.map((service, index) => (
              <div key={index} className="our-service">
                <div>
                  <h3>{service.title}</h3>
                </div>
                <div>
                  <ul>
                    {service.sub.map((sub, index) => (
                      <li key={index}>{sub}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
