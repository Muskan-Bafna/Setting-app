import React from "react";
import { Link } from "react-router-dom";

function OffHotspot() {
  return (
    <>
      <section>
        <Link to={"/personal"} className="Link">
          <div className="content">
            <div className="container" id="data">
              <i className="fa-solid fa-less-than"></i>
              <h1 classNameName="display">Turn off hotspot automatically</h1>
            </div>
            <label className="switch"></label>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>5 minutes</h3>
          </div>
          <h3>
            <i className="fa-solid fa-check"></i>
          </h3>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>10 minutes</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>30 minutes</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            k<h3>60 minutes</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Don't auto turn off</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export { OffHotspot };
