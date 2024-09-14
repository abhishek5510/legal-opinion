import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Cta() {
  return (
    <>
      <div className="cta">
        <div className="container">
          <div className="content">
            <span>
              we are design — development — IT services — digital marketing &
              more
            </span>
            <h2>Have a project in your mind?</h2>
            <div className="action">
              <div>
                <a href="" className="talk">Talk to us </a>
              </div>
              <div>
                <a href="" className="dots"><HiOutlineDotsHorizontal/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
