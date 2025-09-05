import React, { useState, useEffect } from "react";
import user1 from "./../assets/images/user/01.webp";
import user2 from "./../assets/images/user/02.webp";
import user3 from "./../assets/images/user/01.webp";
import user4 from "./../assets/images/user/02.webp";
import user5 from "./../assets/images/user/01.webp";
import { MdClose } from "react-icons/md";

const testimonials = [
  {
    text: "The entire property paperwork was handled smoothly—I didn’t have to lift a finger.",
    name: "Madhu",
    role: "Patna",
    company: "Bihar",
    image: user1,
  },
  {
    text: "Their legal opinion gave me instant clarity and saved me from a risky deal.",
    name: "Vinayak Sharma",
    role: "Agra",
    company: "Uttar Pradesh",
    image: user2,
  },
  {
    text: "Getting two expert opinions side by side made my decision quick and confident.",
    name: "Chandrashekhar Nath Dubey",
    role: "Bengaluru",
    company: "Karnataka",
    image: user3,
  },
  {
    text: "Buyer insights were eye-opening and helped me negotiate smarter.",
    name: "Ankur Vatsa",
    role: "Bengaluru",
    company: "Karnataka",
    image: user4,
  },
  {
    text: "Their land insurance gave me true peace of mind—no fear of hidden legal costs.",
    name: "Anukant Kumar",
    role: "Bengaluru",
    company: "Karnataka",
    image: user5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [addReview, setAddReview] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    review: "",
    media: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      media: [...prevData.media, ...files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, you can handle sending data to the backend or API call.
    closeModal();
  };

  const closeModal = () => {
    setAddReview(false);
  };

  useEffect(() => {
    if (formData.company.toLowerCase() === "none") {
      setFormData((prevData) => ({
        ...prevData,
        position: "",
      }));
    }
  }, [formData.company]);

  // Update the activeIndex to display two testimonials at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 10000); // Auto-slide every 10 seconds
    return () => clearInterval(interval);
  }, []);

  // Calculate width of the scrollbar thumb
  const thumbWidth = (100 / testimonials.length) * 2;

  return (
    <>
      <div className="testimonial">
        <div className="container">
          <div className="sec-title">
            <h1 className="section-title">Trusted by property buyers across India.</h1>
            <span>
              <button onClick={() => setAddReview(true)}>
                Leave us a review
              </button>
            </span>
          </div>
          <div className="testimonial-slider">
            <div className="testimonial-list">
              {testimonials
                .slice(activeIndex, activeIndex + 2)
                .map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <p className="testimonial-text">“{testimonial.text} ”</p>
                    <div className="testimonial-info">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-image"
                      />
                      <div className="testimonial-details">
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-role">
                          {testimonial.role} — {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Testimonial Navigation - horizontal line scrollbar */}
            <div className="testimonial-navigation">
              <div className="track">
                <div
                  className="thumb"
                  style={{
                    width: `${thumbWidth}%`,
                    transform: `translateX(${
                      (activeIndex / testimonials.length) * 100
                    }%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {addReview && (
          <div className="add-review-modal">
            <div className="overlay" onClick={closeModal}></div>
            <div className="modal-content">
              <button className="close" onClick={closeModal}>
                <MdClose />
              </button>
              <h2 className="title">Leave us a Review or Testimony</h2>
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Fullnames"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                {formData.company &&
                  formData.company.toLowerCase() !== "none" && (
                    <div className="form-group">
                      <input
                        type="text"
                        id="position"
                        name="position"
                        placeholder="Position"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                <div className="form-group">
                  <textarea
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    required
                    placeholder="Type your review/testimony here"
                  ></textarea>
                  <div className="media-upload">
                    <input
                      type="file"
                      id="media-upload"
                      multiple
                      placeholder="Wanna add medias"
                      accept=".doc,.docx,image/*,video/*,audio/*"
                      onChange={handleMediaUpload}
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Testimonials;
