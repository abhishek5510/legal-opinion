import React from "react";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="content">
            <span>Navigating Land Law, Digitally</span>
            <h2>It’s Not About Paperwork—It’s About Peace of Mind.</h2>
            <p>
              Property disputes don’t wait—but neither do we.
              From verification to full legal coverage, we safeguard your land.
              Think of it as insurance for your peace of mind.
              Your property, protected today and tomorrow.
              <hr />
              <div style={{ fontSize: '16px', fontWeight: '400', marginTop: '10px' }}>
                Click below to schedule a call with our experts.
              </div>
            </p>
            <a
              href="https://cal.com/theopinionbench/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get In Touch
            </a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
