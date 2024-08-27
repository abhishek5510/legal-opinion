import React, { useEffect, useState } from "react";
import partner1 from "./../assets/images/partner/01.svg";
import partner2 from "./../assets/images/partner/02.svg";
import partner3 from "./../assets/images/partner/03.svg";
import partner4 from "./../assets/images/partner/04.svg";
import partner5 from "./../assets/images/partner/05.svg";
import star from "./../assets/images/partner/star.svg";

const brands = [partner1, partner2, partner3, partner4, partner5];

function Brands() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4; // Number of items visible at once

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Looping logic to reset index when reaching the end of the array
        return (prevIndex + 1) % brands.length;
      });
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="brands">
      <div className="content">
        <div className="title">
          <h2>Our Collaborators</h2>
        </div>
        <div className="slider">
          <div
            className="slides"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
            }}
          >
            {brands.concat(brands).map((brand, index) => (
              <div key={index} className="item">
                <img src={brand} alt={`Brand ${index + 1}`} />
                <img className="star" src={star} alt="star" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
