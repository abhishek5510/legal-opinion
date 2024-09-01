import React from "react";

const services = [
  {
    title: "Graphic design",
    sub: [
      "Illustrations",
      "Flyers",
      "Animations",
      "Banner design",
      "Business cards",
      "Report design",
      "Signatures",
      "Iconography",
    ],
  },
  {
    title: "Web development and support",
    sub: [
      "Front-end development",
      "Back-end development",
      "Full-stack development",
      "WordPress development",
      "Webflow development",
      "Shopify development",
      "Speed optimisation",
      "WordPress hosting",
      "Marketing & automation",
      "Maintenance, security & updates",
      "Responsive web design",
      "Web application development",
      "E-commerce website development",
      "Web design",
    ],
  },
  {
    title: "Branding and UI/UX design",
    sub: [
      "Logo design",
      "Brand guidelines",
      "Print design",
      "Label design",
      "Packaging design",
      "UI/UX design",
      "Website design",
      "Mobile app design",
      "Wireframing & prototyping",
    ],
  },
  {
    title: "Motion graphics and video production",
    sub: [
      "Social media videos",
      "Product demo videos",
      "Logo animations",
      "Video editing and subtitling",
      "Animated ads",
      "Educational & FAQ videos",
      "UI/UX animations",
      "Product highlight videos",
      "3D video",
      "Corporate video production",
    ],
  },
  {
    title: "Marketing designs",
    sub: [
      "Social media posts",
      "Motion graphics design",
      "PPC Ad creative design",
      "Email templates",
      "Video production",
      "Infographic design",
      "Presentations & pitch decks",
      "Promo creative design",
      "Amazon imagery design",
    ],
  },
  {
    title: "Digital marketing",
    sub: [
      "SEO",
      "Social media marketing",
      "Content marketing",
      "Email marketing",
      "Influencer marketing",
      "Paid advertising",
      "Analytics",
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
