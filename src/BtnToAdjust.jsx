import React from "react";
import { Link } from "react-router-dom";

function BtnToAdjust() {
  return (
    <>
      <section>
        <Link to={"/sound"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-greater-than"></i>
              <h2>Use the volume buttons to adjust</h2>
            </div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Ringtone</h3>
          </div>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Media</h3>
          </div>
        </div>
      </section>
    </>
  );
}
export { BtnToAdjust };
