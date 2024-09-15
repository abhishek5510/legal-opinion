import React from "react";

const services = [
  {
    title: "Website Design and Development",
    description:
      "We don’t just build websites; we craft digital experiences that captivate and convert. From sleek, responsive designs to seamless user journeys, our websites do more than look good—they drive results. Need an e-commerce platform or a corporate site? We’ve got you covered.",
  },
  {
    title: "Mobile App Development",
    description:
      "Your app should do more than just function—it should engage, solve problems, and stand out. Our mobile app development delivers smooth, intuitive experiences for both iOS and Android users, customized to meet your specific needs. Let’s turn your idea into a must-have app.",
  },
  {
    title: "Custom Software Development",
    description:
      "Why settle for one-size-fits-all? Our custom software solutions are tailored to your exact business requirements, automating processes and solving complex challenges. Whether it’s a CRM or a bespoke internal tool, we create software that works as hard as you do.",
  },
  {
    title: "Graphic Design",
    description:
      "Great design speaks volumes. Our team creates stunning visuals that make your brand unforgettable. From logos to marketing materials, our designs not only look great—they tell your story. Ready for a brand makeover?",
  },
  {
    title: "Brand Identity",
    description:
      "Your brand is more than a logo—it’s an experience. We help you craft a cohesive and compelling brand identity that resonates with your audience, setting you apart in a crowded marketplace. Let’s create a brand that’s impossible to ignore.",
  },
  {
    title: "UI/UX Design",
    description:
      "We design with your users in mind. Our UI/UX designs make your product intuitive, efficient, and delightful to use, driving engagement and satisfaction. Better experiences lead to better results—let’s make that happen for your platform.",
  },
  {
    title: "Digital Marketing",
    description:
      "We turn clicks into customers. Our digital marketing strategies are laser-focused on growth—whether through SEO, social media, or targeted ad campaigns. It’s not about likes; it’s about measurable results that move your business forward.",
  },
  {
    title: "Support and Maintenance",
    description:
      "Launching is just the beginning. We provide ongoing support and maintenance to ensure your website or app is always running smoothly, secure, and up-to-date. Think of us as your digital partner, always ready to help.",
  },
  {
    title: "Cybersecurity",
    description:
      "In today’s digital landscape, security is non-negotiable. We provide robust cybersecurity solutions to protect your business from threats, ensuring your data and systems are always secure. Sleep better knowing your business is safe.",
  },
  {
    title: "Internet of Things (IoT) Solutions",
    description:
      "We bring innovation to life with cutting-edge IoT solutions that streamline operations and enhance convenience. From smart homes to industrial monitoring, our IoT systems connect the physical and digital worlds in meaningful ways.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalability, flexibility, and security—our cloud solutions give your business the agility it needs to thrive. Whether migrating to the cloud or optimizing your current setup, we ensure you’re always operating at peak efficiency.",
  },
  {
    title: "IT Support and Consultancy",
    description:
      "Need expert guidance? Our IT support and consultancy services provide the technical expertise your business needs to stay ahead. From system setups to troubleshooting, we keep your tech infrastructure running smoothly.",
  },
];

function Service() {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="content">
            {services.map((service, index) => (
              <div className="box" key={index}>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
