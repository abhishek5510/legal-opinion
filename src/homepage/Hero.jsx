import React from "react";

import join from "./../assets/images/other/join.png";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="content">
            <h1>Seamless digital solutions that connect you to the world.</h1>
            <p>
              At Kampus Agency, we specialize in crafting innovative software,
              creative designs, and impactful digital strategies that help
              businesses thrive. Whether you're a startup or an established
              brand, we connect you with your audience through tailored digital
              solutions.
            </p>

            <div className="action">
              <a href="/get-started">Start a Project</a>
              <a href="/courses">Start Learning</a>
            </div>

            <div className="join">
              <span>
                <img src={join} alt="Join" />
              </span>
              <span className="text">
                Join Iwmvictor, Ange MT, K.A and 12K+ others
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
