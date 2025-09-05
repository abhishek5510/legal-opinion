import React from "react";

const services = [
  {
    title: "End-to-End Legal Verification & Documentation ✅",
    description:
      "Book your property, and leave the rest to us. From verification to paperwork, we handle it all. No queues, no confusion—just a smooth process. Enjoy zero-hassle ownership with full legal assurance.",
  },
  {
    title: "Legal Verification Only 📑",
    description:
      "Share your property papers with our experts. We deliver a professional opinion you can trust. Choose between a written or oral format. Get clarity without unnecessary complexity.",
  },
  {
    title: "Dual Legal Opinions ⚖️",
    description:
      "Two lawyers, one property—double the confidence. Receive independent opinions from trusted experts. We’ll even provide a side-by-side comparison. Make well-informed decisions, faster and smarter.",
  },
  {
    title: "Land Insurance (Legal Cost Coverage) 🛡️",
    description: "Stay worry-free about future disputes. If issues arise, we cover the legal costs. From court fees to lawyer charges, we’ve got you. Your land stays yours, without financial stress."
  },
  {
    title: "Buyer Insights 💡",
    description: "Learn what other buyers really think. Get authentic feedback and property insights. Know the strengths and risks upfront. Buy smarter with real buyer experiences."
  }

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
